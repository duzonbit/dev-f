import { handleActions } from "redux-actions";
import { Map, List, fromJS, toJS } from "immutable";
import { UrlBbs, AjaxBbs } from "url/bbs";

/* action types */
const GET_POST_READ = "read/GET_POST_READ"; //게시글 불러오기

const GET_POST_READ_PENDING = "read/GET_POST_READ_PENDING"; //요청시작
const GET_POST_READ_SUCCESS = "read/GET_POST_READ_SUCCESS"; //요청성공
const GET_POST_READ_FAILURE = "read/GET_POST_READ_FAILURE"; //요청 실패

/* action creators */
export const getPostRead = (page) => ({
  type: GET_POST_READ,
  payload: AjaxBbs.read(page)
});

/* initial state */
const initialState = Map({
  loading: false,
  error: false,
  status: 0,
  data: Map({
    idx: 0,
    name: "",
    pw: "",
    title: "",
    content: "",
    regdate: "",
    modifydate: ""
  })
});

/* reducer */
export default handleActions({
    [GET_POST_READ_PENDING]: (state, action) => {
      console.log("준비걸림");

      const newState = state.set("loading", true).set("error", false);
      return newState;
    },
    [GET_POST_READ_SUCCESS]: (state, action) => {
      console.log("성공걸림");
      const { data, status } = action.payload;
      const newState = state
        .set("loading", false)
        .set("error", false)
        .set("status", status)
        .setIn(["data", "idx"], data.idx)
        .setIn(["data", "name"], data.name)
        .setIn(["data", "pw"], data.pw)
        .setIn(["data", "title"], data.title)
        .setIn(["data", "content"], data.content)
        .setIn(["data", "regdate"], data.regdate)
        .setIn(["data", "modifydate"], data.modifydate);

      return newState;
    },
    [GET_POST_READ_FAILURE]: (state, action) => {
      console.log("에러걸림");

      const newState = state.set("loading", false).set("error", true);
      return newState;
    }
  },{ initialState }
);
