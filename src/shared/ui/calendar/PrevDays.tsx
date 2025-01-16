import styles from "./Calender.module.scss";

export const PrevDays = ({
  prevMonthDays,
  adjustedStartDay,
}: {
  prevMonthDays: number;
  adjustedStartDay: number;
}) => {
  return (
    <>
      {Array.from({ length: adjustedStartDay }, (_, i) => (
        <button
          type="button"
          key={`prev-${i}`}
          className={`${styles.day} ${styles.empty}`}
        >
          {prevMonthDays - adjustedStartDay + i + 1}
        </button>
      ))}
    </>
  );
};

export default PrevDays;
