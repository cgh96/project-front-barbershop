import type { TBaseButtonSize, TBaseButtonVariant } from "@shared/types";

import { BaseButton } from "./BaseButton";
import styles from "./FooterButton.module.scss";

export interface FooterButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant: TBaseButtonVariant;
  size: TBaseButtonSize;
}

export const FooterButton: React.FC<FooterButtonProps> = ({
  label,
  variant,
  size,
  ...props
}) => {
  return (
    <div className={styles["footer-btn-container"]}>
      <BaseButton label={label} variant={variant} size={size} {...props} />
    </div>
  );
};
