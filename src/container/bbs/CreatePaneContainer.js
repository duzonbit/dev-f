import React, { useEffect } from "react";
import { connect } from "react-redux";
import GeneralCreateForm from "component/bbs/create/GeneralCreateForm";
import { insertAction } from "store/module/bbs/defaultbbs";

const CreatePaneContainer = (props) => {
  console.log(props);

  useEffect(() => {
    if (props.action === "insert") {
      alert("글이 등록되엇습니다.");
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
    insertAction(data);
  };

  return <GeneralCreateForm onSubmit={onSubmit} />;
};

export default connect(
  (state) => ({
    action: state.bbs.action,
    state: state
  }),
  (dispatch) => ({
    insertAction: (data) => {
      dispatch(insertAction(data));
    }
  })
)(CreatePaneContainer);
