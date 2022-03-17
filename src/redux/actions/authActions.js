import * as types from '../types';
import { endpoints } from '../config';
import { post, customPost, get, customGet } from '../Api/index';
import { showToast } from '../Api/HelperFunction';

export const userSignUp = data => {
  return async dispatch => {
    try {
      dispatch({
        type: types.LOADING_START,
      });

      const response = await post(endpoints.auth.signup, data, false);
      dispatch({
        type: types.SIGNUP,
      });
      showToast('User Registered Successfully');
      dispatch({
        type: types.LOADING_END,
      });
      return Promise.resolve(response);
    } catch (e) {
      dispatch({
        type: types.LOADING_END,
      });
      showToast(e);
    }
  };
};

export const userLogin = data => {
  console.log(data, 'loginData');
  return async dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch({
          type: types.LOADING_START,
        });
        const res = await customPost(endpoints.auth.login, data, true);
        dispatch({
          type: types.LOADING_END,
        });
        dispatch({ type: types.LOGIN, payload: { user: res } });
        showToast('Logged in Successfully');
        resolve(res);
      } catch (e) {
        dispatch({
          type: types.LOADING_END,
        });
        reject(e);
        showToast(e);
      }
    });
  };
};

export const aboutAction = data => {
  return async dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch({
          type: types.LOADING_START,
        });
        const res = await customGet(endpoints.auth.about);
        dispatch({ type: types.ABOUT_US });
        dispatch({
          type: types.LOADING_END,
        });
        return resolve(res);
      } catch (e) {
        dispatch({
          type: types.LOADING_END,
        });
        reject(e);
        showToast(e);
      }
    });
  };
};

export const forgotPasswordEmail = email => {
  return async dispatch => {
    try {
      dispatch({
        type: types.LOADING_START,
      });
      const response = await customPost(
        endpoints.auth.forgotPasswordMail,
        { email },
        true,
      );
      dispatch({ type: types.FORGOT_PASSWORD });
      dispatch({
        type: types.LOADING_END,
      });
      showToast('Code has been sent successfully');
      return Promise.resolve(response);
    } catch (e) {
      dispatch({
        type: types.LOADING_END,
      });
      showToast(e);
    }
  };
};

export const resetPasswordAction = data => {
  return async dispatch => {
    try {
      dispatch({
        type: types.LOADING_START,
      });
      const response = await customPost(
        endpoints.auth.resetPassword,
        data,
        true,
      );
      dispatch({ type: types.RESET_PASSWORD });
      dispatch({
        type: types.LOADING_END,
      });
      // showToast(response);
      return Promise.resolve(response);
    } catch (e) {
      dispatch({
        type: types.LOADING_END,
      });
      showToast(e);
    }
  };
};
