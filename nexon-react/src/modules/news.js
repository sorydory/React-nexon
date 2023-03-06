//리덕스 액션타입, 초기값, 액션함수생성, 리듀서
import axios from "axios";
import { API_URL } from "../config/apiurl";

//1.액션타입
const GET_DATAS = "news/GET_DATAS";
const GET_DATAS_SUCCESS = "news/GET_DATAS_SUCCESS";
const GET_DATAS_ERROR = "news/GET_DATAS_ERROR";
const GET_DATA = "news/GET_DATA";
const GET_DATA_SUCCESS = "news/GET_DATA_SUCCESS";
const GET_DATA_ERROR = "news/GET_DATA_ERROR";

//2.초기값
const initialState = {
    newss: {
        loading: false,
        data: null,
        error: null
    },
    news: {
        loading: false,
        data: null,
        error: null
    }
}// redux middlewear thunk함수 생성
// thunk함수를 사용해서 액션객체를 디스패치하기
export const getDatas = () => async dispatch => {
    dispatch({type: GET_DATAS }) //요청시작
    //에러핸들링
    try {
        const response = await axios.get(`${API_URL}/news`);
        const data = response.data;
        dispatch({ type: GET_DATAS_SUCCESS , data: data})
    }
    catch(e){
        dispatch({ type: GET_DATAS_ERROR , error: e})
    }
}
export const getData = no => async dispatch => {
    dispatch({type: GET_DATA});
    try {
        const response = await axios.get(`${API_URL}/news/${no}`);
        const data = response.data;
        dispatch({type: GET_DATA_SUCCESS, data: response. data})
    }
    catch(e){
        dispatch({ type: GET_DATA_ERROR , error: e})
    }
}
//3. 리듀서 만들기
export default function news(state=initialState, action){
    switch(action.type){
        //데이터 요청 시작
        case GET_DATAS:
            return {
                ...state,
                newss: {
                    loading: true,
                    data: null,
                    error: null
                }
            };
            case GET_DATAS_SUCCESS:
                return {
                    ...state,
                    newss : {
                        loading: false,
                        data: action.data,
                        error: null
                    }
                };
                case GET_DATAS_ERROR:
                    return {
                        ...state,
                        newss : {
                            loading: false,
                            data: null,
                            error: action.error
                    }
                };
                case GET_DATA:
                    return {
                        ...state,
                        news: {
                            loading: true,
                            data: null,
                            error: null
                        }
                    };
                    case GET_DATA_SUCCESS:
                        return {
                            ...state,
                            news: {
                                loading: false,
                                data: action.data,
                                error: null
                            }
                        };
                        case GET_DATA_ERROR:
                            return {
                                ...state,
                                news: {
                                    loading: false,
                                    data: null,
                                    error: action.error
                            }
                        };
            default:
                return state;
    }
}