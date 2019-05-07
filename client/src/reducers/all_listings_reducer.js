import { FETCH_ALL_LISTINGS } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_ALL_LISTINGS:
      return action.payload;
    default:
      return state;
  }
}
