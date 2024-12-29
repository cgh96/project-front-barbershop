import "./BaseHeader.scss";

import { BaseHeaderStyle } from "@shared/types";

interface ModalHeaderProps {
  bg?: string;
  Left?: React.ReactNode;
  Center?: React.ReactNode;
  Right?: React.ReactNode;
}

export const BaseHeader: React.FC<ModalHeaderProps> = ({
  bg = BaseHeaderStyle.Primary,
  Left,
  Center,
  Right,
}) => {
  return (
    <div className={`header-container ${bg}`}>
      <div className="left">{Left}</div>
      <div className="center">{Center}</div>
      <div className="right">{Right}</div>
    </div>
  );
};
