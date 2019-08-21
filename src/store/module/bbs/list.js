import { handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import { AjaxBbs } from 'url/bbs';
import { stateSelector } from "store/module/bbs";


/* action types */
const GET_POST_LIST = 'list/GET_POST_LIST'; //게시판 불러오기

const GET_POST_LIST_PENDING = `${GET_POST_LIST}_PENDING`; //요청시작
const GET_POST_LIST_SUCCESS = `${GET_POST_LIST}_SUCCESS`; //요청성공
const GET_POST_LIST_FAILURE = `${GET_POST_LIST}_FAILURE`; //요청 실패


/* action creators */
export const getPostList = (page)=>{
    console.log('list 액션 날림');
    
    return {
        type : GET_POST_LIST,
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
    [GET_POST_LIST_PENDING] : (state,action)=>{
        console.log('리스트준비걸림');
        // console.log('리스트준비걸림state',state);
        // console.log('리스트준비걸림state.init',state.initialState);
        // console.log('리스트준비걸림state.list',state.list);
        // console.log('리스트준비걸림state.read',state.read);

        // const copyState = stateSelector(state);
        // console.log(copyState);
        
        const newState = state.set('loading',true)
                              .set('error',false);
        return newState;
    },
    [GET_POST_LIST_SUCCESS] : (state,action)=>{
        console.log('리스트성공걸림');

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
    [GET_POST_LIST_FAILURE] : (state,action)=>{
        console.log('리스트에러걸림');
        const newState = state.set('loading',false)
                              .set('error',true);

        return newState
    }
    
},initialState);


