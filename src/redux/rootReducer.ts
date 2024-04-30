import { combineReducers } from "redux";
import mainSliceReducer from "./slices/mainSlice";

const rootReducer = combineReducers({
  nfts: mainSliceReducer,
});

export default rootReducer;
