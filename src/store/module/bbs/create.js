import { handleActions } from "redux-actions";
import { Map } from "immutable";
import { AjaxBbs } from "url/bbs";

/* action types */
const GET_CREATE = "create/GET_CREATE"; //게시글 쓰기

const GET_CREATE_PENDING = `${GET_CREATE}_PENDING`; //요청시작
const GET_CREATE_SUCCESS = `${GET_CREATE}_SUCCESS`; //요청성공
const GET_CREATE_FAILURE = `${GET_CREATE}_FAILURE`; //요청 실패

/* action creators */
export const getCreate = (data) => ({
  type: GET_CREATE,
  payload: AjaxBbs.create(data)
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
    [GET_CREATE_PENDING]: (state, action) => {
      const newState = state.set("loading", true)
                            .set("error", false)
                            .set("message", "loading");
      return newState;
    },
    [GET_CREATE_SUCCESS]: (state, action) => {
      const { data, status } = action.payload;
      const newState = state.set("loading", false)
                            .set("error", false)
                            .set("status", status)
                            .set("message", data.message);

      return newState;
    },
    [GET_CREATE_FAILURE]: (state, action) => {
      const newState = state.set("loading", false)
                            .set("error", true)
                            .set("message", "error");
      return newState;
    }
  },initialState);
