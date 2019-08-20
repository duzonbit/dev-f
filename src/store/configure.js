import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createPromise } from "redux-promise-middleware";
import * as modules from 'store/module';

const reducers = combineReducers(modules);
const middleware = createPromise({
    promiseTypeSuffixes:['PENDING','SUCCESS','FAILURE']
});

const configure = createStore(reducers, applyMiddleware(middleware));

export default configure;