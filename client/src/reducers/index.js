import { combineReducers } from 'redux';
import search_reducer from './search_reducer';

export default combineReducers({
  search: search_reducer,
});
