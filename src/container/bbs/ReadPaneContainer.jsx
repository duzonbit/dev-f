import React, { useEffect, useRef } from "react"
import { connect } from "react-redux"
import GeneralReadData from "component/bbs/read/GeneralReadData"
import GeneralActionButton from "component/bbs/read/GeneralActionButton"
import GeneralSubTitle from "component/bbs/general/GeneralSubTitle"
import { getRead } from "store/module/bbs/read"
import { getDelete, getDeleteInit } from "store/module/bbs/delete"
import swal from "sweetalert"

const ReadPaneContainer = ({ readNum, bbs, getRead, getDelete, history, deleteMessage, getDeleteInit }) => {
  const prevBbs = useRef(bbs)

  useEffect(() => {
    if (bbs !== prevBbs) {
      getRead(readNum)
    }
  })

  useEffect(() => {
    if (deleteMessage === "success") {
      swal("OK!", "", "success")
      getDeleteInit()
      history.push("/")
    } else if (deleteMessage === "fail") {
      swal("Password Wrong", "", "fail")
      getDeleteInit()
    }
  }, [deleteMessage, getDeleteInit, history])

  const onDel = () => {
    swal("Write Password", {
      content: "input",
    }).then((value) => {
      console.log(bbs)

      getDelete(bbs.idx, {
        idx: bbs.idx,
        name: bbs.name,
        pw: value,
      })
    })
  }

  return (
    <div>
      <GeneralSubTitle subtitle={"글 상세"} />
      <GeneralReadData bbs={bbs} />
      <GeneralActionButton idx={bbs.idx} history={history} onDel={onDel} />
    </div>
  )
}

export default connect(
  (state) => ({
    bbs: state.read.get("data").toJS(),
    deleteMessage: state.delete.get("message"),
  }),
  (dispatch) => ({
    getRead: (idx) => {
      dispatch(getRead(idx))
    },
    getDelete: (idx, data) => {
      dispatch(getDelete(idx, data))
    },
    getDeleteInit: () => {
      dispatch(getDeleteInit())
    },
  }),
)(ReadPaneContainer)
