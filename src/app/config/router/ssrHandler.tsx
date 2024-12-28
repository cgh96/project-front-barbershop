import { renderToString } from "react-dom/server";
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from "react-router";

import { routes } from "./routes";

const { query, dataRoutes } = createStaticHandler(routes);

export const ssrHandler = async (request: Request) => {
  // 1. run actions/loaders to get the routing context with `query`
  const context = await query(request);

  // If `query` returns a Response, send it raw (a route probably a redirected)
  if (context instanceof Response) {
    return context;
  }

  // 2. Create a static router for SSR
  const router = createStaticRouter(dataRoutes, context);

  // 3. Render everything with StaticRouterProvider
  const html = renderToString(
    <StaticRouterProvider router={router} context={context} />
  );

  // Setup headers from action and loaders from deepest match
  const leaf = context.matches[context.matches.length - 1];
  const actionHeaders = context.actionHeaders[leaf.route.id];
  const loaderHeaders = context.loaderHeaders[leaf.route.id];
  const headers = new Headers(actionHeaders);

  if (loaderHeaders) {
    for (const [key, value] of loaderHeaders.entries()) {
      headers.append(key, value);
    }
  }

  headers.set("Content-Type", "text/html; charset=utf-8");

  // 4. send a response
  return new Response(`<!DOCTYPE html>${html}`, {
    status: context.statusCode,
    headers,
  });
};
