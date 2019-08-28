import { handleActions } from "redux-actions";
import { Map } from "immutable";
import { AjaxSign } from "url/sign";
import { Cookies } from "react-cookie";

/* action types */
const REQ_SIGNIN = "signIn/REQ_SIGNIN"; //로그인 요청
const REQ_SIGNOUT = "signIn/REQ_SIGNOUT"; //로그아웃 요청


const REQ_SIGNIN_PENDING = `${REQ_SIGNIN}_PENDING`; //요청시작
const REQ_SIGNIN_SUCCESS = `${REQ_SIGNIN}_SUCCESS`; //요청성공
const REQ_SIGNIN_FAILURE = `${REQ_SIGNIN}_FAILURE`; //요청 실패

const cookies = new Cookies();//쿠키

/* action creators */
export const reqSignIn = (data) => ({
  type: REQ_SIGNIN,
  payload: AjaxSign.login(data)
});

export const reqSignOut = () => {
  return({ 
  type: REQ_SIGNOUT,  
})};



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
      const newState = state.set("loading", true)
                            .set("error", false)
                            .set("status", 0)
                            .set("message", "loading")
                            .set("signInId", null);

      // sessionStorage.removeItem("signedId");

      return newState;
    },
    [REQ_SIGNIN_SUCCESS]: (state, action) => {
      const { data, status, config } = action.payload;
      const newState = state.set("loading", false)
                            .set("error", false)
                            .set("status", status)
                            .set("message", data.message)
                            .set("signInId", (data.message==="success")?JSON.parse(config.data).user_id : null);

      if(newState.get('message')==='success'){
        sessionStorage.setItem("signedId",newState.get('signInId')); //클라이언트 세션 html5
        cookies.set('signedId',newState.get('signInId'),{path:'/'});//쿠키 등록
    }
      return newState;
    },
    [REQ_SIGNIN_FAILURE]: (state, action) => {
      const newState = state.set("loading", false)
                            .set("error", true)
                            .set("status", 0)
                            .set("message", "error")
                            .set("signInId", null);
      // sessionStorage.removeItem("signedId",null);

      return newState;
    },
    [REQ_SIGNOUT]: (state, action) => {
      sessionStorage.removeItem("signedId");
      cookies.remove('signedId');//쿠키 제거
      
      return initialState;
    },
   
  },initialState);
