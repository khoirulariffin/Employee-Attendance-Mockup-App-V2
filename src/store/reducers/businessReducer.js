import { FETCH_BUSINESS_SUCCESS } from "../actions/actionType";

const initialState = {
  business: [],
};

const businessReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BUSINESS_SUCCESS:
      return {
        ...state,
        business: action.payload,
      };
    default:
      return state;
  }
};

export default businessReducer;
