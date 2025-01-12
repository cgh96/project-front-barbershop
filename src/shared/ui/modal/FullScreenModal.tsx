import "./FullScreenModal.scss";

import type { TModalSlideAnimation } from "@shared/types";
import type { PropsWithChildren } from "react";

export interface BackDropProps extends PropsWithChildren {
  children: React.ReactNode;
  animation: TModalSlideAnimation;
}

export const FullScreenModal: React.FC<BackDropProps> = ({
  children,
  animation,
}) => {
  return <div className={`modal full-screen ${animation}`}>{children}</div>;
};
