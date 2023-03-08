import { combineReducers } from "redux";
import news from "./news.js";
import logincheck from "./logincheck";

//루트 리듀서
//리듀서 합치기 combineReducers({객체 형태로})
const rootReducer = combineReducers({ logincheck: logincheck, news: news });

export default rootReducer;
