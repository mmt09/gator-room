import { FETCH_LISTING_UPLOAD } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_LISTING_UPLOAD:
      return action.payload;
    default:
      return state;
  }
}
