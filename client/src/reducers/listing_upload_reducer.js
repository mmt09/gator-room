import { FETCH_LISTING_UPLOAD } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_LISTING_UPLOAD:
      return action.payload;
    default:
      return state;
  }
}
