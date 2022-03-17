import * as types from '../types';
import {endpoints} from '../config';
import {post, customPost} from '../Api/index';
import showToast from '../Api/HelperFunction';

export const createOrder = data => {
  return async dispatch => {
    try {
      dispatch({
        type: types.LOADING_START,
      });

      const response = await post(endpoints.checkout.createOrder, data, false);

      dispatch({
        type: types.ORDER_CREATION,
        payload: response,
      });

      dispatch({
        type: types.LOADING_END,
      });

      if (response) {
        dispatch({
          type: types.DELETE_CART,
        });
      }

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
export const makePaymentViaCard = data => {
  // console.log(data, 'paymentDataCard');
  return async dispatch => {
    try {
      dispatch({
        type: types.LOADING_START,
      });

      const response = await customPost(
        endpoints.checkout.charge_payment,
        data,
        true,
      );

      // dispatch({
      //   type: types.MAKE_PAYMENT_VIA_CARD,
      //   payload: response,
      // });

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
