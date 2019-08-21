import React, { Component } from 'react';
import { AjaxBbs,UrlBbs } from "url/bbs";
import Message from "message";
import { connect } from "react-redux";
import { getRead } from "store/module/bbs/read";
import { getDelete } from "store/module/bbs/delete";
import { getUpdate } from "store/module/bbs/update";
import { Link } from "react-router-dom";



class UpdatePaneContainer extends Component {

  state = {
    titleValue:this.props.title,
    textValue: this.props.content,
    pwValue : ""
  };

  componentDidMount() {
    const { getRead } = this.props; //stateToProps
    const {pageNum} = this.props; //parent To Props
    getRead(pageNum); //pageNum = 게시글 id
  }

  onTextAreaChange = (event)=>{
    this.setState({...this.state,textValue: event.target.value});
  }

  onTitleTextChange = (event)=>{
    this.setState({...this.state,titleValue: event.target.value});
  }

  onPwTextChange = (event)=>{
    this.setState({...this.state,pwValue: event.target.value});
  }

  delete = ()=>{
    const {idx, name,getDelete} = this.props; //state To props
    const {pwValue} = this.state;
    
    const data ={
      idx,
      name,
      pw : pwValue,
    }
    getDelete(data);
  }

  update = ()=>{      
    const {idx, name, getUpdate} = this.props; //state To props
    const {pwValue, titleValue, textValue} = this.state;

    const data ={
      idx,
      name,
      pw : pwValue,
      title : titleValue,
      content : textValue,
    }
  
    getUpdate(data);
  }

  renderBoard2 = ()=>{
    const {idx, name, pw, title, content, regdate, modifydate } = this.props; //state To props
    
    return(
      <tbody>
        <tr>
          <td>idx</td>
          <td><input name={'idx'} value={idx} onChange={()=>{}} readOnly={true} disabled={true}/></td>
        </tr>
        <tr>
          <td>name</td>
          <td><input name={'name'} value={name} onChange={()=>{}} readOnly={true} disabled={true}/></td>
        </tr>
        <tr>
          <td>pw</td>
          <td><input name={'pw'} value={this.state.pwValue} onChange={this.onPwTextChange}/></td>
        </tr>
        <tr>
          <td>title</td>
          <td><input name={'title'} value={this.state.titleValue} onChange={this.onTitleTextChange} /></td>
        </tr>
        <tr>
          <td>content</td>
          <td><textarea name={'content'} value={this.state.textValue} onChange={this.onTextAreaChange} /></td>
        </tr>
        <tr>
          <td>regdate</td>
          <td><input name={'regdate'} value={regdate} onChange={()=>{}} readOnly={true} disabled={true}/></td>
        </tr>
        <tr>
          <td>modifydate</td>
          <td><input name={'modifydate'} value={modifydate} onChange={()=>{}} readOnly={true} disabled={true}/></td>
        </tr>
      </tbody>        
    )
  }
  onSubmit = (event) =>{
    event.preventDefault();   
  }
  
  render() {
    return (
      <div>
        <header>
          <h1>Update</h1>
        </header>
        <form onSubmit={this.onSubmit}>
          <article>
            <table>
              {this.renderBoard2()}
            </table>
          </article>
          <button onClick={this.update}>글 수정</button>          
          <button onClick={this.delete}>글 삭제</button> 
          
        </form>
        <footer>
          <button onClick={this.props.history.goBack}>뒤로가기</button>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  
  return {
    loading : state.read.get('loading'),
    error : state.read.get('error'),
    status : state.read.get('status'),
    idx : state.read.getIn(['data','idx']),
    name : state.read.getIn(['data','name']),
    pw : state.read.getIn(['data','pw']),
    title : state.read.getIn(['data','title']),
    content : state.read.getIn(['data','content']),
    regdate : state.read.getIn(['data','regdate']),
    modifydate : state.read.getIn(['data','modifydate']),

    deleteMessage : state.delete.get('message'),
    deleteLoading : state.delete.get('loading'),
    deleteError : state.delete.get('error'),

    updateMessage : state.update.get('message'),
    updateLoading : state.update.get('loading'),
    updateError : state.update.get('error'),

  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    getRead : (id)=>{dispatch(getRead(id))},
    getUpdate : (data)=>{dispatch(getUpdate(data))},
    getDelete : (data)=>{dispatch(getDelete(data))},    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UpdatePaneContainer);