/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { UPDATE_LANDLORD_PHONE, UPDATE_LANDLORD_ABOUT } from './types';

// dispatch action only when we finish fetch user
export const updateLandlordPhone = (landlordID, phone) => async dispatch => {
  const { data } = await axios.post('/api/current_landlord_phone', {
    landlordID,
    phone,
  });
  dispatch({ type: UPDATE_LANDLORD_PHONE, payload: data });
};

export const updateLandlordAbout = (landlordID, about) => async dispatch => {
  const { data } = await axios.post('/api/update_landlord_about', {
    landlordID,
    about,
  });
  dispatch({ type: UPDATE_LANDLORD_ABOUT, payload: data });
};
