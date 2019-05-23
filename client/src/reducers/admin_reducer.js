import { LOGIN_ADMIN } from '../actions/types';

const INITIAL_STATE = {
  adminAuthorized: false,
};
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_ADMIN:
      return { ...state, adminAuthorized: true };
    default:
      return state;
  }
}
