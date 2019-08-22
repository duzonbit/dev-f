import React,{useEffect} from "react";
import { connect } from "react-redux";
import GeneralCreateForm from "component/bbs/create/GeneralCreateForm";
import { getListInit } from "store/module/bbs/list";
import { getCreate } from "store/module/bbs/create";

const CreatePaneContainer = (props) => {
  useEffect(()=>{
    if(props.message==="success"){
      props.history.push("/");
    }
  });
  
  const onSubmit = (event) => {
    event.preventDefault();
    let data = {};
    const formData = new FormData(event.target);
    
    for (let key of formData.keys()) {
      data[key] = formData.get(key);
    }
    props.getCreate(data);
  };

  return <GeneralCreateForm onSubmit={onSubmit} />;
};

export default connect(
  (state) => ({
    loading : state.create.get('loading'),
    error : state.create.get('error'),
    message : state.create.get('message'),
  }),
  (dispatch) => ({
    getCreate: (data) => {
      dispatch(getCreate(data));
    },
    getListInit:()=>{
      dispatch(getListInit());
    }
  })
)(CreatePaneContainer);
