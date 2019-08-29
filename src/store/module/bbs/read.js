import { handleActions } from "redux-actions"
import { Map } from "immutable"
import { AjaxBbs } from "lib/url/bbs"

const GET_READ = "read/GET_READ"

const GET_READ_INIT = `${GET_READ}_INIT`
const GET_READ_SUCCESS = `${GET_READ}_SUCCESS`

export const getRead = (idx) => ({
  type: GET_READ,
  payload: AjaxBbs.read(idx),
})

export const getReadInit = () => ({
  type: GET_READ_INIT,
})

const initialState = Map({
  data: Map({
    idx: 0,
    name: "",
    pw: "",
    title: "",
    content: "",
    regdate: "",
    modifydate: "",
  }),
})

export default handleActions(
  {
    [GET_READ_INIT]: () => {
      return initialState
    },
    [GET_READ_SUCCESS]: (state, { payload }) => {
      const { data } = payload
      const newState = state
        .setIn(["data", "idx"], data.idx)
        .setIn(["data", "name"], data.name)
        .setIn(["data", "pw"], data.pw)
        .setIn(["data", "title"], data.title)
        .setIn(["data", "content"], data.content)
        .setIn(["data", "regdate"], data.regdate)
        .setIn(["data", "modifydate"], data.modifydate)

      return newState
    },
  },
  initialState,
)
