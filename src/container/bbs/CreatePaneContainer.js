import React,{ useEffect } from "react";
import { connect } from "react-redux";
import GeneralCreateForm from "component/bbs/create/GeneralCreateForm"; //component
import GeneralSubTitle from "component/bbs/general/GeneralSubTitle"; //component
import { getCreate } from "store/module/bbs/create";
import swal from 'sweetalert';

const CreatePaneContainer = (props) => {
  useEffect(()=>{
    if(props.message==="success"){
      swal("Create Success!", "", "success");
      props.history.push("/");
    }else if(props.message==="fail"){
      swal("Create Fail!", "", "warning");
    }
    // else{
    //   swal("Create Error!", "", "error");
    // }
  });
  
  const onSubmit = (event) => {
    event.preventDefault();
    let data = {};
    const formData = new FormData(event.target);
    
    for(var pair of formData.entries()) {
      data[pair[0]] = pair[1];
    }
    
    props.getCreate(data);
  };

  return (
    <>
    <GeneralSubTitle subtitle={"글쓰기"}/>
  <GeneralCreateForm onSubmit={onSubmit} />
  </>);
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
  })
)(CreatePaneContainer);




























































// const CreatePaneContainer = (props) => {
//   useEffect(()=>{
//     if(props.message==="success"){
//       props.getListInit();
//       alert("생성되었습니다.");
//       props.history.push("/");
//     }else if(props.message==="fail"){
//       alert("생성되지 않았습니다.");
//     }
//   });
  
//   const onSubmit = (event) => {
//     event.preventDefault();
//     let data = {};
//     const formData = new FormData(event.target);
    
//     for(var pair of formData.entries()) {
//       data[pair[0]] = pair[1];
//     }

//     props.getCreate(data);
//   };

//   return (
//     <>
//     <GeneralSubTitle subtitle={"글쓰기"}/>
//   <GeneralCreateForm onSubmit={onSubmit} />
//   </>);
// };

// export default connect(
//   (state) => ({
//     loading : state.create.get('loading'),
//     error : state.create.get('error'),
//     message : state.create.get('message'),
//   }),
//   (dispatch) => ({
//     getCreate: (data) => {
//       dispatch(getCreate(data));
//     },
//     getListInit:()=>{
//       dispatch(getListInit());
//     }
//   })
// )(CreatePaneContainer);
