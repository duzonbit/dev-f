/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { AjaxComment } from "url/comment";

const CommentPaneContainer = (props) => {
  const [res, setRes] = useState({});
  useEffect(() => {
    AjaxComment.read(props.readNum).then((resolve)=>{
      setRes(resolve);
      console.log(resolve);
    });
  },[props]);

  // const onCreate = ()=>{

  // }

  // const onResfresh = () => {

  // }

  // const onDelete = (idx)=>{

  // }

  // const renderComment = ()=>{

  // }

  return (
    <article>
      <h3>-----------댓글-----------</h3>
      <table>
        <thead>
          <tr>
            <th>idx</th>
            <th>board_idx</th>
            <th>user_idx</th>
            <th>name</th>
            <th>content</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody />
      </table>
    </article>
  );
};

export default CommentPaneContainer;
