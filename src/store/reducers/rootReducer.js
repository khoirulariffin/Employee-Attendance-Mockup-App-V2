import { combineReducers } from "redux";
import companyLocationReducer from "./companyLocationReducer";
import businessReducer from "./businessReducer";

const rootReducer = combineReducers({
  companyLocation: companyLocationReducer,
  business: businessReducer,
});

export default rootReducer;
