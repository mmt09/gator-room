/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { FETCH_LISTING_UPLOAD } from './types';

export const fetchListingUpload = (
  streetAddress,
  city,
  zip,
  bedroom,
  bathroom,
  kitchen,
  price,
  description,
  callback
) => async dispatch => {
  const { data } = await axios.post('/api/listingUpload', {
    streetAddress,
    city,
    zip,
    bedroom,
    bathroom,
    kitchen,
    price,
    description,
  });
  dispatch({ type: FETCH_LISTING_UPLOAD, payload: data });
  callback();
};
