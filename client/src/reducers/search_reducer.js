import { FETCH_SEARCH } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_SEARCH:
      return action.payload;
    default:
      return state;
  }
}
