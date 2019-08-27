import React, { Component } from 'react';
import Modal from "react-modal";
import SignUpModal from "component/modals/SignUpModal";
import { connect } from "react-redux";
import { AjaxSign } from "url/sign";
import { Button} from "reactstrap";

const modalStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    background            : '',
    border                : '',
  }
};



class SignUpPaneContainer extends Component {
  state = {
    modalIsOpen: false,
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

  onSubmit = async event => {
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
    } else if (!regExp.test(this.data.user_id) || !regExp.test(this.data.pw)) {
        alert("형식에 맞지 않습니다")
    } else if (this.data.user_id === this.data.pw) {
        alert("비밀번호와 아이디가 같습니다")
    } else if (!regName.test(this.data.name)) {
        alert("이름이 이상합니다")
    } else {
      
        await (this.idCheck(this.data.user_id)).then((result)=>{
            if(result){
              this.registerAjax(this.data);
            }
            
        });   
  }
}
  

  idCheck=(user_id)=>{
    return(
        AjaxSign.idCheck(user_id)
        .then((response) => {
          console.log(response.data.message);
          
            if(response.data.message === 'success'){
              console.log('res message : ',response.data.message);
              // alert("사용가능한 아이디입니다");
              return true;
              
            }else if (response.data.message === 'fail') {
              alert("아이디 중복 입니다.");
              return false;
            }
        }).catch((err)=>{console.log(err)})
    )
  }


  registerAjax = (data) => {
    console.log('레지스터호출');
    
     AjaxSign.register(data)
        .then((data) => {
            alert("회원가입 완료");
            this.closeModal();
        }).catch((e) => {
            alert("회원가입 에러");
            console.log("register Error : ",e);
        });
  }

  render() {
    return (
      <div id="signUpComponent">
        {
        this.props.user_id === null
            ? (<Button className="btn-1 ml-1" color="neutral" onClick={this.openModal}>회원가입</Button>) 
            : null
        }

        <Modal
          shouldCloseOnOverlayClick={false}
          isOpen={this.state.modalIsOpen}
          // class="modal"
          // Style="position: absolute; top: 30%; left: 40px; right: 40px; bottom: 40px; border: 1px solid rgb(204, 204, 204); background: rgb(255, 255, 255); overflow: auto; border-radius: 4px; outline: none; padding: 20px;"
          // className="modal"
          // overlayClassName="overlay" 
          // Style="top:30%"
          style={modalStyles}

        >
          <SignUpModal
            closeModal={this.closeModal}
            onSubmit={this.onSubmit}
            idCheck={this.idCheck}
            registerAjax={this.registerAjax}
          />
        </Modal>
      </div>
    );
  }
}


const mapStateToProps = (state)=>{
  return{
    user_id : state.signIn.get('signInId'),
  }
}

export default connect(
  mapStateToProps,
  null
)(SignUpPaneContainer);
