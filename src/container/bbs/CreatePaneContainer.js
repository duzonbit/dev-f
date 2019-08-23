import React from 'react';
import { getCreate } from "store/module/bbs/create";
import { connect } from "react-redux";
import ResultNotifyModal from "component/modals/ResultNotifyModal";
import Modal from "react-modal";

class CreatePaneContainer extends React.Component {
  state = {
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
    Modal.setAppElement("#createPaneContainer");
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { loading, error, message } = this.props; //state to props

    if (prevProps.message !== message) {
      if (!loading && !error && message === "success") {
        this.setState({ ...this.state, modalMessage: "성공" });
      } else if (error || (!loading && message === undefined)) {
        this.setState({ ...this.state, modalMessage: "실패" });
      }
      this.openModal();
    }
  };

  onSubmit = event => {
    const { getCreate } = this.props; //dispatch to props

    event.preventDefault();
    const formData = new FormData(event.target);

    let data = {};
    for (let key of formData.keys()) {
      data = {
        ...data,
        [key]: formData.get(key)
      };
    }
    getCreate(data); // dispatch action
  };

  render() {
    return (
      <div id="createPaneContainer">
        <form onSubmit={this.onSubmit}>
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

        {/* //////////////////////////////// */}

        <Modal
          shouldCloseOnOverlayClick={false}
          isOpen={this.state.modalIsOpen}
          className="modal"
          overlayClassName="overlay"
        >
          <ResultNotifyModal
            closeModal={this.closeModal}
            resultMessage={this.state.modalMessage}
          />
        </Modal>
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