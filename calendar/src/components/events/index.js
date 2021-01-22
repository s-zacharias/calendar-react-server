import React from 'react';
import { connect } from 'react-redux';
import EventList from './EventList';

const DayEventDisplay = ({ dates }) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const dateSplit = dates.day.split('-');
  const year = dateSplit[0];
  const month = months[dateSplit[1] - 1];
  const day = dateSplit[2];

  return (
    <div className="day-event-display">
      <h1>{`${dates.weekday}\n${month} ${day}, ${year}`}</h1>
      <div className="ui section divider"></div>
      <EventList selectedDay={dates.day} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dates: state.dates,
  };
};

export default connect(mapStateToProps)(DayEventDisplay);
