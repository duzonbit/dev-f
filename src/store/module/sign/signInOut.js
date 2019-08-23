import { handleActions } from "redux-actions";
import { Map } from "immutable";
import { AjaxSign } from "url/sign";

/* action types */
const REQ_SIGNIN = "signIn/REQ_SIGNIN"; //로그인 요청
const REQ_SIGNOUT = "signIn/REQ_SIGNOUT"; //로그아웃 요청 - 일단 요청작업 없이 그냥 상태만 업데이트


const REQ_SIGNIN_PENDING = `${REQ_SIGNIN}_PENDING`; //요청시작
const REQ_SIGNIN_SUCCESS = `${REQ_SIGNIN}_SUCCESS`; //요청성공
const REQ_SIGNIN_FAILURE = `${REQ_SIGNIN}_FAILURE`; //요청 실패



/* action creators */
export const reqSignIn = (data) => ({
  type: REQ_SIGNIN,
  payload: AjaxSign.login(data)
});

export const reqSignOut = () => ({ 
  type: REQ_SIGNOUT,  
});

/* initial state */
const initialState = Map({
  loading: false,
  error: false,
  status: 0,
  message:"",
  signInId : null,
});

/* reducer */
export default handleActions({
    [REQ_SIGNIN_PENDING]: (state, action) => {
      console.log("req_signin 요청 준비"); 
      const newState = state.set("loading", true)
                            .set("error", false)
                            .set("status", 0)
                            .set("message", "loading")
                            .set("signInId", null);
      return newState;
    },
    [REQ_SIGNIN_SUCCESS]: (state, action) => {
      console.log("req_signin 요청 성공");

      const { data, status, config } = action.payload;
      
      console.log(JSON.parse(config.data).user_id);
      
      const newState = state.set("loading", false)
                            .set("error", false)
                            .set("status", status)
                            .set("message", data.message)
                            .set("signInId", (data.message==="success")?JSON.parse(config.data).user_id : null);
      return newState;
    },
    [REQ_SIGNIN_FAILURE]: (state, action) => {
      console.log("req_signin 요청 에러");

      const newState = state.set("loading", false)
                            .set("error", true)
                            .set("status", 0)
                            .set("message", "error")
                            .set("signInId", null);
      return newState;
    },
    [REQ_SIGNOUT]: (state, action) => {
      console.log("req_signOut 요청 성공");
  
      return initialState;
    },
   
  },initialState);
