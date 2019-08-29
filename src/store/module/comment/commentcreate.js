import { handleActions } from "redux-actions";
import { Map, List } from "immutable";
import { AjaxComment } from "url/comment";

/* action types */
const GET_COMMENTCREATE = "comment/GET_COMMENTCREATE"; //댓글 불러오기

const GET_COMMENTCREATE_INIT = `${GET_COMMENTCREATE}_INIT`; //초기화 요청시작
const GET_COMMENTCREATE_PENDING = `${GET_COMMENTCREATE}_PENDING`; //요청시작
const GET_COMMENTCREATE_SUCCESS = `${GET_COMMENTCREATE}_SUCCESS`; //요청성공
const GET_COMMENTCREATE_FAILURE = `${GET_COMMENTCREATE}_FAILURE`; //요청 실패

/* action creators */
export const getCommentRead = (data) => ({
  type: GET_COMMENTCREATE,
  payload: AjaxComment.create(data)
});

export const getReadInit = () => ({
  type: GET_COMMENTCREATE_INIT,
});

/* initial state */
const initialState = Map({
    loading: false,
    error: false,
    status: 0,
    message: "",
});

/* reducer */
export default handleActions({
  [GET_COMMENTCREATE_INIT]: (state, action) => {
    return initialState;
  },
  [GET_COMMENTCREATE_PENDING]: (state, action) => {
    const newState = state.set("loading", true)
      .set("error", false);
    return newState;
  },
  [GET_COMMENTCREATE_SUCCESS]: (state, action) => {
    const { data, status } = action.payload;
    
    const newState = state.set("loading", false)
      .set("error", false)
      .set("status", status)
      .setIn(["data", "page", "list"], List(data.page.list))
      .setIn(["data", "page", "currpage"], data.page.currpage)
      .setIn(["data", "page", "size"], data.page.size)
      .setIn(["data", "page", "maxpage"], data.page.maxpage);
      
    return newState;
  },
  [GET_COMMENTCREATE_FAILURE]: (state, action) => {
    const newState = state.set("loading", false)
      .set("error", true);
    return newState;
  }
}, initialState);