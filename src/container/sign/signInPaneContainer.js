import React, { Component } from "react";
import { reqSignIn } from "store/module/sign/signIn";
import { connect } from "react-redux";
import LoginComponent from "component/sign/LoginComponent";
import UserComponent from "component/sign/UserComponent";


class SignInPaneContainer extends Component {

onSubmit = (event) => {
    event.preventDefault();
    let data = {};
    const formData = new FormData(event.target);
    for (let key of formData.keys()) {
        console.log(key);
        
        data[key] = formData.get(key);
    }
    // console.log(data);

    // 유효성 검사
    if (data.user_id === "" && data.pw === "") {
        alert("공백입니다")
    } else {
        this.props.reqSignIn(data);
    }
}

componentDidUpdate = (prevProps, prevState) => {
  const { loading, error, message, user_id } = this.props; //state to props
  // console.log('콜');
 
  
  if (prevProps.message !== message) {
    if (message === 'success' && user_id !== null) {
      alert('로그인 성공')
    } else if (!loading && !error &&message === 'fail') {
      alert("아이디 비번 확인");
    } else if (error) {
      alert("에러남");
    }
  }
};


  render() {
    return (
      <div>
        {
          this.props.user_id === null
        ?(<LoginComponent onSubmit={this.onSubmit}/>)
        :(<UserComponent user_id={this.props.user_id}/>)
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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInPaneContainer);
