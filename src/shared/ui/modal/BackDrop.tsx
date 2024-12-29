import "./BackDrop.scss";

import type { PropsWithChildren } from "react";

export const BackDrop: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="backdrop">{children}</div>;
};
