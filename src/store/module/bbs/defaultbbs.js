import { handleActions } from "redux-actions";
import { Map, List, fromJS, toJS } from "immutable";
import { AjaxBbs } from "url/bbs";

const LIST = "bbs/LIST";
const READ = "bbs/READ";
const CREATE = "bbs/CREATE";
const UPDATE ="bbs/UPDATE";
const DELETE = "bbs/DELETE";

const LIST_SUCCESS = `${LIST}_SUCCESS`;
const READ_SUCCESS = "bbs/READ_SUCCESS";
const CREATE_SUCCESS = "bbs/CREATE_SUCCESS";
const UPDATE_SUCCESS = "bbs/UPDATE_SUCCESS";
const DELETE_SUCCESS = "bbs/DELETE_SUCCESS";

export const listAction = (page) => ({
  type: LIST,
  payload: AjaxBbs.list(page)
});

export const readAction = (index) => ({
  type: READ,
  payload: AjaxBbs.read(index),
});

export const createAction = () =>({
  type: CREATE
});

export const updateAction = () =>({
  type: UPDATE
});

export const deleteAction = () =>({
  type: DELETE
});


export default handleActions({
    [LIST_SUCCESS]: (state, action) => ({
      status: action.payload.status,
      data: action.payload.data
    }),
    [READ_SUCCESS]:(state,action)=>({
      status: action.payload.status,
      data: action.payload.data
    }),
},{});
