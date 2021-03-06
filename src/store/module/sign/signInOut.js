import { handleActions } from "redux-actions"
import { Map } from "immutable"
import { AjaxSign } from "lib/url/sign"
import { Cookies } from "react-cookie"

const REQ_SIGNIN = "signIn/REQ_SIGNIN"
const REQ_SIGNOUT = "signIn/REQ_SIGNOUT"

const REQ_SIGNIN_SUCCESS = `${REQ_SIGNIN}_SUCCESS`

const cookies = new Cookies()

export const reqSignIn = (data) => ({
  type: REQ_SIGNIN,
  payload: AjaxSign.login(data),
})

export const reqSignOut = () => {
  return {
    type: REQ_SIGNOUT,
  }
}

const initialState = Map({
  loading: false,
  error: false,
  message: "",
  signInId: null,
  signName: null,
})

export default handleActions(
  {
    [REQ_SIGNIN_SUCCESS]: (state, { payload }) => {
      const { data, config } = payload
      console.log(payload)
      const newState = state
        .set("loading", false)
        .set("error", false)
        .set("message", data.message)
        .set("signInId", data.message === "success" ? JSON.parse(config.data).user_id : null)
        .set("signName", data.message === "success" ? data.name : null)
        .set("signIdx", data.message === "success" ? data.idx : null)

      if (newState.get("message") === "success") {
        sessionStorage.setItem("signedId", newState.get("signInId"))
        sessionStorage.setItem("signName", newState.get("signName"))
        sessionStorage.setItem("signIdx", newState.get("signIdx"))
        cookies.set("signedId", newState.get("signInId"), { path: "/" })
        cookies.set('signName', newState.get("signName"), { path: "/" })
        cookies.set('signIdx', newState.get("signIdx"), { path: "/" })
      }
      return newState
    },
    [REQ_SIGNOUT]: (state, action) => {
      sessionStorage.removeItem("signedId")
      cookies.remove("signedId")

      return initialState
    },
  },
  initialState,
)
