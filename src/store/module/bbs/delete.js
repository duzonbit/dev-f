import { handleActions } from "redux-actions";
import { Map } from "immutable";
import { AjaxBbs } from "url/bbs";

/* action types */
const GET_DELETE = "delete/GET_DELETE"; //게시글 삭제

const GET_DELETE_PENDING = `${GET_DELETE}_PENDING`; //요청시작
const GET_DELETE_SUCCESS = `${GET_DELETE}_SUCCESS`; //요청성공
const GET_DELETE_FAILURE = `${GET_DELETE}_FAILURE`; //요청 실패

/* action creators */
export const getDelete = (idx,data) => ({
  type: GET_DELETE,
  payload: AjaxBbs.del(idx,data)
});

/* initial state */
const initialState = Map({
  loading: true,
  error: false,
  status: 0,
  message:"",
});

/* reducer */
export default handleActions({
    [GET_DELETE_PENDING]: (state, action) => {
      console.log("delete 요청 준비"); 

      const newState = state.set("loading", true)
                            .set("error", false)
                            .set("message", "loading");
      return newState;
    },
    [GET_DELETE_SUCCESS]: (state, action) => {
      console.log("delete 요청 성공");

      const { data, status } = action.payload;
      console.log(data);
      
      const newState = state.set("loading", false)
                            .set("error", false)
                            .set("status", status)
                            .set("message", data.message);

      return newState;
    },
    [GET_DELETE_FAILURE]: (state, action) => {
      console.log("delete 요청 에러");

      const newState = state.set("loading", false)
                            .set("error", true)
                            .set("message", "error");
      return newState;
    }
  },initialState);
