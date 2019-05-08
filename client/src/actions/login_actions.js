/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { FETCH_LOGIN } from './types';

export const fetchLogin = (username, password, callback) => async dispatch => {
  const { data } = await axios.post('/api/login', {
    username,
    password,
  });
  dispatch({ type: FETCH_LOGIN, payload: data });
  callback();
};
