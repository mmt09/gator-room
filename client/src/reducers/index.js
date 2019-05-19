/* eslint-disable object-shorthand */
import { combineReducers } from 'redux';
import searchReducer from './search_reducer';
import allListingsReducer from './all_listings_reducer';
import listingDetailsReducer from './listing_details_reducer';
import listingUploadReducer from './listing_upload_reducer';
import signupReducer from './signup_reducer';
import loginReducer from './login_reducer';
import authReducer from './auth_reducer';

export default combineReducers({
  search: searchReducer,
  allListings: allListingsReducer,
  listingDetails: listingDetailsReducer,
  listingUploadReducer: listingUploadReducer,
  signup: signupReducer,
  login: loginReducer,
  auth: authReducer,
});
