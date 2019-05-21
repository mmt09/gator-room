import { FETCH_LISTING_UPLOAD, UPLOAD_LISTING_FILTERS } from '../actions/types';

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
    default:
      return state;
  }
}
