import { BaseChipVariant, type TBaseChipVariant } from "@shared/types";

import styles from "./BaseChip.module.scss";

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
  const className = `${styles["chip"]} ${styles[variant]} ${selected ? styles["selected"] : ""}`;

  return (
    <button className={className} type="button" onClick={props.onClick}>
      <span className={styles["main-label"]}>{mainLabel}</span>
      {!!subLabel && <span className={styles["sub-label"]}>{subLabel}</span>}
    </button>
  );
};
