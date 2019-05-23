/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { LOGIN_ADMIN, APPROVE_LISTING, DISAPPROVE_LISTING } from './types';

export const loginAdmin = () => dispatch => {
  try {
    dispatch({ type: LOGIN_ADMIN });
  } catch (error) {
    console.log(error);
  }
};

export const adminApproveListing = listingID => async dispatch => {
  try {
    const { data } = await axios.post('/api/admin_approve_listing', {
      listingID,
    });
    dispatch({ type: APPROVE_LISTING, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const adminDisapproveListing = listingID => async dispatch => {
  try {
    const { data } = await axios.post('/api/admin_disapprove_listing', {
      listingID,
    });
    dispatch({ type: DISAPPROVE_LISTING, payload: data });
  } catch (error) {
    console.log(error);
  }
};
