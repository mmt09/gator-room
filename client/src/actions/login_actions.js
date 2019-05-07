/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { FETCH_LOGIN } from './types';

export const fetchLogin = (sfsuEmail, password, callback) => async dispatch => {
  const { data } = await axios.post('/api/login', {
    sfsuEmail,
    password,
  });
  dispatch({ type: FETCH_LOGIN, payload: data });
  callback();
};
