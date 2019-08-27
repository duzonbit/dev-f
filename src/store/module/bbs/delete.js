import { handleActions } from "redux-actions";
import { Map } from "immutable";
import { AjaxBbs } from "url/bbs";

/* action types */
const GET_DELETE = "delete/GET_DELETE"; //게시글 삭제

<<<<<<< HEAD
const GET_DELETE_INIT = `${GET_DELETE}_INIT`; //초기화 요청시작
=======
>>>>>>> origin/youngwon
const GET_DELETE_PENDING = `${GET_DELETE}_PENDING`; //요청시작
const GET_DELETE_SUCCESS = `${GET_DELETE}_SUCCESS`; //요청성공
const GET_DELETE_FAILURE = `${GET_DELETE}_FAILURE`; //요청 실패

/* action creators */
<<<<<<< HEAD
export const getDelete = (idx,data) => ({
  type: GET_DELETE,
  payload: AjaxBbs.del(idx,data)
});

export const getDeleteInit = () => ({
  type: GET_DELETE_INIT,
=======
export const getDelete = (data) => ({
  type: GET_DELETE,
  payload: AjaxBbs.del(data)
>>>>>>> origin/youngwon
});

/* initial state */
const initialState = Map({
<<<<<<< HEAD
  loading: true,
=======
  loading: false,
>>>>>>> origin/youngwon
  error: false,
  status: 0,
  message:"",
});

/* reducer */
export default handleActions({
<<<<<<< HEAD
    [GET_DELETE_INIT]: (state, action) => {
      return initialState;
    },
    [GET_DELETE_PENDING]: (state, action) => {
=======
    [GET_DELETE_PENDING]: (state, action) => {
      console.log("delete 요청 준비"); 

>>>>>>> origin/youngwon
      const newState = state.set("loading", true)
                            .set("error", false)
                            .set("message", "loading");
      return newState;
    },
    [GET_DELETE_SUCCESS]: (state, action) => {
<<<<<<< HEAD
=======
      console.log("delete 요청 성공");

>>>>>>> origin/youngwon
      const { data, status } = action.payload;
      console.log(data);
      
      const newState = state.set("loading", false)
                            .set("error", false)
                            .set("status", status)
                            .set("message", data.message);

      return newState;
    },
    [GET_DELETE_FAILURE]: (state, action) => {
<<<<<<< HEAD
=======
      console.log("delete 요청 에러");

>>>>>>> origin/youngwon
      const newState = state.set("loading", false)
                            .set("error", true)
                            .set("message", "error");
      return newState;
    }
  },initialState);
