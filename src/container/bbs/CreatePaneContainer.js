import React from 'react';
import {AjaxBbs, UrlBbs } from "url/bbs"
import { getCreate } from "store/module/bbs/create";
import { connect } from "react-redux";


class CreatePaneContainer extends React.Component {
  onSubmit = (event) => {
    const { getCreate } = this.props; //dispatch to props

    event.preventDefault();
    const formData = new FormData(event.target);

    let data={};
    for(let key of formData.keys()){
      data = {
        ...data,
        [key] : formData.get(key),
      }
    }
    getCreate(data); // dispatch action
    
  }

  componentDidUpdate = (prevProps, prevState)=>{
    const { loading, error,message } = this.props; //state to props
    console.log('did',message);

    if(!loading && !error && message==='success'){
      if(!alert("작성 성공")) document.location = '/';     
      
    }else if(error || (!loading&&message===undefined)){
      alert('실패');
    }
    
  }

  render() {
    
    return (
      
      <div>
        <form onSubmit={this.onSubmit}>
        <div>
            <label>name</label>
            <input name="name" type="text"/>
        </div>
        <div>
            <label>pw</label>
            <input name="pw" type="text"/>
        </div>
        <div>
            <label>title</label>
            <input name="title" type="text"/>
        </div>
        <div>
            <label>content</label>
            <textarea name="content" cols="30" rows="10"></textarea>
        </div>
        <button type="submit">확인</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  
  return {
    loading : state.create.get('loading'),
    error : state.create.get('error'),
    message : state.create.get('message'),
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    getCreate : (data)=>{dispatch(getCreate(data))},
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreatePaneContainer);