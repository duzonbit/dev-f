import React, { Component } from "react";
import { connect } from "react-redux";
import { getRead } from "store/module/bbs/read";
import { getDelete } from "store/module/bbs/delete";
import AskModal from "component/modals/AskModal";
import Modal from "react-modal";

class ReadPaneContainer extends Component {
  state = {
    modalIsOpen: false,
    work:'none',
  };

  openModal=(e)=> {
    if(!this.state.modalIsOpen){
      this.setState({
        modalIsOpen: true,
        work:e.target.innerText,
      });
    }
  }
 
  closeModal=(e)=> {
    if(this.state.modalIsOpen){
      this.setState({
        modalIsOpen: false,
        work:e.target.innerText,
      });
    }
  }

  
  delete = ()=>{
    const {idx, name, pw,getDelete} = this.props; //state To props
    
    const data ={
      idx,
      name,
      pw,
    }
    getDelete(data);// dispatch action
  }

  componentDidMount() {
    const { getRead } = this.props; //stateToProps
    const {pageNum} = this.props; //parent To Props

    Modal.setAppElement("#readPaneContainer");

    getRead(pageNum);//dispatch action //pageNum = 게시글 id
  }

  componentDidUpdate = (prevProps, prevState)=>{
    const { deleteLoading, deleteError,deleteMessage } = this.props; //state to props

    if(prevProps.deleteMessage !== deleteMessage){
      if(!deleteLoading && !deleteError && deleteMessage==='success'){
        if(!alert("삭제 성공")) document.location = '/';  
      
      }else if(deleteError || (!deleteLoading&&deleteMessage===undefined)){
        alert('실패');
      }
    }
    
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
          <td>title</td>
          <td><input name={'title'} value={title} onChange={()=>{}} disabled={true}/></td>
        </tr>
        <tr>
          <td>content</td>
          <td><textarea name={'content'} value={content} onChange={()=>{}} disabled={true}/></td>
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

  onSubmit = (event) => {
    event.preventDefault();   
  };

  render() {
    return (
      <div id="readPaneContainer">
        <header>
          <h1>READ</h1>
        </header>
        <form onSubmit={this.onSubmit} className="test">
          <article>
            <table>
              {this.renderBoard2()}
            </table>
          </article>
         
        </form>
        <button onClick={this.openModal}>수정</button>          
          <button onClick={this.openModal}>삭제</button> 
        <footer>
          <button onClick={this.props.history.goBack}>뒤로가기</button>
        </footer>



        <Modal
          shouldCloseOnOverlayClick={false}
          isOpen={this.state.modalIsOpen}
          className='modal'
          overlayClassName="overlay"
        >
          <AskModal
          closeModal={this.closeModal}
          idx={this.props.idx}
          pw = {this.props.pw}
          name={this.props.name}
          work={this.state.work}
          delete={this.delete}
          />

        </Modal>
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
    
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    getRead : (id)=>{dispatch(getRead(id))},
    getDelete : (data)=>{dispatch(getDelete(data))},    

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReadPaneContainer);

