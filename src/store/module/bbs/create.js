import { handleActions } from "redux-actions"
import { Map } from "immutable"
import { AjaxBbs } from "lib/url/bbs"

const GET_CREATE = "create/GET_CREATE"

const GET_CREATE_SUCCESS = `${GET_CREATE}_SUCCESS`

export const getCreate = (data) => ({
  type: GET_CREATE,
  payload: AjaxBbs.create(data),
})

const initialState = Map({
  loading: false,
  message: "",
})

export default handleActions(
  {
    [GET_CREATE_SUCCESS]: (state, action) => {
      const { data, status } = action.payload
      const newState = state
        .set("loading", false)
        .set("status", status)
        .set("message", data.message)

      return newState
    },
  },
  initialState,
)
