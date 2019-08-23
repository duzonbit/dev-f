import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import { UrlBbs } from "url/bbs";
import { connect } from "react-redux";
import GeneralPageNation from "component/bbs/list/GeneralPageNation";
import GeneralListData from "component/bbs/list/GeneralListData";
import GeneralSubTitle from "component/bbs/general/GeneralSubTitle";
import { getList } from "store/module/bbs/list";

const ListPaneContainer = (props) => { 
  useEffect(() => {
    props.getList(props.pageNum);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.pageNum])

  return (
    <div>
    <GeneralSubTitle subtitle={"게시판"}/>
    <GeneralListData content={props.content} />
    <GeneralPageNation pageNumber={props.pageNumber} pageSize={props.pageSize} totalPages={props.totalPages} />
    <Link to={UrlBbs.create}>
      <button>글쓰기</button>
    </Link>
    </div>
  )
}

export default connect(
  (state) => ({
    loading: state.list.get("loading"),
    error: state.list.get("error"),
    status: state.list.get("status"),
    content: state.list.getIn(["data", "content"]),
    pageSize: state.list.getIn(["data", "pageable", "pageSize"]),
    pageNumber: state.list.getIn(["data", "pageable", "pageNumber"]),
    totalPages: state.list.getIn(["data", "totalPages"])
  }),
  (dispatch) => ({
    getList: (page) => {
      dispatch(getList(page));
    }
  }))(ListPaneContainer);