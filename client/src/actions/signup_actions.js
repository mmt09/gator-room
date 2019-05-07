/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { FETCH_SIGNUP } from './types';

export const fetchSignup = (sfsuEmail, firstName, lastName, phone, username, password, callback) => async dispatch => {
  const { data } = await axios.post('/api/registration', {
    sfsuEmail,
    firstName,
    lastName,
    phone,
    username,
    password,
  });
  dispatch({ type: FETCH_SIGNUP, payload: data });
  callback();
};
