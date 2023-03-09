//리덕스 액션타입, 초기값, 액션함수생성, 리듀서

//1.액션타입
const GET_SUDDEN = "GET_SUDDEN";
const GET_SUDDEN_SUCCESS = "GET_SUDDEN_SUCCESS";
const GET_SUDDEN_ERROR = "GET_SUDDEN_ERROR";

const GET_Hit2 = "GET_Hit2";
const GET_Hit2_SUCCESS = "GET_Hit2_SUCCESS";
const GET_Hit2_ERROR = "GET_Hit2_ERROR";

const GET_NexonGames = "GET_NexonGames";
const GET_NexonGames_SUCCESS = "GET_NexonGames_SUCCESS";
const GET_NexonGames_ERROR = "GET_NexonGames_ERROR";

const GET_VEILED = "GET_VEILED";
const GET_VEILED_SUCCESS = "GET_VEILED_SUCCESS";
const GET_VEILED_ERROR = "GET_VEILED_ERROR";

const GET_BLUE = "GET_BLUE";
const GET_BLUE_SUCCESS = "GET_BLUE_SUCCESS";
const GET_BLUE_ERROR = "GET_BLUE_ERROR";

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
  hit2: {
    loading: false,
    data: null,
    error: null,
  },
  nexongames: {
    loading: false,
    data: null,
    error: null,
  },
  veiled: {
    loading: false,
    data: null,
    error: null,
  },
  blue: {
    loading: false,
    data: null,
    error: null,
  },
}; // redux middlewear thunk함수 생성
// thunk함수를 사용해서 액션객체를 디스패치하기

//서든어택
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

//히트2
export const getHit2 = (callback) => async (dispatch) => {
  dispatch({ type: GET_Hit2 });
  try {
    const response = await callback();
    const data = response.data;
    dispatch({ type: GET_Hit2_SUCCESS, data: data });
  } catch (e) {
    dispatch({ type: GET_Hit2_ERROR, error: e });
  }
};

//넥슨게임즈
export const getNexonGames = (callback) => async (dispatch) => {
  dispatch({ type: GET_NexonGames });
  try {
    const response = await callback();
    const data = response.data;
    dispatch({ type: GET_NexonGames_SUCCESS, data: data });
  } catch (e) {
    dispatch({ type: GET_NexonGames_ERROR, error: e });
  }
};

//블루아카이브
export const getBlue = (callback) => async (dispatch) => {
  dispatch({ type: GET_BLUE });
  try {
    const response = await callback();
    const data = response.data;
    dispatch({ type: GET_BLUE_SUCCESS, data: data });
  } catch (e) {
    dispatch({ type: GET_BLUE_ERROR, error: e });
  }
};

//베일드엑스퍼트
export const getVelied = (callback) => async (dispatch) => {
  dispatch({ type: GET_VEILED });
  try {
    const response = await callback();
    const data = response.data;
    dispatch({ type: GET_VEILED_SUCCESS, data: data });
  } catch (e) {
    dispatch({ type: GET_VEILED_ERROR, error: e });
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

    //히트2
    case GET_Hit2:
      return {
        ...state,
        hit2: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_Hit2_SUCCESS:
      return {
        ...state,
        hit2: {
          loading: false,
          data: action.data,
          error: null,
        },
      };
    case GET_Hit2_ERROR:
      return {
        ...state,
        hit2: {
          loading: false,
          data: null,
          error: action.error,
        },
      };

    //넥슨게임즈
    case GET_NexonGames:
      return {
        ...state,
        nexongames: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_NexonGames_SUCCESS:
      return {
        ...state,
        nexongames: {
          loading: false,
          data: action.data,
          error: null,
        },
      };
    case GET_NexonGames_ERROR:
      return {
        ...state,
        nexongames: {
          loading: false,
          data: null,
          error: action.error,
        },
      };

    //블루아카이브
    case GET_BLUE:
      return {
        ...state,
        blue: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_BLUE_SUCCESS:
      return {
        ...state,
        blue: {
          loading: false,
          data: action.data,
          error: null,
        },
      };
    case GET_BLUE_ERROR:
      return {
        ...state,
        blue: {
          loading: false,
          data: null,
          error: action.error,
        },
      };

    //베일드엑스퍼트
    case GET_VEILED:
      return {
        ...state,
        veiled: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_VEILED_SUCCESS:
      return {
        ...state,
        veiled: {
          loading: false,
          data: action.data,
          error: null,
        },
      };
    case GET_VEILED_ERROR:
      return {
        ...state,
        veiled: {
          loading: false,
          data: null,
          error: action.error,
        },
      };

    default:
      return state;
  }
}
