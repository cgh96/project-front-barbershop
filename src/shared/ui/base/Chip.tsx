import "./Chip.scss";

export interface ChipProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mainLabel: string;
  subLabel?: string;
  selected?: boolean;
}

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
