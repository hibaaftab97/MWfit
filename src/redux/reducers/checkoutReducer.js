import * as types from '../types';
import initialStates from './initialStates';
const initialState = initialStates.checkoutReducer;

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ORDER_CREATION:
      return {
        ...state,
        orderCreation: action.payload,
      };

    default:
      return state;
  }
};

export default checkoutReducer;
