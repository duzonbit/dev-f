import React, { Component } from "react";
import { AjaxBbs ,UrlBbs} from "url/bbs";
import Message from "message";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getPostRead } from "store/module/read";

class ReadPaneContainer extends Component {
  state = {
    res: {}
  };

  board = {};

  async componentDidMount() {
    // const { getPostRead, pageNum } = this.props; //stateToProps
    // await getPostRead(pageNum);

    const res = await AjaxBbs.read(this.props.pageNum);
    this.board = res.data;
    console.log('board',this.board);
    
    this.setState({
      res: res
    });
  }

  // renderBoard2 = ()=>{
  //   let vBoard = [];
  //   for (const key in board) {
  //     vBoard.push(
  //       <tr key={key}>
  //         <td>{key}</td>
  //         <td>
  //           {key === "idx" ? (
  //             <input name={key} value={board[key]} readOnly={true} />
  //           ) : key === "name" ? (
  //             <input name={key} value={board[key]} readOnly={true} />
  //           ) : key === "pw" ? (
  //             <input name={key} />
  //           ) : key === "content" ? (
  //             <textarea name={key} value={board[key]} readOnly={true}>
  //               {board[key]}
  //             </textarea>
  //           ) : (
  //             <input value={board[key]} readOnly={true} />
  //           )}
  //         </td>
  //       </tr>
  //     );
  //   }
  //   vBoard.push(
  //     <tr>
  //       <td>
  //         <Link to={UrlBbs.update + board['idx']}>
  //           <button>업데이트</button>
  //         </Link>
  //       </td>
  //     </tr>
  //   );
  //   return vBoard;
  // }

  renderBoard = ({ res } = this.state, { board } = this) => {
    if (res.status === 200) {
      let vBoard = [];
      for (const key in board) {
        vBoard.push(
          <tr key={key}>
            <td>{key}</td>
            <td>
              {key === "idx" ? (
                <input name={key} value={board[key]} readOnly={true} />
              ) : key === "name" ? (
                <input name={key} value={board[key]} readOnly={true} />
              ) : key === "pw" ? (
                <input name={key} />
              ) : key === "content" ? (
                <textarea name={key} value={board[key]} readOnly={true}>
                  {board[key]}
                </textarea>
              ) : (
                <input value={board[key]} readOnly={true} />
              )}
            </td>
          </tr>
        );
      }
      vBoard.push(
        <tr>
          <td>
            <Link to={UrlBbs.update + board['idx']}>
              <button>업데이트</button>
            </Link>
          </td>
        </tr>
      );
      return vBoard;
    }
  };

  onSubmit = (event) => {
    event.preventDefault();
    let data = {};
    const formData = new FormData(event.target);
    for (let key of formData.keys()) {
      data[key] = formData.get(key);
    }

    AjaxBbs.del(data)
      .then(({ data }) => {
        console.log(data);

        if (data.message === Message.success) {
          alert("성공");
          this.props.history.push("/");
        } else if (data.message === Message.fail) {
          alert("비밀번호를 다시 넣어주세요!");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    return (
      <div>
        <header>
          <h1>READ</h1>
        </header>
        <form onSubmit={this.onSubmit}>
          <article>
            <table>
              <tbody>{this.renderBoard()}</tbody>
            </table>
          </article>
          <button>글 삭제</button>
        </form>
        <footer>
          <button onClick={this.props.history.goBack}>뒤로가기</button>
        </footer>
      </div>
    );
  }
}

// const mapStateToProps = (state)=>{
//   console.log('read',state.read);
  
//   return {
//     loading : state.read.get('loading'),
//     error : state.read.get('error'),
//     status : state.read.get('status'),
//     idx : state.read.getIn(['data','idx']),
//     name : state.read.getIn(['data','name']),
//     pw : state.read.getIn(['data','pw']),
//     title : state.read.getIn(['data','title']),
//     content : state.read.getIn(['data','content']),
//     regdate : state.read.getIn(['data','regdate']),
//     modifydate : state.read.getIn(['data','modifydate']),
//   }
// }

// const mapDispatchToProps = (dispatch)=>{
//   return {
//     getPostRead : (page)=>{dispatch(getPostRead(page))},
//     //삭제액션추가
//     //수정액션추가
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(ReadPaneContainer);

export default ReadPaneContainer;
