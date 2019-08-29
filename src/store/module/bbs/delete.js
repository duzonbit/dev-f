import { handleActions } from "redux-actions"
import { Map } from "immutable"
import { AjaxBbs } from "lib/url/bbs"

/* action types */
const GET_DELETE = "delete/GET_DELETE"

const GET_DELETE_INIT = `${GET_DELETE}_INIT`
const GET_DELETE_SUCCESS = `${GET_DELETE}_SUCCESS`

export const getDelete = (idx, data) => ({
  type: GET_DELETE,
  payload: AjaxBbs.del(idx, data),
})

export const getDeleteInit = () => ({
  type: GET_DELETE_INIT,
})

export const initialState = Map({
  message: "",
})

export default handleActions(
  {
    [GET_DELETE_INIT]: () => {
      return initialState
    },
    [GET_DELETE_SUCCESS]: (state, { payload }) => {
      const { data } = payload
      const newState = state.set("message", data.message)
      return newState
    },
  },
  initialState,
)
