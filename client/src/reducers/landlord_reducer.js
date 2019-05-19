import { UPDATE_LANDLORD_PHONE, UPDATE_LANDLORD_ABOUT } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case UPDATE_LANDLORD_PHONE:
      return action.payload;
    case UPDATE_LANDLORD_ABOUT:
      return action.payload;
    default:
      return state;
  }
}
