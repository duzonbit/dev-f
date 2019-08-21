import React, { Component } from "react";
import { AjaxBbs ,UrlBbs} from "url/bbs";
import Message from "message";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getPostRead } from "store/module/bbs/read";

class ReadPaneContainer extends Component {
  // state = {
  //   res: {}
  // };

  // board = {};

  async componentDidMount() {
    const { getPostRead } = this.props; //stateToProps
    const {pageNum} = this.props; //parent To Props
    // console.log('액션생성');    
    await getPostRead(pageNum); //pageNum = 게시글 id
    // console.log('액션생성완료');


    // const res = await AjaxBbs.read(this.props.pageNum);
    // this.board = res.data;
    // console.log('board',this.board);
    
    // this.setState({
    //   res: res
    // });
  }

  renderBoard2 = ()=>{
    const {idx, name, pw, title, content, regdate, modifydate } = this.props; //state To props
    return(
      <tbody>
        <tr>
          <td>idx</td>
          <td><input name={'idx'} value={idx} onChange={()=>{}} readOnly={true} /></td>
        </tr>
        <tr>
          <td>name</td>
          <td><input name={'name'} value={name} onChange={()=>{}} readOnly={true}/></td>
        </tr>
        <tr>
          <td>pw</td>
          <td><input name={'key'}/></td>
        </tr>
        <tr>
          <td>title</td>
          <td><input name={'title'} value={title} onChange={()=>{}}/></td>
        </tr>
        <tr>
          <td>content</td>
          <td><textarea name={'content'} value={content} onChange={()=>{}}/></td>
        </tr>
        <tr>
          <td>regdate</td>
          <td><input name={'regdate'} value={regdate} onChange={()=>{}} readOnly={true}/></td>
        </tr>
        <tr>
          <td>modifydate</td>
          <td><input name={'modifydate'} value={modifydate} onChange={()=>{}} readOnly={true}/></td>
        </tr>
        <tr>
          <td>
            <Link to={UrlBbs.update + {idx}}> {/** 링크말고 액션? */}
              <button>업데이트</button>
            </Link>
          </td>
        </tr>
      </tbody>        
    )
  }

  /* onSubmit 에서 업데이트 액션 날릴거 */
  // onSubmit = (event) => {
  //   event.preventDefault();
  //   let data = {};
  //   const formData = new FormData(event.target);
  //   for (let key of formData.keys()) {
  //     data[key] = formData.get(key);
  //   }

  //   AjaxBbs.del(data)
  //     .then(({ data }) => {
  //       console.log(data);

  //       if (data.message === Message.success) {
  //         alert("성공");
  //         this.props.history.push("/");
  //       } else if (data.message === Message.fail) {
  //         alert("비밀번호를 다시 넣어주세요!");
  //       }
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  render() {
    return (
      <div>
        <header>
          <h1>READ</h1>
        </header>
        <form onSubmit={this.onSubmit}>
          <article>
            <table>
              {this.renderBoard2()}
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

const mapStateToProps = (state)=>{
  // console.log('read : state',state);
  // console.log('read : state.read',state.read);
  // console.log('read : state.list',state.list);
  
  return {
    loading : state.read.get('loading'),
    error : state.read.get('error'),
    status : state.read.get('status'),
    idx : state.read.getIn(['data','idx']),
    name : state.read.getIn(['data','name']),
    pw : state.read.getIn(['data','pw']),
    title : state.read.getIn(['data','title']),
    content : state.read.getIn(['data','content']),
    regdate : state.read.getIn(['data','regdate']),
    modifydate : state.read.getIn(['data','modifydate']),
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    getPostRead : (id)=>{dispatch(getPostRead(id))},
    //삭제액션추가
    //수정액션추가
  }
}

export default connect(
  mapStateToProps,
  // null,
  mapDispatchToProps,
)(ReadPaneContainer);

// export default ReadPaneContainer;
