import React, { Component } from "react";
import { reqSignIn, reqSignOut } from "store/module/sign/signInOut";
import { connect } from "react-redux";
import LoginComponent from "component/sings/LoginComponent";
import UserComponent from "component/sings/UserComponent";
import { withCookies } from "react-cookie";

class SignInPaneContainer extends Component {

onSubmit = (event) => {
    event.preventDefault();
    let data = {};
    const formData = new FormData(event.target);
    for (let key of formData.keys()) {
        console.log(key);
        
        data[key] = formData.get(key);
    }

    // 유효성 검사
    if (data.user_id === "" && data.pw === "") {
        alert("공백입니다")
    } else {
        this.props.reqSignIn(data);
    }
}

signOut = ()=>{
  this.props.reqSignOut();
  // this.props.cookies.remove('signedId')// 쿠키 제거
  alert('로그아웃 됨')
  this.props.history.push('/');
}

componentDidUpdate = (prevProps, prevState) => {
  const { loading, error, message, user_id } = this.props; //state to props
   
  if (prevProps.message !== message) {
    if (message === 'success' && user_id !== null) {
      alert('로그인 성공')  
      // this.props.cookies.set('signedId',user_id);//쿠키 등록
    } else if (!loading && !error &&message === 'fail') {
      alert("아이디 비번 확인");
    } else if (error) {
      alert("에러남");
    }
  }
};

  render() {
    console.log('12321sdfasfw',this.props.cookies.get('signedId'));
    
    return (
      <div>
        {/* {
          this.props.user_id === null
        ?(<LoginComponent onSubmit={this.onSubmit}/>)
        :(<UserComponent user_id={this.props.user_id} signOut={this.signOut}/>)
      } */}
       
       세션아이디: {sessionStorage.getItem('signedId')}<br/>
       쿠키아이디: {this.props.cookies.get('signedId')}
      
      {/* 클라이언트 세션으로 */}
       {/* {
          sessionStorage.getItem('signedId') === null
        ?(<LoginComponent onSubmit={this.onSubmit}/>)
        :(<UserComponent user_id={sessionStorage.getItem('signedId')} signOut={this.signOut}/>)
      } */}

      {/* 리액트 쿠키로 */}
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
