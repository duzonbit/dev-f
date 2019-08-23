import React, { Component } from 'react';
import Modal from "react-modal";
import SignUpModal from "component/modals/SignUpModal";
import { connect } from "react-redux";
import { AjaxSign } from "url/sign";
class SignUpPaneContainer extends Component {
  state = {
    modalIsOpen: false,
    // user_id: '',
    // pw: '',
    // name: '',
  };

  data={}

  openModal = e => {
    if (!this.state.modalIsOpen) {
      this.setState({
        modalIsOpen: true
      });
    }
  };

  closeModal = e => {
    if (this.state.modalIsOpen) {
      this.setState({
        modalIsOpen: false
      });
    }
  };

  componentDidMount() {
    Modal.setAppElement("#signUpComponent");
  }

  onSubmit = event => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    for (let key of formData.keys()) {
        this.data[key] = formData.get(key);
    }

    console.log(this.data);

    const regExp = /^[a-zA-Z0-9]{4,12}$/; //id, password
    const regName = /^[가-힝]{2,}$/; //name

    if (this.data.user_id === "" || this.data.name === "" || this.data.pw === "") {
        alert("공백입니다")
        // this.setState({
        //     user_id: '',
        //      pw: '',
        //     name: '',
        // })
    } else if (!regExp.test(this.data.user_id) || !regExp.test(this.data.pw)) {
        alert("형식에 맞지 않습니다")
        // this.setState({
        //     user_id: '',
        //     pw: '',
        //     name: '',
        // })
    } else if (this.data.user_id === this.data.pw) {
        alert("비밀번호와 아이디가 같습니다")
        // this.setState({
        //     user_id: '',
        //     pw: '',
        //     name: '',
        // })
    } else if (!regName.test(this.data.name)) {
        alert("이름이 이상합니다")
        // this.setState({
        //     user_id: '',
        //     pw: '',
        //     name: '',
        // })
    } else {
        if(this.idCheck(this.data.user_id)){
            this.loginAjax(this.data)
        }
    }
  };

  idCheck(data) {
      AjaxSign.idCheck(data).then((data) => {
          if (data.data.message === 'success') {
              console.log(data);
              alert("사용가능한 아이디입니다");
              this.props.history.push('/');
          } else if (data.data.message === 'fail') {
              alert("아이디 중복 입니다.");
              this.setState({
                  user_id: '',
                  pw: '',
                  name: '',
              })
          }
      }).catch((e) => {
          console.log(e);
      });
      return true;
  }


  loginAjax(data) {
      AjaxSign.register(data).then((data) => {
          console.log(data);
          alert("회원가입 완료");
          this.props.history.push('/');
      }).catch((e) => {
          console.log(e);
      });
  }

  render() {
    return (
      <div id="signUpComponent">
        {
        this.props.user_id === null
            ? (<button onClick={this.openModal}>회원가입</button>) 
            : null
        }

        <Modal
          shouldCloseOnOverlayClick={false}
          isOpen={this.state.modalIsOpen}
          className="modal"
          overlayClassName="overlay"
        >
          <SignUpModal
            closeModal={this.closeModal}
            onSubmit={this.onSubmit}
            idCheck={this.idCheck}
            loginAjax={this.loginAjax}
          />
        </Modal>
      </div>
    );
  }
}


const mapStateToProps=(state)=>{
    return{
      user_id : state.signIn.get('signInId'),
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
    //   reqSignUp : (data)=>{dispatch(reqSignIn(data))}, //사인업 액션
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignUpPaneContainer);