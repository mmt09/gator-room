/* eslint-disable import/prefer-default-export */
import { LOGIN_ADMIN } from './types';

export const loginAdmin = () => dispatch => {
  try {
    dispatch({ type: LOGIN_ADMIN });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};
