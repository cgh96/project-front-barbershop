import { TBaseButtonSize, TBaseButtonVariant } from "@shared/config";
import "./BaseButton.scss";

type ButtonProps = {
  label: string;
  variant: TBaseButtonVariant;
  size: TBaseButtonSize;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const BaseButton: React.FC<ButtonProps> = ({
  label,
  variant,
  size,
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
