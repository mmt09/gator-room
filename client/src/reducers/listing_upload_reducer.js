import {
  FETCH_LISTING_UPLOAD,
  UPLOAD_LISTING_FILTERS,
  REMOVE_UPLOADED_LISTING_ID,
} from '../actions/types';

const INITIAL_STATE = {
  listingUpdate: null,
  listingFiltersResult: '',
};
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_LISTING_UPLOAD:
      return { ...state, listingUpdate: action.payload };
    case UPLOAD_LISTING_FILTERS:
      return { ...state, listingFiltersResult: action.payload };
    case REMOVE_UPLOADED_LISTING_ID:
      return { ...state, listingUpdate: null };
    default:
      return state;
  }
}
