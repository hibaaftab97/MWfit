export const urls = {
  v1: `https://armarioperfecto.uk//wp-json/wc/v3/`,
  customUrl: 'https://armarioperfecto.uk/wp-json/api/',
  bannerUrl: 'https://armarioperfecto.uk/wp-json/api/',
};

export const consumer_secret = 'cs_d7c276c98fc0c58f33966d2a1b131b2213b9ab04';
export const consumer_key = 'ck_e4f41079f801ca7b905b763829c38695aedf59b8';

// https://armarioperfecto.uk//wp-json/wc/v3/orders/?consumer_key=ck_e4f41079f801ca7b905b763829c38695aedf59b8&consumer_secret=cs_d7c276c98fc0c58f33966d2a1b131b2213b9ab04

export const base_url = urls.v1;
export const custom_url = urls.customUrl;
export const banner_url = urls.bannerUrl;
export const endpoints = {
  auth: {
    signup: 'customers',
    login: 'login',
    about: 'about_us',
    forgotPasswordMail: 'forgot_password',
    resetPassword: 'reset_password',

  },

  products: {
    getProducts: 'products',
    getProductsCategories: 'products/categories',
    getProductDetails: 'products/',
    getRelatedProducts: 'products',
    getRelatedProductsInclude: 'include=',
    getSearchedProduct: '/products?search=',
    getCoupon: 'coupons',
  },

  reviews: {
    createReview: 'products/reviews',
  },

  homeData: {
    banner: 'home_banner',
  },

  checkout: {
    createOrder: 'orders',
    charge_payment: 'charge_payment'
  },

  contact: {
    contactUs: 'contact_us',
  },

  orders: {
    orders: 'orders',
  },
};

const configs = {
  endpoints: endpoints,
  base_url: base_url,
  custom_url: custom_url,
  consumer_secret: consumer_secret,
  consumer_key: consumer_key,
};

export default configs;
