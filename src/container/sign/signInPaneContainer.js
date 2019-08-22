import React, { Component } from "react";

class SignInPaneContainer extends Component {
  render() {
    return (
      <div>
        <h1> 로그인 </h1>{" "}
        <form onSubmit>
          <div>
            <label> id </label> <input name="user_id" type="text" />
          </div>{" "}
          <div>
            <label> password </label> <input name="pw" type="text" />
          </div>{" "}
          <button type="submit"> 로그인 </button>{" "}
        </form>{" "}
      </div>
    );
  }
}

export default SignInPaneContainer;
