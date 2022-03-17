import * as types from '../types';
import initialStates from './initialStates';
const initialState = initialStates.authReducer;

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PROFILE_DETAILS:
      return {
        ...state,
        customer: action.payload,
      };

    // case types.LOGOUT:
    //   console.log('authReducer logout case', state);
    //   if (state?.customer != null) {
    //     return {
    //       ...state,
    //       customer: [],
    //     };
    //   } else {
    //     return {...state};
    //   }

    default:
      return state;
  }
};

export default authReducer;
