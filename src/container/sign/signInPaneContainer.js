import React, { Component } from "react";
import { reqSignIn, reqSignOut } from "store/module/sign/signInOut";
import { connect } from "react-redux";
import LoginComponent from "component/sign/LoginComponent";
import UserComponent from "component/sign/UserComponent";
import { withCookies } from "react-cookie";
import swal from 'sweetalert';

class SignInPaneContainer extends Component {

onSubmit = (event) => {
    event.preventDefault();
    let data = {};
    const formData = new FormData(event.target);
    
    for(var pair of formData.entries()) {
      data[pair[0]] = pair[1];
    }
    console.log('dadada',data);
    
    if (data.user_id === "" && data.pw === "") {
      swal("Empty!", "", "warning");
    } else {
        this.props.reqSignIn(data);
    }
}

signOut = ()=>{
  this.props.reqSignOut();
  swal("Logout Complete!", "", "success");
  this.props.history.push('/');
}

componentDidUpdate = (prevProps, prevState) => {
  const { loading, error, message, user_id } = this.props; //state to props
   
  if (prevProps.message !== message) {
    if (message === 'success' && user_id !== null) {
      swal("Login Success!", "", "success");
    } else if (!loading && !error &&message === 'fail') {
      swal("Check ID & Password!", "", "success");
    } else if (error) {
      swal("Error!", "", "error");
    }
  }
};

  render() {
    console.log('12321sdfasfw',this.props.cookies.get('signedId'));
    
    return (
      <div>
      {
          this.props.cookies.get('signedId') === undefined
        ?(<LoginComponent onSubmit={this.onSubmit}/>)
        :(<UserComponent user_id={this.props.cookies.get('signedId')} signOut={this.signOut}/>)
      }
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return{
    user_id : state.signIn.get('signInId'),
    message : state.signIn.get('message'),
    loading : state.signIn.get('loading'),
    error : state.signIn.get('error'),
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    reqSignIn : (data)=>{dispatch(reqSignIn(data))},
    reqSignOut : ()=>{dispatch(reqSignOut())},
  }
}

export default withCookies(connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInPaneContainer));
