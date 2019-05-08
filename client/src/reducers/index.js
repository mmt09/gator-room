import { combineReducers } from 'redux';
import searchReducer from './search_reducer';
import allListingsReducer from './all_listings_reducer';
import listingDetailsReducer from './listing_details_reducer';
import signupReducer from './signup_reducer';
import loginReducer from './login_reducer';

export default combineReducers({
  search: searchReducer,
  allListings: allListingsReducer,
  listingDetails: listingDetailsReducer,
  signup: signupReducer,
  login: loginReducer,
});
