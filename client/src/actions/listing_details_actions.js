/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { FETCH_LISTING_DETAILS, FETCH_LISTING_LANDLORD } from './types';

export const fetchListingDetails = listingID => async dispatch => {
  try {
    const { data } = await axios.post('/api/listing_details', {
      listingID,
    });
    dispatch({ type: FETCH_LISTING_DETAILS, payload: data });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export const fetchListingLandlord = listingID => async dispatch => {
  try {
    const { data } = await axios.post('/api/listing_landlord', {
      listingID,
    });
    dispatch({ type: FETCH_LISTING_LANDLORD, payload: data });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};
