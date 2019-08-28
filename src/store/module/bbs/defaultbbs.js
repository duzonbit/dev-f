import { handleActions } from "redux-actions";
import { AjaxBbs } from "url/bbs";

const LIST = "bbs/LIST";
const READ = "bbs/READ";
const INSERT = "bbs/INSERT";
const UPDATE = "bbs/UPDATE";
const DEL = "bbs/DEL";

const LIST_SUCCESS = `${LIST}_SUCCESS`;
const READ_SUCCESS = `${READ}_SUCCESS`;
const INSERT_SUCCESS = `${INSERT}_SUCCESS`;
const UPDATE_SUCCESS = `${UPDATE}_SUCCESS`;
const DEL_SUCCESS = `${DEL}_SUCCESS`;

export const listAction = (page) => ({
  type: LIST,
  payload: AjaxBbs.list(page)
});

export const readAction = (index) => ({
  type: READ,
  payload: AjaxBbs.read(index)
});

export const insertAction = (data) => ({
  type: INSERT,
  payload: AjaxBbs.insert(data)
});

export const updateAction = (data) => ({
  type: UPDATE,
  payload: AjaxBbs.update(data)
});

export const delAction = (index, data) => ({
  type: DEL,
  payload: AjaxBbs.del(index, data)
});

export default handleActions({
  [INSERT_SUCCESS]: (state, action) => ({
    action: "insert",
    insert_msg: action.payload.data
  }),
  [LIST_SUCCESS]: (state, action) => ({
    action: "list",
    contents: action.payload.data
  }),
  [READ_SUCCESS]: (state, action) => ({
    action: "read",
    content: action.payload.data
  }),
  [UPDATE_SUCCESS]: (state, action) => ({
    action: "update",
    update_msg: action.payload.data
  }),
  [DEL_SUCCESS]: (state, action) => ({
    action: "del",
    del_msg: action.payload.data
  }),
}, {});
