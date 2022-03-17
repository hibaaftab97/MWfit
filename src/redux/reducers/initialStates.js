const authReducer = {
  user: null,
  loggedin: false,
  isLoading: false,
  customer: {},
};

const commonReducer = {
  isLoading: false,
};

const cartReducer = {
  cartItems: [],
};

const checkoutReducer = {
  orderCreation: [],
};

const wishlistReducer = {
  wishlistItems: []
};

const initialStates = {
  authReducer: authReducer,
  commonReducer: commonReducer,
  cartReducer: cartReducer,
  checkoutReducer: checkoutReducer,
  wishlistReducer: wishlistReducer
};
export default initialStates;
