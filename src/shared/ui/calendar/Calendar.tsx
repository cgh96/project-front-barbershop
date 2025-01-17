import dayjs from "dayjs";
import { useState } from "react";

import { CalendarControls } from "./CalendarControls";
import styles from "./Calender.module.scss";
import { CurrentDays } from "./CurrentDays";
import { NextDays } from "./NextDays";
import { PrevDays } from "./PrevDays";
import { WeekDays } from "./WeekDays";

export const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState<number | null>(
    dayjs().date()
  );
  const startOfMonth = currentDate.startOf("month");
  const endOfMonth = currentDate.endOf("month");
  const daysInMonth = endOfMonth.date();
  const startDay = startOfMonth.day();

  const prevMonthDays = startOfMonth.subtract(1, "month").endOf("month").date();
  const adjustedStartDay = startDay === 0 ? 6 : startDay - 1;

  const totalDays = adjustedStartDay + daysInMonth;
  const nextDaysCount = totalDays < 42 ? 42 - totalDays : 0;

  const goToPreviousMonth = () => {
    setCurrentDate(currentDate.subtract(1, "month"));
  };

  const goToNextMonth = () => {
    setCurrentDate(currentDate.add(1, "month"));
  };

  const handleDateClick = (date: number) => {
    setSelectedDate(date);
  };

  return (
    <div className={styles["calendar"]}>
      <div className={styles["calendar-header"]}>
        <span>날짜선택</span>
        {/* 날짜 */}
        <CalendarControls
          currentDate={currentDate}
          goToPreviousMonth={goToPreviousMonth}
          goToNextMonth={goToNextMonth}
        />
      </div>

      <div className={styles["calendar-body"]}>
        {/* 요일 (월 ~ 금) */}
        <WeekDays />
        {/* 캘린더 */}
        <PrevDays
          prevMonthDays={prevMonthDays}
          adjustedStartDay={adjustedStartDay}
        />
        <CurrentDays
          daysInMonth={daysInMonth}
          selectedDate={selectedDate}
          handleDateClick={handleDateClick}
        />
        <NextDays nextDaysCount={nextDaysCount} />
      </div>
    </div>
  );
};
