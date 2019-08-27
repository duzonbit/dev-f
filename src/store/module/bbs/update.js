import { handleActions } from "redux-actions";
import { Map } from "immutable";
import { AjaxBbs } from "url/bbs";

/* action types */
const GET_UPDATE = "update/GET_UPDATE"; //게시글 수정

<<<<<<< HEAD
const GET_UPDATE_INIT = `${GET_UPDATE}_INIT`; //초기화 요청시작
=======
>>>>>>> origin/youngwon
const GET_UPDATE_PENDING = `${GET_UPDATE}_PENDING`; //요청시작
const GET_UPDATE_SUCCESS = `${GET_UPDATE}_SUCCESS`; //요청성공
const GET_UPDATE_FAILURE = `${GET_UPDATE}_FAILURE`; //요청 실패

<<<<<<< HEAD
export const getUpdate = (idx, data) => ({
  type: GET_UPDATE,
  payload: AjaxBbs.update(idx, data)
});

export const getUpdateInit = () => ({
  type: GET_UPDATE_INIT,
=======
/* action creators */
export const getUpdate = (data) => ({
  type: GET_UPDATE,
  payload: AjaxBbs.update(data)
>>>>>>> origin/youngwon
});

/* initial state */
const initialState = Map({
  loading: false,
  error: false,
  status: 0,
<<<<<<< HEAD
  message: ""
=======
  message:"",
>>>>>>> origin/youngwon
});

/* reducer */
export default handleActions({
<<<<<<< HEAD
  [GET_UPDATE_INIT]: (state, action) => {
    return initialState;
  },
  [GET_UPDATE_PENDING]: (state, action) => {
    const newState = state
      .set("loading", true)
      .set("error", false)
      .set("message", "loading");
    return newState;
  },
  [GET_UPDATE_SUCCESS]: (state, action) => {
    const { data, status } = action.payload;
    const newState = state
      .set("loading", false)
      .set("error", false)
      .set("status", status)
      .set("message", data.message);
    return newState;
  },
  [GET_UPDATE_FAILURE]: (state, action) => {
    const newState = state
      .set("loading", false)
      .set("error", true)
      .set("message", "error");
    return newState;
  }
},initialState);
=======
    [GET_UPDATE_PENDING]: (state, action) => {
      console.log("update 요청 준비"); 

      const newState = state.set("loading", true)
                            .set("error", false)
                            .set("message", "loading");
      return newState;
    },
    [GET_UPDATE_SUCCESS]: (state, action) => {
      console.log("update 요청 성공");
      
      const { data, status } = action.payload;
      console.log(data);
      
      const newState = state.set("loading", false)
                            .set("error", false)
                            .set("status", status)
                            .set("message", data.message);

      return newState;
    },
    [GET_UPDATE_FAILURE]: (state, action) => {
      console.log("update 요청 에러");

      const newState = state.set("loading", false)
                            .set("error", true)
                            .set("message", "error");
      return newState;
    }
  },initialState);
>>>>>>> origin/youngwon
