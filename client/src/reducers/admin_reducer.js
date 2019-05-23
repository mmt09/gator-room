import { LOGIN_ADMIN, APPROVE_LISTING, DISAPPROVE_LISTING } from '../actions/types';

const INITIAL_STATE = {
  adminAuthorized: false,
  listingApproved: {},
  listingDisapproved: {},
};
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_ADMIN:
      return { ...state, adminAuthorized: true };
    case APPROVE_LISTING:
      return { ...state, listingApproved: action.payload };
    case DISAPPROVE_LISTING:
      return { ...state, listingDisapproved: action.payload };
    default:
      return state;
  }
}
