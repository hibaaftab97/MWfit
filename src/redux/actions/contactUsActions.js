import * as types from '../types';
import {endpoints} from '../config';
import {customPost, post} from '../Api/index';
import {showToast} from '../Api/HelperFunction';

export const contactUsAction = data => {
  return async dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch({
          type: types.LOADING_START,
        });
        const response = await customPost(
          endpoints.contact.contactUs,
          data,
          true,
        );
        dispatch({type: types.CONTACT_US});
        resolve(response);
        dispatch({
          type: types.LOADING_END,
        });
        showToast('Message has been sent');
        return Promise.resolve(response);
      } catch (e) {
        dispatch({
          type: types.LOADING_END,
        });
        reject(e);
        // showToast(e);
        return Promise.reject(e);
      }
    });
  };
};
