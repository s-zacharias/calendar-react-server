import React, { useState, useEffect } from 'react';
import Header from './Header';
import Body from './Body';

const Calendar = () => {
  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());

  const getFirstDayOfMonth = (date) => {
    const firstOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    return firstOfMonth.getDay();
  };

  const [firstDay, setFirstDay] = useState(getFirstDayOfMonth(date));

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setFirstDay(getFirstDayOfMonth(date));
  }, [date]);

  return (
    <div className="calendar">
      <Header
        today={today}
        day={day}
        month={month}
        year={year}
        setDate={setDate}
      />
      <Body
        today={today}
        date={date}
        month={month}
        year={year}
        firstDay={firstDay}
      />
    </div>
  );
};

export default Calendar;
