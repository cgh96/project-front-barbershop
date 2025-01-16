import styles from "./Calender.module.scss";

export const CurrentDays = ({
  daysInMonth,
  selectedDate,
  handleDateClick,
}: {
  daysInMonth: number;
  selectedDate: number | null;
  handleDateClick: (date: number) => void;
}) => {
  return (
    <>
      {Array.from({ length: daysInMonth }, (_, i) => (
        <button
          type="button"
          key={i + 1}
          className={`${styles.day} ${selectedDate === i + 1 ? styles.selected : ""}`}
          onClick={() => handleDateClick(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </>
  );
};

export default CurrentDays;
