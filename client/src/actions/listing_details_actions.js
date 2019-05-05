/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { FETCH_LISTING_DETAILS } from './types';

export const fetchListingDetails = () => async dispatch => {
  try {
    const { data } = await axios.post('/api/listing_details');
    dispatch({ type: FETCH_LISTING_DETAILS, payload: data });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};
