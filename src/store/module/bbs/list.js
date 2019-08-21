import { handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import { AjaxBbs } from 'url/bbs';
import { stateSelector } from "store/module/bbs";


/* action types */
const GET_LIST = 'list/GET_LIST'; //게시판 불러오기

const GET_LIST_PENDING = `${GET_LIST}_PENDING`; //요청시작
const GET_LIST_SUCCESS = `${GET_LIST}_SUCCESS`; //요청성공
const GET_LIST_FAILURE = `${GET_LIST}_FAILURE`; //요청 실패


/* action creators */
export const getList = (page)=>{
    console.log('list 액션 날림');
    
    return {
        type : GET_LIST,
        payload : AjaxBbs.list(page),
    }
}


/* initial state */
const initialState = Map({
    loading : false,
    error : false,
    status : 0,
    data:Map({
        content : List([
           Map({
                idx:0,
                name:'',
                pw:'',
                title:'',
                content:'',
                regdate:'',
                modifydate:'',
            })
        ]),
        pageable:Map({
            pageSize : 0,
            pageNumber : 0,
        }),
        totalPages : 0,
    })
})


/* reducer */
export default  handleActions({
    [GET_LIST_PENDING] : (state,action)=>{
        console.log('list 요청 준비');
        const newState = state.set('loading',true)
                              .set('error',false);
        return newState;
    },
    [GET_LIST_SUCCESS] : (state,action)=>{
        console.log('list 요청 성공');

        const { data, status } = action.payload;
        const newState = state.set('loading',false)
                              .set('error',false)
                              .set('status',status)
                              .setIn(['data','content'],List(data.content))
                              .setIn(['data','pageable','pageSize'],data.pageable.pageSize)
                              .setIn(['data','pageable','pageNumber'],data.pageable.pageNumber)
                              .setIn(['data','totalPages'], data.totalPages);
        
        return newState

    },
    [GET_LIST_FAILURE] : (state,action)=>{
        console.log('list 요청 에러');
        const newState = state.set('loading',false)
                              .set('error',true);

        return newState
    }
    
},initialState);


