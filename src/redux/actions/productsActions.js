import { base_url, endpoints } from '../config';
import { get, customGet } from '../Api/index';
import * as types from '../types';
import { consumer_key, consumer_secret } from '../config';

export const getProducts = (page) => {
  return async dispatch => {
    try {
      dispatch({
        type: types.LOADING_START,
      });
      const response = await get(endpoints.products.getProducts, `&page=${page}`);

      console.log(response, 'responseProductsHERE')
      dispatch({
        type: types.LOADING_END,
      });
      return Promise.resolve(response);
    } catch (e) {
      dispatch({
        type: types.LOADING_END,
      });
      return Promise.reject(e);
    }
  };
};

export const getProductsCategories = (page) => {
  console.log(page, 'pagepagepage');
  return async dispatch => {
    try {
      const response = await get(endpoints.products.getProductsCategories, `&page=${page}`);
      console.log(response, 'givemeresponse')
      return Promise.resolve(response);
    } catch (e) {
      return Promise.reject(e);
    }
  };
};

export const getCategories = (page) => {
  return async dispatch => {
    try {
      const response = await get(endpoints.products.getProductsCategories);
      console.log(response, 'givemeresponse')
      return Promise.resolve(response);
    } catch (e) {
      return Promise.reject(e);
    }
  };
};

export const getProductsByCategory = (categoryId, page) => {
  return async dispatch => {
    try {
      dispatch({
        type: types.LOADING_START,
      });

      const response = await get(endpoints.products.getProducts, `&category=${categoryId}` + `&page=${page}`);
      dispatch({
        type: types.LOADING_END,
      });
      return Promise.resolve(response);
    } catch (e) {
      dispatch({
        type: types.LOADING_END,
      });
      return Promise.reject(e);
    }
  };
};


export const getSingleProductDetails = id => {
  return async dispatch => {
    try {
      dispatch({
        type: types.LOADING_START,
      });
      const response = await get(endpoints.products.getProductDetails + id);
      dispatch({
        type: types.LOADING_END,
      });
      return Promise.resolve(response);
    } catch (e) {
      dispatch({
        type: types.LOADING_END,
      });
      return Promise.reject(e);
    }
  };
};

export const getRelatedProducts = relatedProducts => {
  const params = relatedProducts;
  return async dispatch => {
    try {
      const response = await get(
        endpoints.products.getRelatedProducts,
        `&include=${params}`,
      );
      return Promise.resolve(response);
    } catch (e) {
      return Promise.reject(e);
    }
  };
};

export const getHomeBanner = () => {
  return async dispatch => {
    try {
      const response = await customGet(endpoints.homeData.banner);
      return Promise.resolve(response);
    } catch (e) {
      return Promise.reject(e);
    }
  };
};

export const getWishlist = id => {
  console.log(id, 'wishlistids');
  return async dispatch => {
    try {
      dispatch({
        type: types.LOADING_START,
      });

      const response = await get(
        endpoints.products.getProducts,
        `&include=${id}`,
      );

      dispatch({
        type: types.LIST_WISHLIST,
        payload: response,
      });

      dispatch({
        type: types.LOADING_END,
      });

      return Promise.resolve(response);
    } catch (e) {
      dispatch({
        type: types.LOADING_END,
      });
      return Promise.reject(e);
    }
  };
};

export const getCouponCode = code => {
  return async dispatch => {
    try {
      dispatch({
        type: types.LOADING_START,
      });

      const response = await get(endpoints.products.getCoupon, `&code=${code}`);


      dispatch({
        type: types.GET_COUPON,
      });

      console.log(response, 'couponResponse')

      dispatch({
        type: types.LOADING_END,
      });

      return Promise.resolve(response);
    } catch (e) {
      dispatch({
        type: types.LOADING_END,
      });
      return Promise.reject(e);
    }
  };
};

export const AddtoWishList = item => {
  let params = false;
  let wishItems = [];

  console.log('wish', item);
  return async dispatch => {
    try {
      dispatch({
        type: types.LOADING_START,
      });
      dispatch({
        type: types.ADD_TO_WISHLIST,
        payload: item.id,
      });

      dispatch({
        type: types.LOADING_END,
      });

      return Promise.resolve();
    } catch (e) {
      dispatch({
        type: types.LOADING_END,
      });
      return Promise.reject(e);
    }
  };
};

export const RemovefromWishlist = id => {
  console.log(id, 'wishlistIDHERE');
  return dispatch => {
    dispatch({
      type: types.REMOVE_FROM_WISHLIST,
      ItemId: id,
    });
    return Promise.resolve();
  };
};

export const searchProducts = (searchText) => {
  let value = searchText;

  return async dispatch => {
    dispatch({ type: types.LOADING_START });
    let url =
      base_url +
      'products?search=' +
      value +
      '&consumer_key=' +
      consumer_key +
      '&consumer_secret=' +
      consumer_secret
    return fetch(url, {
      method: 'GET',
      headers: {
        'content-Type': 'application/json',
      },
    })
      .then(response => {
        if (!response) {
          return response;
        }
        return response
          .json()
          .then(res => {
            dispatch({ type: types.LOADING_END });
            return res;
          })
          .catch(err => {
            dispatch({ type: types.LOADING_END });
            console.log('err', err);
          });
      })
      .catch(error => {
        dispatch({ type: types.LOADING_END });
        console.log('error', error);
      });
  };
};

export const searchProductsWithFilters = (searchText, minValue, maxValue) => {
  let value = searchText;
  let min = minValue;
  let max = maxValue;

  // console.log(min, max, 'valuesMax');
  return async dispatch => {
    dispatch({ type: types.LOADING_START });
    let url =
      base_url +
      'products?' +
      // value +
      '&consumer_key=' +
      consumer_key +
      '&consumer_secret=' +
      consumer_secret
      +
      '&min_price=' +
      min +
      '&max_price=' +
      max;

    console.log(url, 'filterUrl')
    return fetch(url, {
      method: 'GET',
      headers: {
        'content-Type': 'application/json',
      },
    })
      .then(response => {
        if (!response) {
          return response;
        }
        return response
          .json()
          .then(res => {
            dispatch({ type: types.LOADING_END });
            console.log(res, 'searachresponseFilter')
            return res;
          })
          .catch(err => {
            dispatch({ type: types.LOADING_END });
            console.log('err', err);
          });
      })
      .catch(error => {
        dispatch({ type: types.LOADING_END });
        console.log('error', error);
      });
  };
};


