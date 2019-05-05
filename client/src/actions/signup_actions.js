/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { FETCH_SIGNUP } from './types';

export const fetchSignup = (sfsu_email, first_name, last_name, phone, username, password, callback) => async dispatch => {
  const { data } = await axios.post('/api/registration', {
    sfsu_email,
    first_name,
    last_name,
    phone,
    username,
    password,
  });
  dispatch({ type: FETCH_SIGNUP, payload: data });
  callback();
};
