import React from 'react';
import Days from './Days';

const Body = ({ today, date, month, year, firstDay }) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

  const getDayLabels = daysOfWeek.map((day) => {
    return (
      <div className="day-of-week" key={day}>
        <strong>{day}</strong>
      </div>
    );
  });

  return (
    <div className="body">
      <div className="day-labels">{getDayLabels}</div>
      <Days
        today={today}
        date={date}
        month={month}
        year={year}
        firstDay={firstDay}
      />
    </div>
  );
};

export default Body;
