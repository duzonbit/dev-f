import React,{useEffect} from "react";
import { connect } from "react-redux";
import GeneralReadData from "component/bbs/read/GeneralReadData";
import GeneralActionButton from "component/bbs/read/GeneralActionButton";
import GeneralSubTitle from "component/bbs/general/GeneralSubTitle";
import { readAction, delAction } from "store/module/bbs/defaultbbs";

const ReadPaneContainer = (props) => {  
  useEffect(()=>{
    if(props.action === "del"){
      alert("글이 삭제 되었습니다.");
      props.history.push("/");
    }
  });
  
  
  if (props.action !== "read") 
    props.readAction(props.readNum);
  
  const onDel = async (e) => {
    e.preventDefault();
    let pw = prompt("비밀번호를 입력하세요");
    props.delAction(props.bbs.idx,{
      idx: props.bbs.idx,
      name: props.bbs.name,
      pw: pw
    })
  }

  return (
    <div>
      <GeneralSubTitle subtitle={"글"} />
      <GeneralReadData content={props.bbs} />
      <GeneralActionButton
        idx={props.bbs.idx}
        history={props.history}
        del={onDel}
      />
    </div>
  );
};

export default connect(
  (state) =>({
    action: state.bbs.action,
    bbs: state.bbs.content === undefined ? {
      idx : "",
      name : "",
      pw : "",
      title : "",
      content : "",
      regdate : "",
      modifydate : "",
    } : state.bbs.content,
    ms:"",
  }),
  (dispatch) => ({
    readAction: (idx) => {
      dispatch(readAction(idx));
    },
    delAction: (idx, data) => {
      dispatch(delAction(idx, data));
    }
  })
)(ReadPaneContainer);