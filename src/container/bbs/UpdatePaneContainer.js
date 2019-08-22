import React, { Component } from 'react';
import { connect } from "react-redux";
import { getRead } from "store/module/bbs/read";
import { getUpdate } from "store/module/bbs/update";
import Modal from "react-modal";

class UpdatePaneContainer extends Component {
  state = {
    titleValue: this.props.title,
    textValue: this.props.content,
    modalIsOpen: false,
    modalMessage: ""
  };

  openModal = () => {
    if (!this.state.modalIsOpen) {
      this.setState({ modalIsOpen: true });
    }
  };

  closeModal = () => {
    if (this.state.modalIsOpen) {
      this.setState({ modalIsOpen: false });
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

    if (prevProps.updateMessage !== updateMessage) {
      console.log("did", updateMessage);
      if (!updateLoading && !updateError && updateMessage === "success") {
        if (!alert("수정 성공")) document.location = "/";
      } else if (updateError || (!updateLoading && updateMessage === undefined)) {
        alert("실패");
      }
    }
  };

  onTextAreaChange = event => {
    this.setState({ ...this.state, textValue: event.target.value });
  };

  onTitleTextChange = event => {
    this.setState({ ...this.state, titleValue: event.target.value });
  };

  update = () => {
    const { idx, name, pw, getUpdate } = this.props; //state To props
    const { titleValue, textValue } = this.state;

    const data = {
      idx,
      name,
      pw,
      title: titleValue,
      content: textValue
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
              value={this.state.titleValue}
              onChange={this.onTitleTextChange}
            />
          </td>
        </tr>
        <tr>
          <td>content</td>
          <td>
            <textarea
              name={"content"}
              value={this.state.textValue}
              onChange={this.onTextAreaChange}
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