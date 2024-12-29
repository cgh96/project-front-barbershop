import "./BaseButton.scss";

import type { TBaseButtonSize, TBaseButtonVariant } from "@shared/types";
import { BaseButtonSize } from "@shared/types";

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
  const className = `base-btn ${variant} ${size}`;

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
