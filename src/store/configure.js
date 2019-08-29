import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createPromise } from "redux-promise-middleware";
import * as bbsModules from 'store/module/bbs';
import * as signModules from 'store/module/sign';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as commentModules from 'store/module/comment'

const reducers = combineReducers({
    list: bbsModules.list,
    read: bbsModules.read,
    create: bbsModules.create,
    update: bbsModules.update,
    delete: bbsModules.delete,

    signIn: signModules.signIn,
    // signOut : signModules.signOut,

    comment: commentModules.comment,
});

const middleware = createPromise({
    promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'FAILURE']
});
const configure = createStore(reducers, composeWithDevTools(applyMiddleware(middleware)));

export default configure;