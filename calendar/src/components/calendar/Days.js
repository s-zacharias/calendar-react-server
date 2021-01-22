import React from 'react';
import { connect } from 'react-redux';
import { selectDay } from '../../redux/actions';
import DayEventSummary from '../events/DayEventSummary';

const Days = ({ today, date, month, year, firstDay, dates, selectDay }) => {
  const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const leapDaysInMonths = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const isLeapYear = (year) => {
    if (year % 400 || (year % 4 && year % 100 !== 0)) {
      return true;
    }
  };

  const numberOfDays = isLeapYear(date.getFullYear())
    ? leapDaysInMonths
    : daysInMonths;

  const getDaysOfMonth = Array(numberOfDays[month] + firstDay)
    .fill(null)
    .map((el, index) => {
      const d = index - (firstDay - 1);
      let type = '';
      if (
        d === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear()
      ) {
        type = 'day-current';
      }

      const date = `${
        year +
        (month > 9 ? '-'.concat(month + 1) : '-0'.concat(month + 1)) +
        (d >= 10 ? '-'.concat(d) : '-0'.concat(d))
      }`;

      // code to find weekday
      let weekday = '';

      const sundays = [0, 7, 14, 21, 28, 35];
      const mondays = [1, 8, 15, 22, 29, 36];
      const tuesdays = [2, 9, 16, 23, 30];
      const wednesdays = [3, 10, 17, 24, 31];
      const thursdays = [4, 11, 18, 25, 32];
      const fridays = [5, 12, 19, 26, 33];
      const saturdays = [6, 13, 20, 27, 34];

      if (sundays.includes(index)) {
        weekday = 'Sunday';
      } else if (mondays.includes(index)) {
        weekday = 'Monday';
      } else if (tuesdays.includes(index)) {
        weekday = 'Tuesday';
      } else if (wednesdays.includes(index)) {
        weekday = 'Wednesday';
      } else if (thursdays.includes(index)) {
        weekday = 'Thursday';
      } else if (fridays.includes(index)) {
        weekday = 'Friday';
      } else if (saturdays.includes(index)) {
        weekday = 'Saturday';
      }

      return (
        <div
          key={index}
          className="day"
          onClick={() => selectDay(date, weekday)}
        >
          <div className={`day-number ${type}`}>{d > 0 ? d : ''}</div>
          <DayEventSummary date={date} />
        </div>
      );
    });
  return <div className="month">{getDaysOfMonth}</div>;
};

const mapStateToProps = (state) => {
  return {
    dates: state.dates,
  };
};

export default connect(mapStateToProps, { selectDay })(Days);
