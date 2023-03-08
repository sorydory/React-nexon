//리덕스 액션타입, 초기값, 액션함수생성, 리듀서
import axios from "axios";
import { API_URL } from "../config/apiurl";

//1.액션타입
const GET_SUDDEN = "GET_SUDDEN";
const GET_SUDDEN_SUCCESS = "GET_SUDDEN_SUCCESS";
const GET_SUDDEN_ERROR = "GET_SUDDEN_ERROR";

//2.초기값
const initialState = {
  news: {
    loading: false,
    data: null,
    error: null,
  },
  sudden: {
    loading: false,
    data: null,
    error: null,
  },
}; // redux middlewear thunk함수 생성
// thunk함수를 사용해서 액션객체를 디스패치하기
export const getSudden = (callback) => async (dispatch) => {
  dispatch({ type: GET_SUDDEN });
  try {
    const response = await callback();
    const data = response.data;
    dispatch({ type: GET_SUDDEN_SUCCESS, data: data });
  } catch (e) {
    dispatch({ type: GET_SUDDEN_ERROR, error: e });
  }
};
//3. 리듀서 만들기
export default function news(state = initialState, action) {
  switch (action.type) {
    //데이터 요청 시작
    case GET_SUDDEN:
      return {
        ...state,
        sudden: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_SUDDEN_SUCCESS:
      return {
        ...state,
        sudden: {
          loading: false,
          data: action.data,
          error: null,
        },
      };
    case GET_SUDDEN_ERROR:
      return {
        ...state,
        sudden: {
          loading: false,
          data: null,
          error: action.error,
        },
      };
    default:
      return state;
  }
}
