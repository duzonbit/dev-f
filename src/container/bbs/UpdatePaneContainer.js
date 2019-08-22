import React, { Component } from 'react';
import { connect } from "react-redux";
import { getRead } from "store/module/bbs/read";
import { getUpdate } from "store/module/bbs/update";
import Modal from "react-modal";

class UpdatePaneContainer extends Component {
 
  state = {
    title: this.props.title,
    content: this.props.content,
    modalIsOpen: false,
  };
  
  openModal = () => {
    if (!this.state.modalIsOpen) {
      this.setState({ ...this.state, modalIsOpen: true });
    }
  };

  closeModal = () => {
    if (this.state.modalIsOpen) {
      this.setState({ ...this.state, modalIsOpen: false });
      document.location = "/";
    }
  };

 
  componentDidMount() {
    Modal.setAppElement("#updatePaneContainer");

    const { getRead } = this.props; //stateToProps
    const { pageNum } = this.props; //parent To Props
    getRead(pageNum); //dispatch action //pageNum = 게시글 id
   
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { updateLoading, updateError, updateMessage } = this.props; //state to props
    if(prevProps.title !== this.props.title){
       this.setState({
        ...this.state,
        title:this.props.title,
        content:this.props.content,
      })
    }
    if (prevProps.updateMessage !== updateMessage) {
      console.log("did", updateMessage);
      if (!updateLoading && !updateError && updateMessage === "success") {
        if (!alert("수정 성공")) document.location = "/";
      } else if (updateError || (!updateLoading && updateMessage === undefined)) {
        alert("실패");
      }
    }
  };
  
  onTextChange = e => {
    this.setState({
      ...this.state,
      [e.target.name] : e.target.value,
    })
  }

  update = () => {
    const { idx, name, pw, getUpdate } = this.props; //state To props
    const { title, content } = this.state;

    const data = {
      idx,
      name,
      pw,
      title,
      content
    };

    getUpdate(data); //dispatch action
  };
  
  renderBoard2 = () => {
    const { idx, name, pw, title, content, regdate, modifydate } = this.props; //state To props
    
    return (
      <tbody>
        <tr>
          <td>idx</td>
          <td>
            <input
              name={"idx"}
              value={idx}
              onChange={() => {}}
              readOnly={true}
              disabled={true}
            />
          </td>
        </tr>
        <tr>
          <td>name</td>
          <td>
            <input
              name={"name"}
              value={name}
              onChange={() => {}}
              readOnly={true}
              disabled={true}
            />
          </td>
        </tr>
        
        <tr>
          <td>title</td>
          <td>
            <input
              name={"title"}
              value={this.state.title}
              onChange={this.onTextChange}
            />
          </td>
        </tr>
        <tr>
          <td>content</td>
          <td>
            <textarea
              name={"content"}
              value={this.state.content}
              onChange={this.onTextChange}
            />
          </td>
        </tr>
        <tr>
          <td>regdate</td>
          <td>
            <input
              name={"regdate"}
              value={regdate}
              onChange={() => {}}
              readOnly={true}
              disabled={true}
            />
          </td>
        </tr>
        <tr>
          <td>modifydate</td>
          <td>
            <input
              name={"modifydate"}
              value={modifydate}
              onChange={() => {}}
              readOnly={true}
              disabled={true}
            />
          </td>
        </tr>
      </tbody>
    );
  };
  onSubmit = event => {
    event.preventDefault();
  };

  render() {
    console.log('title :', this.state.title);
    console.log('content : ',this.state.content);
    return (
      <div id="updatePaneContainer">
        <header>
          <h1>Update</h1>
        </header>
        <form onSubmit={this.onSubmit}>
          <article>
            <table>{this.renderBoard2()}</table>
          </article>
          <button onClick={this.update}>글 수정</button>
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

    updateMessage : state.update.get('message'),
    updateLoading : state.update.get('loading'),
    updateError : state.update.get('error'),

  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    getRead : (id)=>{dispatch(getRead(id))},
    getUpdate : (data)=>{dispatch(getUpdate(data))},
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UpdatePaneContainer);