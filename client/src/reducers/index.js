import { combineReducers } from 'redux';
import searchReducer from './search_reducer';
import allListingsReducer from './all_listings_reducer';

export default combineReducers({
  search: searchReducer,
  allListings: allListingsReducer,
});
