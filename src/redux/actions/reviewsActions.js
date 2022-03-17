import {endpoints} from '../config';
import {get, post} from '../Api/index';
import * as types from '../types';
import {showToast} from '../Api/HelperFunction';

export const createReview = data => {
  return async dispatch => {
    try {
      dispatch({
        type: types.LOADING_START,
      });

      const response = await post(endpoints.reviews.createReview, data, false);

      console.log(response, 'createResponse');
      dispatch({
        type: types.LOADING_END,
      });
      showToast('Reivew has been posted');
      return Promise.resolve(response);
    } catch (e) {
      dispatch({
        type: types.LOADING_END,
      });
      showToast(e);
    }
  };
};

export const listReviews = productId => {
  return async dispatch => {
    try {
      dispatch({
        type: types.LOADING_START,
      });

      const response = await get(
        endpoints.reviews.createReview,
        `&product=${productId}`,
      );

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
