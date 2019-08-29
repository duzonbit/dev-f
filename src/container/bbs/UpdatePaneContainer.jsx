import React, { useState, useEffect } from "react"
import { connect } from "react-redux"

import GeneralSubTitle from "component/bbs/general/GeneralSubTitle"
import GeneralUpdateData from "component/bbs/update/GeneralUpdateData"
import GeneralActionButton from "component/bbs/update/GeneralActionButton"

import { getRead } from "store/module/bbs/read"
import { getUpdate, getUpdateInit } from "store/module/bbs/update"

import swal from "sweetalert"

const UpdatePaneContainer = ({ readNum, bbs, updateMessage, getRead, history, getUpdate, getUpdateInit }) => {
  let [pw, setPw] = useState("")
  let [title, setTitle] = useState(bbs.title)
  let [content, setContent] = useState(bbs.content)

  useEffect(() => {
    if (updateMessage === "success") {
      swal("Update Complete!", "", "success")
      getUpdateInit()
      history.push(`/bbs/read/${readNum}`)
    } else if (updateMessage === "fail") {
      swal("Wrong Password!", "", "warning")
      getUpdateInit()
    }
    getRead(readNum)
  }, [updateMessage, getRead, readNum, history, bbs, getUpdateInit])

  const onChangePw = (e) => {
    setPw(e.target.value)
  }
  const onChangeTitle = (e) => {
    setTitle(e.target.value)
  }
  const onChangeContent = (e) => {
    setContent(e.target.value)
  }
  const update = () => {
    getUpdate(bbs.idx, {
      idx: bbs.idx,
      name: bbs.name,
      pw: pw,
      title: title,
      content: content,
    })
  }

  return (
    <>
      <GeneralSubTitle subtitle={"글 업데이트"} />
      <GeneralUpdateData
        idx={bbs.idx}
        name={bbs.name}
        pw={pw}
        title={title}
        content={content}
        regdate={bbs.regdate}
        modifydate={bbs.modifydate}
        onChangePw={onChangePw}
        onChangeTitle={onChangeTitle}
        onChangeContent={onChangeContent}
      />
      <GeneralActionButton update={update} history={history} />
    </>
  )
}

export default connect(
  (state) => ({
    bbs: state.read.get("data").toJS(),

    updateMessage: state.update.get("message"),
  }),
  (dispatch) => ({
    getRead: (idx) => {
      dispatch(getRead(idx))
    },
    getUpdate: (idx, data) => {
      dispatch(getUpdate(idx, data))
    },
    getUpdateInit: () => {
      dispatch(getUpdateInit())
    },
  }),
)(UpdatePaneContainer)
