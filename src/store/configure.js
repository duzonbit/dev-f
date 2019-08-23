import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createPromise } from "redux-promise-middleware";
import * as modules from 'store/module/bbs';
import * as signModules from 'store/module/sign';


const reducers = combineReducers({
    list : modules.list,
    read : modules.read,
    create : modules.create,
    update : modules.update,
    delete : modules.delete,

    signIn : signModules.signIn,

});
const middleware = createPromise({
    promiseTypeSuffixes:['PENDING','SUCCESS','FAILURE']
});

const configure = createStore(reducers, applyMiddleware(middleware));

export default configure;