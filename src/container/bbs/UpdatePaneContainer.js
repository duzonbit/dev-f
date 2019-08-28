import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import GeneralSubTitle from "component/bbs/general/GeneralSubTitle";
import GeneralUpdateData from "component/bbs/update/GeneralUpdateData";
import GeneralActionButton from "component/bbs/update/GeneralActionButton";

import { getRead, getReadInit } from "store/module/bbs/read";
import { getUpdate, getUpdateInit } from "store/module/bbs/update";

import swal from 'sweetalert';

const UpdatePaneContainer = (props) => {
  let [pw, setPw] = useState('');
  let [title, setTitle] = useState(props.title);
  let [content, setContent] = useState(props.content);

  useEffect(() => {
    setTitle(props.title);
    setContent(props.content);
  }, [props.title, props.content]);
  if (props.updateMessage === "success") {
    swal("Update Complete!", "", "success");
    props.getReadInit();
    props.getUpdateInit();
    props.history.push(`/bbs/read/${props.pageNum}`);
  } else if (props.updateMessage === "fail") {
    swal("Wrong Password!", "", "warning");
    props.getReadInit();
    props.getUpdateInit();
  }

  if (props.loading === true) {
    props.getRead(props.pageNum);
  }

  const onChangePw = (e) => {
    setPw(e.target.value);
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const update = () => {
    props.getUpdate(props.idx, {
      idx: props.idx,
      name: props.name,
      pw: pw,
      title: title,
      content: content,
    });
  };

  return (
    <>
      <GeneralSubTitle subtitle={"글 업데이트"} />
      <GeneralUpdateData
        idx={props.idx}
        name={props.name}
        pw={pw}
        title={title}
        content={content}
        regdate={props.regdate}
        modifydate={props.modifydate}
        onChangePw={onChangePw}
        onChangeTitle={onChangeTitle}
        onChangeContent={onChangeContent}
      />
      <GeneralActionButton update={update} history={props.history} />
    </>
  );
};

export default connect(
  (state) => ({
    loading: state.read.get("loading"),
    error: state.read.get("error"),
    status: state.read.get("status"),
    idx: state.read.getIn(["data", "idx"]),
    name: state.read.getIn(["data", "name"]),
    pw: state.read.getIn(["data", "pw"]),
    title: state.read.getIn(["data", "title"]),
    content: state.read.getIn(["data", "content"]),
    regdate: state.read.getIn(["data", "regdate"]),
    modifydate: state.read.getIn(["data", "modifydate"]),

    updateMessage: state.update.get("message"),
    updateLoading: state.update.get("loading"),
    updateError: state.update.get("error")
  }),
  (dispatch) => ({
    getRead: (idx) => {
      dispatch(getRead(idx));
    },
    getUpdate: (idx, data) => {
      dispatch(getUpdate(idx, data));
    },
    getUpdateInit: () => {
      dispatch(getUpdateInit());
    },
    getReadInit: () => {
      dispatch(getReadInit());
    }
  })
)(UpdatePaneContainer);
