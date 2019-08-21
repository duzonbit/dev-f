import React from "react";
import { Link } from "react-router-dom";
import { UrlBbs } from "url/bbs";
import { connect } from "react-redux";
import GeneralPageNation from "component/bbs/list/GeneralPageNation";
import GeneralListData from "component/bbs/list/GeneralListData";
import GeneralSubTitle from "component/bbs/general/GeneralSubTitle";
import { listAction } from "store/module/bbs/defaultbbs";

const ListPaneContainer = (props) => {
  if(props.pageNumber !== props.pageNum-1)
    props.listAction(props.pageNum);
  return (
    <div>
    <GeneralSubTitle subtitle={"게시판"}></GeneralSubTitle>
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
    action: state.bbs.action,
    content: state.bbs.contents===undefined?[]:state.bbs.contents.content,
    pageNumber : state.bbs.contents===undefined?'':state.bbs.contents.pageable.pageNumber,
    pageSize : state.bbs.contents===undefined?'':state.bbs.contents.pageable.pageSize,
    totalPages:state.bbs.contents===undefined?'':state.bbs.contents.totalPages,
  }),
  (dispatch) => ({
    listAction: (page) => {
      dispatch(listAction(page));
    }
  }))(ListPaneContainer);