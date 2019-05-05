import { FETCH_LISTING_DETAILS } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_LISTING_DETAILS:
      return action.payload;
    default:
      return state;
  }
}
