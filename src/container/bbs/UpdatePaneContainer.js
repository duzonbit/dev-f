import React, { Component } from 'react';
import { AjaxBbs } from "url/bbs";
import Message from "message";
import { connect } from "react-redux";
import { updateBbs } from "store/module/update";

class UpdatePaneContainer extends Component {

  state = {
    res: {},
    textValue: "",
  };

  board = {};

  async componentDidMount() {
    const res = await AjaxBbs.read(this.props.pageNum);

    this.board = res.data;
    this.setState({
      res: res,
      textValue: res.data.content
    });
  }

  onSubmit = (event) =>{
    event.preventDefault();
    let data = {};
    const formData = new FormData(event.target);
    for(let key of formData.keys()){
      data[key]=formData.get(key);
    }
    
    AjaxBbs.update(data).then(({data})=>{
      console.log(data);
      if(data.message===Message.success){
        alert("성공");
        this.props.history.push('/');
      }else if(data.message===Message.fail){
        alert("비밀번호를 다시 넣어주세요!");
      }
    }).catch((e)=>{
      console.log(e);
    });
  }
  
  onTextAreaChange = (event)=>{
    this.setState({textValue: event.target.value});
  }

  renderBoard = ({ res } = this.state, { board } = this) => {
    if (res.status === 200) {
      let vBoard = [];
      for (const key in board) {
        vBoard.push(
          <tr key={key}>
            <td>{key}</td>
            <td>
              {
                key==="idx"?
                  <input name={key} value={board[key]} readOnly={true}></input>
                :key==="name"?
                  <input name={key} value={board[key]} readOnly={true}></input>
                :key==="pw"?
                  <input name={key} readOnly={false}></input>
                :key==="content"?
                  <textarea name={key} value={this.state.textValue} onChange={this.onTextAreaChange} readOnly={false}/>
                :key==="title"?
                <input name={key} readOnly={false}></input>
                :<input value={board[key]} readOnly={true}/>
              }
            </td>
          </tr>
        );
      }
      return vBoard;
    }
  };

  render() {
    return (
      <div>
        <header>
          <h1>Update</h1>
        </header>
        <form onSubmit={this.onSubmit}>
          <article>
            <table>
              <tbody>{this.renderBoard()}</tbody>
            </table>
          </article>
          <button>글 업데이트</button>
        </form>
        <footer>
          <button onClick={this.props.history.goBack}>뒤로가기</button>
        </footer>
      </div>
    );
  }
}

export default connect()(UpdatePaneContainer);