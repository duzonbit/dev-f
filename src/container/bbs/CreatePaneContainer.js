import React, { useEffect } from "react";
import { connect } from "react-redux";
import GeneralCreateForm from "component/bbs/create/GeneralCreateForm"; //component
import GeneralSubTitle from "component/bbs/general/GeneralSubTitle"; //component
import { getCreate } from "store/module/bbs/create";
import swal from 'sweetalert';

let prevMessage='none';

const CreatePaneContainer = (props) => {
  useEffect(() => {
    const { message } = props;
    if (prevMessage !== message) {
      if (message === "success") {
        swal("Create Success!", "", "success");
        props.history.push("/");
      } else if (message === "fail") {
        swal("Create Fail!", "", "warning");
      } else if (message === 'error') {
        swal("Create Fail!", "", "warning");
      }
      prevMessage = message;
    }
  }, [props]);

  const onSubmit = (event) => {
    event.preventDefault();
    let data = {};
    const formData = new FormData(event.target);

    for (var pair of formData.entries()) {
      data[pair[0]] = pair[1];
    }

    if (data.name === "" || data.title === "" || data.pw === "" || data.content === "") {
      swal("Empty!", "", "warning");
    } else {
      props.getCreate(data);
    }
  };

  return (
    <>
      <GeneralSubTitle subtitle={"글쓰기"} />
      <GeneralCreateForm onSubmit={onSubmit} />
    </>);
};

export default connect(
  (state) => ({
    loading: state.create.get('loading'),
    error: state.create.get('error'),
    message: state.create.get('message'),
  }),
  (dispatch) => ({
    getCreate: (data) => {
      dispatch(getCreate(data));
    },
  })
)(CreatePaneContainer);