import LeftButtonIcon from "@assets/buttons/LButton-icon.svg?react";
import RightButtonIcon from "@assets/buttons/RButton-icon.svg?react";
import type { Dayjs } from "dayjs";

import styles from "./Calender.module.scss";
export const CalendarControls = ({
  currentDate,
  goToPreviousMonth,
  goToNextMonth,
}: {
  currentDate: Dayjs;
  goToPreviousMonth: () => void;
  goToNextMonth: () => void;
}) => {
  return (
    <div className={styles["calendar-controls"]}>
      <button type="button" className="prev-btn" onClick={goToPreviousMonth}>
        <LeftButtonIcon />
      </button>
      <div>{currentDate.format("YYYY.MM")}</div>
      <button type="button" className="next-btn" onClick={goToNextMonth}>
        <RightButtonIcon />
      </button>
    </div>
  );
};
