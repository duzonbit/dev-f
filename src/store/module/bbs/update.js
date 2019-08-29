import { handleActions } from "redux-actions"
import { Map } from "immutable"
import { AjaxBbs } from "lib/url/bbs"

/* action types */
const GET_UPDATE = "update/GET_UPDATE"

const GET_UPDATE_INIT = `${GET_UPDATE}_INIT`
const GET_UPDATE_SUCCESS = `${GET_UPDATE}_SUCCESS`

export const getUpdate = (idx, data) => ({
  type: GET_UPDATE,
  payload: AjaxBbs.update(idx, data),
})

export const getUpdateInit = () => ({
  type: GET_UPDATE_INIT,
})

const initialState = Map({
  message: "",
})

export default handleActions(
  {
    [GET_UPDATE_INIT]: () => {
      return initialState
    },

    [GET_UPDATE_SUCCESS]: (state, { payload }) => {
      const { data } = payload
      const newState = state.set("message", data.message)
      return newState
    },
  },
  initialState,
)
