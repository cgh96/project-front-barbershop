import styles from "./Calender.module.scss";

export const NextDays = ({ nextDaysCount }: { nextDaysCount: number }) => {
  return (
    <>
      {Array.from({ length: nextDaysCount }, (_, i) => (
        <button
          type="button"
          key={`next-${i}`}
          className={`${styles.day} ${styles.empty}`}
        >
          {i + 1}
        </button>
      ))}
    </>
  );
};

export default NextDays;
