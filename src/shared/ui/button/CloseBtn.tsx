import CloseIcon from "@assets/buttons/x-icon.svg?react";

interface CloseBtnProps {
  onClick: () => void;
}

/** X 버튼 */
export const CloseBtn: React.FC<CloseBtnProps> = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} style={{ marginLeft: "13px" }}>
      <CloseIcon />
    </button>
  );
};
