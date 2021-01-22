import {
  CREATE_EVENT,
  EDIT_EVENT,
  FETCH_EVENT,
  FETCH_EVENTS,
  DELETE_EVENT,
} from '../actions/types';
import _ from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_EVENT:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_EVENT:
      console.log('CREATE EVENT');
      return { [action.payload.id]: action.payload, ...state };
    case EDIT_EVENT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_EVENT:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
