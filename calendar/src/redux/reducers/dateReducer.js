import { SELECT_DAY } from '../actions/types';

const today = new Date();
const day = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();
const current = `${
  year +
  (month >= 10 ? '-'.concat(month + 1) : '-0'.concat(month + 1)) +
  (day >= 10 ? '-'.concat(day) : '-0'.concat(day))
}`;

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const currentWeekday = weekdays[today.getDay()];

const INITIAL_STATE = { day: current, weekday: currentWeekday };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_DAY:
      console.log('SELECT DAY');
      return (state.day = action.payload);
    default:
      return state;
  }
};
