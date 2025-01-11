import styles from "./EventMenuSelectButton.module.scss";

export interface EventMenuSelectButtonProps {
  selectedEvent: string;
}

export const EventMenuSelectButton: React.FC<EventMenuSelectButtonProps> = ({
  selectedEvent,
}) => {
  return (
    <button className={styles["select-btn"]}>
      <span>{selectedEvent}</span>
      {/* @TODO : 달력 들어오면 arror icon 추가 */}
    </button>
  );
};
