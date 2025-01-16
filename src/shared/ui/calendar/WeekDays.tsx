import styles from "./Calender.module.scss";

export const WeekDays = () => {
  const dayOfTheWeek = ["월", "화", "수", "목", "금", "토", "일"];

  return (
    <div className={styles["calendar-weekdays"]}>
      {dayOfTheWeek.map(day => (
        <div key={day} className={styles["dayOfTheWeek"]}>
          {day}
        </div>
      ))}
    </div>
  );
};
