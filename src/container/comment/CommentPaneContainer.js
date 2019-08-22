import React,{useState,useEffect} from 'react'
import {AjaxComment} from "url/comment";



const CommentPaneContainer = (props) => {
  const [res,setRes] =useState({});
  
  useEffect(async () => {
    await AjaxComment
  }, [res])


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
      <tbody></tbody>
    </table>
  </article>
  )
}

export default CommentPaneContainer
