import events from '../../apis/events';
import history from '../../history';
import {
  SELECT_DAY,
  CREATE_EVENT,
  FETCH_EVENTS,
  FETCH_EVENT,
  DELETE_EVENT,
  EDIT_EVENT,
} from './types';

export const selectDay = (day, weekday) => {
  return {
    type: SELECT_DAY,
    payload: {
      day,
      weekday,
    },
  };
};

export const createEvent = ({ event, date, notes, type }) => async (
  dispatch
) => {
  const response = await events.post('/events', { event, date, notes, type });

  dispatch({ type: CREATE_EVENT, payload: response.data });
  history.push('/');
};

export const fetchEvents = () => async (dispatch) => {
  const response = await events.get('/events');

  dispatch({ type: FETCH_EVENTS, payload: response.data });
};

export const fetchEvent = (id) => async (dispatch) => {
  const response = await events.get(`/events/${id}`);

  dispatch({ type: FETCH_EVENT, payload: response.data });
};

export const editEvent = (id, { event, date, notes, type }) => async (
  dispatch
) => {
  const response = await events.put(`/events/${id}`, {
    event,
    date,
    notes,
    type,
  });

  dispatch({ type: EDIT_EVENT, payload: response.data });
  history.push('/');
};

export const deleteEvent = (id) => async (dispatch) => {
  await events.delete(`/events/${id}`);

  dispatch({ type: DELETE_EVENT, payload: id });
  history.push('/');
};
