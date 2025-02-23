import type { PropsWithChildren } from "react";

export const Page: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="page-container">{children}</div>;
};
