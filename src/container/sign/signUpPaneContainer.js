import React, { Component } from 'react';
import Modal from "react-modal";
import SignUpModal from "component/modals/SignUpModal";
import { connect } from "react-redux";
import { AjaxSign } from "url/sign";
import { Button} from "reactstrap";
import swal from 'sweetalert';

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
      swal("Empty!", "", "waring");
    } else if (!regExp.test(this.data.user_id) || !regExp.test(this.data.pw)) {
      swal("Not In Form!", "", "waring");
    } else if (this.data.user_id === this.data.pw) {
      swal("ID and Password is Same!", "", "waring");
    } else if (!regName.test(this.data.name)) {
      swal("Wrong Name!", "", "waring");
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
              swal("Register Success!", "", "success");
              return true;
              
            }else if (response.data.message === 'fail') {
              swal("ID is Already Exist!", "", "waring");

              return false;
            }
        }).catch((err)=>{console.log(err)})
    )
  }


  registerAjax = (data) => {
    console.log('레지스터호출');
    
     AjaxSign.register(data)
        .then((data) => {
          // swal("Register Success!", "", "success");
            this.closeModal();
        }).catch((e) => {
          swal("Register Fail!", "", "error");
          console.log("register Error : ",e);
        });
  }

  render() {
    return (
      <div id="signUpComponent">
        {
        this.props.user_id === null
            ? (<Button className="btn-1 btn-neutral ml-1" color="default" onClick={this.openModal}>
              회원가입
              </Button>) 
            : null
        }

        <Modal
          shouldCloseOnOverlayClick={false}
          isOpen={this.state.modalIsOpen}
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
