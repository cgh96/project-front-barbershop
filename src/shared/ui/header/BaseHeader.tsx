import "./BaseHeader.scss";

import { BaseHeaderVariant } from "@shared/types";

interface ModalHeaderProps {
  variant?: string;
  Left?: React.ReactNode;
  Center?: React.ReactNode;
  Right?: React.ReactNode;
}

export const BaseHeader: React.FC<ModalHeaderProps> = ({
  variant = BaseHeaderVariant.Primary,
  Left,
  Center,
  Right,
}) => {
  return (
    <div className={`header-container ${variant}`}>
      <div className="left">{Left}</div>
      <div className="center">{Center}</div>
      <div className="right">{Right}</div>
    </div>
  );
};
