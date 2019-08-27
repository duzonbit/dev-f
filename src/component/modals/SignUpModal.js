import React from 'react';

const SignUpModal = (props) => {
    return (
        <div>
              <h1>회원가입</h1>
                <form onSubmit={props.onSubmit}>
                    <div>
                        <label>id</label>
                        <input name="user_id"/>
                        <h4>4~12자의 영문 대소문자와 숫자로만 입력</h4>
                    </div>
                    <div>
                        <label>name</label>
                        <input name="name"/>
                        <h4>2글자 이상 한글만</h4>
                    </div>
                    <div>
                        <label>password</label>
                        <input type="password"name="pw"/>
                        <h4>4~12자의 영문 대소문자와 숫자로만 입력</h4>
                    </div>
                    <button type="submit">확인</button>
                    <button onClick={props.closeModal}>취소</button>
                </form>      
        </div>
    );
};

export default SignUpModal;