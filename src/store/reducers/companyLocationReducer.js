import { FETCH_COMPANYLOCATION_SUCCESS } from "../actions/actionType";

const initialState = {
  companyLocation: [],
};

const companyLocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMPANYLOCATION_SUCCESS:
      return {
        ...state,
        companyLocation: action.payload,
      };
    default:
      return state;
  }
};

export default companyLocationReducer;
