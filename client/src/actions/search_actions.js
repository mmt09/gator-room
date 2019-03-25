import axios from 'axios';
import { FETCH_SEARCH } from './types';

export const fetchSearch = (searchParams, callback) => async dispatch => {
  const { data } = await axios.post('/api/search_apartment', {
    searchParams: searchParams,
  });
  dispatch({ type: FETCH_SEARCH, payload: data });
  callback();
};
