import "./BaseChip.scss";

import { BaseChipVariant, type TBaseChipVariant } from "@shared/types";

export interface ChipProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TBaseChipVariant;
  mainLabel: string;
  subLabel?: string;
  selected?: boolean;
}

export const BaseChip: React.FC<ChipProps> = ({
  mainLabel,
  subLabel,
  selected = false,
  variant = BaseChipVariant.Primary,
  ...props
}: ChipProps) => {
  const className = `chip ${variant} ${selected ? "selected" : ""}`;

  return (
    <button className={className} type="button" onClick={props.onClick}>
      <span className="main-label">{mainLabel}</span>
      {!!subLabel && <span className="sub-label">{subLabel}</span>}
    </button>
  );
};
