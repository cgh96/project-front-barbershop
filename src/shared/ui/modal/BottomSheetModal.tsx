import type { TModalSlideAnimation } from "@shared/types";

import styles from "./BottomSheetModal.module.scss";

interface IBottomSheetModalProps {
  animation: TModalSlideAnimation;
  children: React.ReactNode;
}

export const BottomSheetModal: React.FC<IBottomSheetModalProps> = ({
  children,
  animation,
}) => {
  const className = `${styles["bottom-sheet"]} ${animation}`;

  return <div className={className}>{children}</div>;
};
