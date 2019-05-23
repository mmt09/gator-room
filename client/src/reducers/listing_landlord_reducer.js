import { FETCH_LISTING_LANDLORD } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_LISTING_LANDLORD:
      return action.payload;
    default:
      return state;
  }
}
