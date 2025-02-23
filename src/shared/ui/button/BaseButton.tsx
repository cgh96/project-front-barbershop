import type { TBaseButtonSize, TBaseButtonVariant } from "@shared/types";
import { BaseButtonSize } from "@shared/types";

import styles from "./BaseButton.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant: TBaseButtonVariant;
  size: TBaseButtonSize;
}

export const BaseButton: React.FC<ButtonProps> = ({
  label,
  variant,
  size = BaseButtonSize.Medium,
  ...props
}) => {
  const className = `${styles["base-btn"]} ${styles[variant]} ${styles[size]}`;

  return (
    <button
      type="button"
      className={className}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {label}
    </button>
  );
};
