import { handleActions } from "redux-actions";
import { Map } from "immutable";
import { AjaxBbs } from "url/bbs";

/* action types */
const GET_DELETE = "delete/GET_DELETE"; //게시글 삭제

const GET_DELETE_PENDING = `${GET_DELETE}_PENDING`; //요청시작
const GET_DELETE_SUCCESS = `${GET_DELETE}_SUCCESS`; //요청성공
const GET_DELETE_FAILURE = `${GET_DELETE}_FAILURE`; //요청 실패

/* action creators */
export const getDelete = (data) => ({
  type: GET_DELETE,
  payload: AjaxBbs.del(data)
});

/* initial state */
const initialState = Map({
  loading: false,
  error: false,
  status: 0,
  message:"",
});

/* reducer */
export default handleActions({
    [GET_DELETE_PENDING]: (state, action) => {
      console.log("delete준비걸림"); 
      // console.log("delete준비걸림 state",typeof(state),state); 
      // console.log("delete준비걸림2 state.init",typeof(state.initialState),state.initialState); 
      
      // let copyState;
      // if(state.initialState !== undefined){ 
      //   copyState = state.initialState
      // }else{
      //   copyState = state
      // }
      

      const newState = state.set("loading", true)
                            .set("error", false)
                            .set("message", "loading");
      return newState;
    },
    [GET_DELETE_SUCCESS]: (state, action) => {
      console.log("delete성공걸림");

      const { data, status } = action.payload;
      console.log(data);
      
      const newState = state.set("loading", false)
                            .set("error", false)
                            .set("status", status)
                            .set("message", data.message);

      return newState;
    },
    [GET_DELETE_FAILURE]: (state, action) => {
      console.log("delete에러걸림");

      const newState = state.set("loading", false)
                            .set("error", true)
                            .set("message", "error");
      return newState;
    }
  },initialState);
