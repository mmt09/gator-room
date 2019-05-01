/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { FETCH_LISTINGS } from './types';

export const fetchAllListings = () => async dispatch => {
  try {
    const { data } = await axios.post('/api/all_listings');
    dispatch({ type: FETCH_LISTINGS, payload: data });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};
