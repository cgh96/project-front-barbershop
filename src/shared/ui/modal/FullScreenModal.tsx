import "./FullScreenModal.scss";

import type { TModalAnimation } from "@shared/types";
import type { PropsWithChildren } from "react";

export interface BackDropProps extends PropsWithChildren {
  animation: TModalAnimation;
}

export const FullScreenModal: React.FC<BackDropProps> = ({
  children,
  animation,
}) => {
  return <div className={`modal full-screen ${animation}`}>{children}</div>;
};
