
import React from 'react';

const LoginComponent = (props) => {
    return (
        <div>
        {/* 로그인 액션 필요
                input태그 작성필요 - setstate필요*/}
        <h1> 로그인 </h1>
        <form onSubmit={props.onSubmit}>
          <div>
            <label> id </label> <input name="user_id" />
          </div>
          <div>
            <label> password </label> <input name="pw" />
          </div>
          <button type="submit"> 로그인 </button>
        </form>
      </div>
    );
};

export default LoginComponent;
