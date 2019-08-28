import { handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import { AjaxBbs } from 'url/bbs';

const GET_LIST = 'list/GET_LIST';

const GET_LIST_INIT = `${GET_LIST}_INIT`; //초기화 요청시작
const GET_LIST_PENDING = `${GET_LIST}_PENDING`;
const GET_LIST_SUCCESS = `${GET_LIST}_SUCCESS`;
const GET_LIST_FAILURE = `${GET_LIST}_FAILURE`;

export const getList = (page) => {
    return {
        type: GET_LIST,
        payload: AjaxBbs.list(page),
    }
}

export const getListInit = () => ({
    type: GET_LIST_INIT,
});


const initialState = Map({
    loading: true,
    error: false,
    status: 0,
    data: Map({
        content: List([
            Map({
                idx: 0,
                name: '',
                pw: '',
                title: '',
                content: '',
                regdate: '',
                modifydate: '',
            })
        ]),
        pageable: Map({
            pageSize: ``,
            pageNumber: ``,
        }),
        totalPages: ``,
    })
})

export default handleActions({
    [GET_LIST_INIT]: (state, action) => {
        return initialState;
    },
    [GET_LIST_PENDING]: (state, action) => {
        const newState = state.set('loading', true)
            .set('error', false);
        return newState;
    },
    [GET_LIST_SUCCESS]: (state, action) => {
        const { data, status } = action.payload;
        const newState = state.set('loading', false)
            .set('error', false)
            .set('status', status)
            .setIn(['data', 'content'], List(data.content))
            .setIn(['data', 'pageable', 'pageSize'], data.pageable.pageSize)
            .setIn(['data', 'pageable', 'pageNumber'], data.pageable.pageNumber)
            .setIn(['data', 'totalPages'], data.totalPages);

        return newState

    },
    [GET_LIST_FAILURE]: (state, action) => {
        const newState = state.set('loading', false)
            .set('error', true);

        return newState
    }

}, initialState);

