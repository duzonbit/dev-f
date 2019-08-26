import React,{useEffect} from "react";
import { connect } from "react-redux";
import GeneralReadData from "component/bbs/read/GeneralReadData";
import GeneralActionButton from "component/bbs/read/GeneralActionButton";
import GeneralSubTitle from "component/bbs/general/GeneralSubTitle";
import { getListInit} from "store/module/bbs/list";
import { getRead, getReadInit} from "store/module/bbs/read";
import { getDelete ,getDeleteInit} from "store/module/bbs/delete";
// import { Route} from "react-router-dom";
// import { UrlBbs } from "url/bbs";

const ReadPaneContainer = (props) => {
  useEffect(()=>{
    if(props.deleteMessage==="success"){
      props.getDeleteInit();
      props.getReadInit();
      props.getListInit();
      props.history.push("/")
      alert("삭제되었습니다.");
    }else if(props.deleteMessage==="fail"){
      props.getDeleteInit();
      props.getReadInit();
      props.getListInit();
      alert("비밀번호가 틀립니다.");
    }
  });


  if (props.loading === true) 
    props.getRead(props.readNum);

  const onDel = () => {
    let pw = prompt("비밀번호를 입력하세요");
    props.getDelete(props.idx, {
      idx: props.idx,
      name: props.name,
      pw: pw
    });
  };
  return (
    <div>
      <GeneralSubTitle subtitle={"글 상세"} />
      <GeneralReadData
        idx={props.idx}
        name={props.name}
        pw={props.pw}
        title={props.title}
        content={props.content}
        regdate={props.regdate}
        modifydate={props.modifydate}
      />
        <GeneralActionButton
          idx={props.idx}
          history={props.history}
          onDel={onDel}
        />
    </div>
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

    deleteMessage: state.delete.get("message"),
    deleteLoading: state.delete.get("loading"),
    deleteError: state.delete.get("error")
  }),
  (dispatch) => ({
    getRead: (idx) => {
      dispatch(getRead(idx));
    },
    getDelete: (idx, data) => {
      dispatch(getDelete(idx, data));
    },
    getDeleteInit:()=>{
      dispatch(getDeleteInit());
    },
    getReadInit:()=>{
      dispatch(getReadInit());
    },
    getListInit:()=>{
      dispatch(getListInit());
    }
  })
)(ReadPaneContainer);
