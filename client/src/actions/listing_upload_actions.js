/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { FETCH_LISTING_UPLOAD, UPLOAD_LISTING_FILTERS } from './types';

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

export const listingFiltersUpload = (
  laundry,
  pets,
  parking,
  smoking,
  listingID
) => async dispatch => {
  const { data } = await axios.post('/api/listingFiltersUpload', {
    laundry,
    pets,
    parking,
    smoking,
    listingID,
  });
  dispatch({ type: UPLOAD_LISTING_FILTERS, payload: data });
};
