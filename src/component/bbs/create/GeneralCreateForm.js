import React from "react";

const GeneralCreateForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>name</label>
        <input name="name" type="text" />
      </div>
      <div>
        <label>pw</label>
        <input name="pw" type="text" />
      </div>
      <div>
        <label>title</label>
        <input name="title" type="text" />
      </div>
      <div>
        <label>content</label>
        <textarea name="content" cols="30" rows="10" />
      </div>
      <button type="submit">확인</button>
    </form>
  );
};

export default GeneralCreateForm;
