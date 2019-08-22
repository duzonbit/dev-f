import { handleActions } from "redux-actions";
import { Map } from "immutable";
import { AjaxBbs } from "url/bbs";

/* action types */
const GET_READ = "read/GET_READ"; //게시글 불러오기

const GET_READ_PENDING = `${GET_READ}_PENDING`; //요청시작
const GET_READ_SUCCESS = `${GET_READ}_SUCCESS`; //요청성공
const GET_READ_FAILURE = `${GET_READ}_FAILURE`; //요청 실패

/* action creators */
export const getRead = (idx) => ({
  type: GET_READ,
  payload: AjaxBbs.read(idx)
});

/* initial state */
const initialState = Map({
  loading: true,
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
    [GET_READ_PENDING]: (state, action) => {
      console.log("read 요청 준비"); 
      const newState = state.set("loading", true)
                            .set("error", false);
      return newState;
    },
    [GET_READ_SUCCESS]: (state, action) => {
      console.log("read 요청 성공");

      const { data, status } = action.payload;
      const newState = state.set("loading", false)
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
    [GET_READ_FAILURE]: (state, action) => {
      console.log("read 요청 에러");

      const newState = state.set("loading", false)
                            .set("error", true);
      return newState;
    }
  },initialState);
