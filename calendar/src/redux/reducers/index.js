import { combineReducers } from 'redux';
import dateReducer from './dateReducer';
import eventReducer from './eventReducer';

export default combineReducers({ dates: dateReducer, event: eventReducer });
