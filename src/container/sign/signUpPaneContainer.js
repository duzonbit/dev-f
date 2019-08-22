import React, { Component } from 'react';
import AJAX from '../loc/board/url';
import MSG from "../msg";
class SignUpPaneContainer extends Component {

    state={
        user_id: "",
        name: "",
        pw: "",
    }

    onSubmit = (event) => {
        event.preventDefault();
        let data = {};
        const formData = new FormData(event.target);
        for (let key of formData.keys()) {
            data[key] = formData.get(key);
        }

        console.log(data);

        const regExp = /^[a-zA-Z0-9]{4,12}$/; //id, password
        const regName = /^[가-힝]{2,}$/; //name
        
        if (data.user_id === "" || data.name === "" || data.pw === "") {
            alert("공백입니다")
            this.setState({
                user_id: '',
                pw: '',  
                name: '',             
            })
        } else if (!regExp.test(data.user_id) || !regExp.test(data.pw)) {
            alert("형식에 맞지 않습니다")
            this.setState({
                user_id: '',
                pw: '',  
                name: '',             
            })
        } else if (data.user_id === data.pw) {
            alert("비밀번호와 아이디가 같습니다")
            this.setState({
                user_id: '',
                pw: '',  
                name: '',             
            })
        } else if (!regName.test(data.name)) {
            alert("이름이 이상합니다")
            this.setState({
                user_id: '',
                pw: '',  
                name: '',             
            })
        } else {
            if(this.idCheck(data.user_id)){
                this.loginAjax(data)
            }
        }
    }

    idCheck(data) {
        AJAX.idCheck(data).then((data) => {
            if (data.data.message === MSG.success) {
                console.log(data);
                alert("사용가능한 아이디입니다");
                this.props.history.push('/');
            } else if (data.data.message === MSG.fail) {
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

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    loginAjax(data) {
        AJAX.register(data).then((data) => {
            console.log(data);
            alert("회원가입 완료");
            this.props.history.push('/');
        }).catch((e) => {
            console.log(e);
        });
    }

    render() {
        return (
            <div>
                <h1>회원가입</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>id</label>
                        <input name="user_id" type="text" value={this.state.id} onChange={this.handleChange}/>
                        <h4>4~12자의 영문 대소문자와 숫자로만 입력</h4>
                    </div>
                    <div>
                        <label>name</label>
                        <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>password</label>
                        <input name="pw" type="text" value={this.state.pw} onChange={this.handleChange}/>
                        <h4>4~12자의 영문 대소문자와 숫자로만 입력</h4>
                    </div>
                    <button type="submit">확인</button>
                </form>
            </div>
        );
    }
}

export default SignUpPaneContainer;