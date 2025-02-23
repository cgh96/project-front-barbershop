import CloseIcon from "@assets/buttons/x-icon.svg?react";

interface CloseButtonProps {
  onClick: () => void;
}

/** X 버튼 */
export const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} style={{ marginLeft: "13px" }}>
      <CloseIcon />
    </button>
  );
};
