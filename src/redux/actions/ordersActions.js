import { endpoints } from '../config';
import { get, post } from '../Api/index';
import * as types from '../types';
import { showToast } from '../Api/HelperFunction';

export const listOrders = customerId => {
  console.log(customerId, 'actionId')
  return async dispatch => {
    try {
      // dispatch({
      //   type: types.LOADING_START,
      // });

      const response = await get(
        endpoints.orders.orders,
        `&customer=${customerId}`,
      );

      // dispatch({
      //   type: types.LOADING_END,
      // });

      return Promise.resolve(response);
    } catch (e) {
      // dispatch({
      //   type: types.LOADING_END,
      // });
      showToast(e);
    }
  };
};
