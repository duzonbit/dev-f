import React, { useEffect } from "react"
import { connect } from "react-redux"
import GeneralPageNation from "component/bbs/list/GeneralPageNation"
import GeneralListData from "component/bbs/list/GeneralListData"
import GeneralSubTitle from "component/bbs/general/GeneralSubTitle"
import { getList } from "store/module/bbs/list"

const ListPaneContainer = ({ content, pageSize, pageNumber, totalPages, pageNum, getList }) => {
  useEffect(() => {
    getList(pageNum)
  }, [pageNum, getList])

  return (
    <div>
      <GeneralSubTitle subtitle={"게시판"} />
      <GeneralListData content={content} />
      <GeneralPageNation pageNumber={pageNumber} pageSize={pageSize} totalPages={totalPages} />
    </div>
  )
}

export default connect(
  (state) => ({
    content: state.list.getIn(["data", "content"]),
    pageSize: state.list.getIn(["data", "pageable", "pageSize"]),
    pageNumber: state.list.getIn(["data", "pageable", "pageNumber"]),
    totalPages: state.list.getIn(["data", "totalPages"]),
  }),
  (dispatch) => ({
    getList: (page) => {
      dispatch(getList(page))
    },
  }),
)(ListPaneContainer)
