import { Barber } from "@pages/barber/Barber";
import { BarberShop } from "@pages/barberShop/BarberShop";
import { Home } from "@pages/home/Home";
import type { RouteObject } from "react-router";
import { createBrowserRouter } from "react-router";

export const RoutePath = {
  Home: "/",
  BarberShop: "/barber-shop",
  Barber: "/barber",
};

export const routes: RouteObject[] = [
  {
    path: RoutePath.Home,
    Component: Home,
  },
  {
    path: `${RoutePath.BarberShop}/:barberShopUid`,
    Component: BarberShop,
  },
  {
    path: `${RoutePath.Barber}/:barberUid`,
    Component: Barber,
  },
];

/** Client Side Rendering */
export const browserRouter = createBrowserRouter(routes);

/** Server Side Rendering */
export const serverRouter = createBrowserRouter(routes, {
  hydrationData: window.__staticRouterHydrationData,
});
