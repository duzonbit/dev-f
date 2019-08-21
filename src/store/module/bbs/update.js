import { handleActions } from "redux-actions";
import { Map } from "immutable";
import { AjaxBbs } from "url/bbs";

/* action types */
const GET_UPDATE = "update/GET_UPDATE"; //게시글 수정

const GET_UPDATE_PENDING = `${GET_UPDATE}_PENDING`; //요청시작
const GET_UPDATE_SUCCESS = `${GET_UPDATE}_SUCCESS`; //요청성공
const GET_UPDATE_FAILURE = `${GET_UPDATE}_FAILURE`; //요청 실패

/* action creators */
export const getUpdate = (data) => ({
  type: GET_UPDATE,
  payload: AjaxBbs.update(data)
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
    [GET_UPDATE_PENDING]: (state, action) => {
      console.log("update준비걸림"); 
      // console.log("update준비걸림 state",typeof(state),state); 
      // console.log("update준비걸림2 state.init",typeof(state.initialState),state.initialState); 
      
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
    [GET_UPDATE_SUCCESS]: (state, action) => {
      console.log("update성공걸림");

      const { data, status } = action.payload;
      console.log(data);
      
      const newState = state.set("loading", false)
                            .set("error", false)
                            .set("status", status)
                            .set("message", data.message);

      return newState;
    },
    [GET_UPDATE_FAILURE]: (state, action) => {
      console.log("update에러걸림");

      const newState = state.set("loading", false)
                            .set("error", true)
                            .set("message", "error");
      return newState;
    }
  },initialState);
