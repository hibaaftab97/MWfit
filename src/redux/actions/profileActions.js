import { endpoints } from '../config';
import { get, customGet } from '../Api/index';
import * as types from '../types';
import { showToast } from '../Api/HelperFunction';

export const getProfileDetails = id => {
  return async dispatch => {
    try {
      const response = await get(`${endpoints.auth.signup}/${id}`);
      dispatch({
        type: types.PROFILE_DETAILS,
        payload: response,
      });
      return Promise.resolve(response);
    } catch (e) {
      return Promise.reject(e);
    }
  };
};

export const logout = () => {
  return dispatch => {
    dispatch({
      type: types.LOGOUT,
    });

    dispatch({
      type: types.DELETE_CART,
    });

    showToast('You have been logged out');
    return Promise.resolve();
  };
};
