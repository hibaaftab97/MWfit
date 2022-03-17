import * as types from '../types';
import initialStates from './initialStates';
const initialState = initialStates.authReducer;

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP:
      return {
        ...state,
        customer: action.payload,
      };
    case types.LOGIN:
      return {
        ...state,
        user: action.payload.user.id,
        customer: action.payload,
        loggedin: true,
        isLoading: false,
      };
    case types.LOGOUT: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
