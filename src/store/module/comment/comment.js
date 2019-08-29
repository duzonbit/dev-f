import { handleActions } from "redux-actions";
import { Map, List } from "immutable";
import { AjaxComment } from "url/comment";

/* action types */
const GET_COMMENT = "comment/GET_COMMENT"; //댓글 불러오기

const GET_COMMENT_INIT = `${GET_COMMENT}_INIT`; //초기화 요청시작
const GET_COMMENT_PENDING = `${GET_COMMENT}_PENDING`; //요청시작
const GET_COMMENT_SUCCESS = `${GET_COMMENT}_SUCCESS`; //요청성공
const GET_COMMENT_FAILURE = `${GET_COMMENT}_FAILURE`; //요청 실패

/* action creators */
export const getCommentRead = (idx) => ({
  type: GET_COMMENT,
  payload: AjaxComment.read(idx)
});

export const getReadInit = () => ({
  type: GET_COMMENT_INIT,
});

/* initial state */
const initialState = Map({
  loading: true,
    error: false,
    status: 0,
    data: Map({
      page: Map({
        list: List([
          Map({
              idx: 0,
              name: '',
              pw: '',
              title: '',
              content: '',
              regdate: '',
              modifydate: '',
          })
        ]),
        currpage: ``,
        size: ``,
        maxpage: ``,
      }),
  })
});

/* reducer */
export default handleActions({
  [GET_COMMENT_INIT]: (state, action) => {
    return initialState;
  },
  [GET_COMMENT_PENDING]: (state, action) => {
    const newState = state.set("loading", true)
      .set("error", false);
    return newState;
  },
  [GET_COMMENT_SUCCESS]: (state, action) => {
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
  [GET_COMMENT_FAILURE]: (state, action) => {
    const newState = state.set("loading", false)
      .set("error", true);
    return newState;
  }
}, initialState);