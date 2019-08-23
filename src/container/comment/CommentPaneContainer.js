/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { AjaxComment } from "url/comment";

const CommentPaneContainer = (props) => {
  const [res, setRes] = useState({});
  const [comments,setComments] = useState([]);

  useEffect(() => {
    AjaxComment.read(props.readNum).then((resolve)=>{
      setRes(resolve);
      setComments(resolve.data);
      console.log(resolve);
    });
  },[props]);
  
  

  // const onCreate = ()=>{

  // }
  
  // const onDelete = (idx)=>{

  // }

  const renderList = ()=>comments.map((v,i)=>(
    <tr key={i}>
      <th>{v["name"]}</th>
      <th>{v["content"]}</th>
      <th><button>삭제</button></th>
    </tr>
  ));
  // const renderPaging = () => 

  return (
    <article>
      <h3>-----------댓글-----------</h3>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>content</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {renderList()}
        </tbody>
      </table>
    </article>
  );
};

export default CommentPaneContainer;
