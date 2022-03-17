import * as types from '../types';
import initialStates from './initialStates';
const initialState = initialStates.wishlistReducer;

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_WISHLIST:
      return {
        ...state,
        wishlistItems: [...state.wishlistItems, action.payload],
      };

    case types.REMOVE_FROM_WISHLIST:
      let cart = state.wishlistItems;
      console.log(cart, 'cartHERE');
      console.log(action.ItemId, 'itemshereFood');
      let index = cart.findIndex(x => x == action.ItemId);
      console.log(index, 'indexHERE');
      if (index > -1) {
        cart.splice(index, 1);

        return {
          ...state,
          wishlistItems: [...cart],
        };
      } else {
        return {
          ...state,
        };
      }

    default:
      return state;
  }
};

export default authReducer;
