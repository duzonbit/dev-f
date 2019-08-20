import { createAction, handleActions } from "redux-actions";
import {AjaxBbs} from "url/bbs";

const UPDATE_BBS = "update/bbs";

export const updateBbs = (page) => createAction(UPDATE_BBS, AjaxBbs.list(page));

export default handleActions({
  UPDATE_BBS:(state,action) => action.payload,
},[]);