import {combineReducers} from 'redux';
import authReducer from './authReducer';
import commonReducer from './commonReducer';
import cartReducer from './cartReducer';
import checkoutReducer from './checkoutReducer';
import wishlistReducer from './wishlistReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  authReducer,
  commonReducer,
  cartReducer,
  checkoutReducer,
  wishlistReducer,
  profileReducer,
});

export default rootReducer;
