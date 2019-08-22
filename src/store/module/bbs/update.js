import { handleActions } from "redux-actions";
import { Map } from "immutable";
import { AjaxBbs } from "url/bbs";

/* action types */
const GET_UPDATE = "update/GET_UPDATE"; //게시글 수정

const GET_UPDATE_INIT = `${GET_UPDATE}_INIT`; //초기화 요청시작
const GET_UPDATE_PENDING = `${GET_UPDATE}_PENDING`; //요청시작
const GET_UPDATE_SUCCESS = `${GET_UPDATE}_SUCCESS`; //요청성공
const GET_UPDATE_FAILURE = `${GET_UPDATE}_FAILURE`; //요청 실패

export const getUpdate = (idx, data) => ({
  type: GET_UPDATE,
  payload: AjaxBbs.update(idx, data)
});

export const getUpdateInit = () => ({
  type: GET_UPDATE_INIT,
});

/* initial state */
const initialState = Map({
  loading: false,
  error: false,
  status: 0,
  message: ""
});

/* reducer */
export default handleActions({
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
