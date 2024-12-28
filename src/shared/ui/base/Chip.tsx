import "./Chip.scss";

export type ChipProps = {
  mainLabel: string;
  subLabel?: string;
  selected?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Chip: React.FC<ChipProps> = ({
  mainLabel,
  subLabel,
  selected = false,
  ...props
}: ChipProps) => {
  const className = `chip ${selected ? "selected" : ""}`;

  return (
    <button className={className} type="button" onClick={props.onClick}>
      <span className="main-label">{mainLabel}</span>
      {!!subLabel && <span className="sub-label">{subLabel}</span>}
    </button>
  );
};
