import styles from "./EventMenuSelectButton.module.scss";

export interface EventMenuSelectButtonProps {
  selectedEvent: string;
  onClick: () => void;
}

export const EventMenuSelectButton: React.FC<EventMenuSelectButtonProps> = ({
  selectedEvent,
  onClick,
}) => {
  return (
    <button className={styles["select-btn"]} onClick={onClick}>
      <span>{selectedEvent}</span>
      {/* @TODO : 달력 들어오면 arror icon 추가 */}
    </button>
  );
};
