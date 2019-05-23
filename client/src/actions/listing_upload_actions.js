/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { FETCH_LISTING_UPLOAD, UPLOAD_LISTING_FILTERS, REMOVE_UPLOADED_LISTING_ID } from './types';

export const fetchListingUpload = (
  streetAddress,
  city,
  zip,
  bedroom,
  bathroom,
  kitchen,
  price,
  description,
  landlordID,
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
    landlordID,
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

export const removeUploadedListingID = () => dispatch => {
  dispatch({ type: REMOVE_UPLOADED_LISTING_ID });
};
