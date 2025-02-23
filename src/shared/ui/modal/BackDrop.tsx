import "./BackDrop.scss";

import type { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

export const BackDrop: React.FC<PropsWithChildren> = ({ children }) => {
  return createPortal(
    <div className="backdrop">{children}</div>,
    document.body
  );
};
