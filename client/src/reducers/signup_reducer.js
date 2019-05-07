import { FETCH_SIGNUP } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_SIGNUP:
      return action.payload;
    default:
      return state;
  }
}
