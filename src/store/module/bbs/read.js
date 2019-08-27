import { handleActions } from "redux-actions";
import { Map } from "immutable";
import { AjaxBbs } from "url/bbs";

/* action types */
const GET_READ = "read/GET_READ"; //게시글 불러오기

<<<<<<< HEAD
const GET_READ_INIT = `${GET_READ}_INIT`; //초기화 요청시작
=======
>>>>>>> origin/youngwon
const GET_READ_PENDING = `${GET_READ}_PENDING`; //요청시작
const GET_READ_SUCCESS = `${GET_READ}_SUCCESS`; //요청성공
const GET_READ_FAILURE = `${GET_READ}_FAILURE`; //요청 실패

/* action creators */
export const getRead = (idx) => ({
  type: GET_READ,
  payload: AjaxBbs.read(idx)
});

<<<<<<< HEAD
export const getReadInit = () => ({
  type: GET_READ_INIT,
});

/* initial state */
const initialState = Map({
  loading: true,
=======
/* initial state */
const initialState = Map({
  loading: false,
>>>>>>> origin/youngwon
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
<<<<<<< HEAD
  [GET_READ_INIT]: (state, action) => {
    return initialState;
  },
    [GET_READ_PENDING]: (state, action) => {
=======
    [GET_READ_PENDING]: (state, action) => {
      console.log("read 요청 준비"); 
>>>>>>> origin/youngwon
      const newState = state.set("loading", true)
                            .set("error", false);
      return newState;
    },
    [GET_READ_SUCCESS]: (state, action) => {
<<<<<<< HEAD
=======
      console.log("read 요청 성공");

>>>>>>> origin/youngwon
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
<<<<<<< HEAD
=======
      console.log("read 요청 에러");

>>>>>>> origin/youngwon
      const newState = state.set("loading", false)
                            .set("error", true);
      return newState;
    }
  },initialState);
