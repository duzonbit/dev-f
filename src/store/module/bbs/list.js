import { handleActions } from "redux-actions"
import { Map, List } from "immutable"
import { AjaxBbs } from "lib/url/bbs"

const GET_LIST = "list/GET_LIST"

const GET_LIST_INIT = `${GET_LIST}_INIT`
const GET_LIST_SUCCESS = `${GET_LIST}_SUCCESS`

export const getList = (page) => {
  return {
    type: GET_LIST,
    payload: AjaxBbs.list(page),
  }
}

export const getListInit = () => ({
  type: GET_LIST_INIT,
})

const initialState = Map({
  loading: true,
  data: Map({
    content: List([
      Map({
        idx: 0,
        name: "",
        pw: "",
        title: "",
        content: "",
        regdate: "",
        modifydate: "",
      }),
    ]),
    pageable: Map({
      pageSize: ``,
      pageNumber: ``,
    }),
    totalPages: ``,
  }),
})

export default handleActions(
  {
    [GET_LIST_INIT]: () => {
      return initialState
    },
    [GET_LIST_SUCCESS]: (state, { payload }) => {
      const { data } = payload
      const newState = state
        .set("loading", false)
        .setIn(["data", "content"], List(data.content))
        .setIn(["data", "pageable", "pageSize"], data.pageable.pageSize)
        .setIn(["data", "pageable", "pageNumber"], data.pageable.pageNumber)
        .setIn(["data", "totalPages"], data.totalPages)

      return newState
    },
  },
  initialState,
)
