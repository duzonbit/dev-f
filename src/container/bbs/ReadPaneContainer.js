import React, { Component } from "react";
import { AjaxBbs ,UrlBbs} from "url/bbs";
import Message from "message";
import { connect } from "react-redux";
import { getRead } from "store/module/bbs/read";
import { Link } from "react-router-dom";


class ReadPaneContainer extends Component {
 
  // board = {};


  componentDidMount() {
    const { getRead } = this.props; //stateToProps
    const {pageNum} = this.props; //parent To Props
    getRead(pageNum); //pageNum = 게시글 id
  }



  renderBoard2 = ()=>{
    const {idx, name, pw, title, content, regdate, modifydate } = this.props; //state To props
    
    return(
      <tbody>
        <tr>
          <td>idx</td>
          <td><input name={'idx'} value={idx} onChange={()=>{}} readOnly={true} disabled={true}/></td>
        </tr>
        <tr>
          <td>name</td>
          <td><input name={'name'} value={name} onChange={()=>{}} readOnly={true} disabled={true}/></td>
        </tr>
        
        <tr>
          <td>title</td>
          <td><input name={'title'} value={title} onChange={()=>{}} disabled={true}/></td>
        </tr>
        <tr>
          <td>content</td>
          <td><textarea name={'content'} value={content} onChange={()=>{}} disabled={true}/></td>
        </tr>
        <tr>
          <td>regdate</td>
          <td><input name={'regdate'} value={regdate} onChange={()=>{}} readOnly={true} disabled={true}/></td>
        </tr>
        <tr>
          <td>modifydate</td>
          <td><input name={'modifydate'} value={modifydate} onChange={()=>{}} readOnly={true} disabled={true}/></td>
        </tr>
        <tr>
          <td>
            <Link to={UrlBbs.update + idx}>            
              <button>수정</button>
            </Link>
          </td>
       
          
        </tr>
      </tbody>        
    )
  }

  /* onSubmit 에서 업데이트 액션 날릴거 */
  onSubmit = (event) => {
    event.preventDefault();
    // let data = {};
    // console.log('온서브밋');
    
    // const formData = new FormData(event.target);
    // const fromData2 = new FormData(document.querySelector(".test"));
    // // console.log(event.target);
    // // console.log(document.querySelector(".test"));
    // console.log(formData);
    // console.log(fromData2);
    
    // for (let key of formData.keys()) {
    //   data[key] = formData.get(key);
    // }

    // AjaxBbs.del(data)
    //   .then(({ data }) => {
    //     console.log(data);

    //     if (data.message === Message.success) {
    //       alert("성공");
    //       this.props.history.push("/");
    //     } else if (data.message === Message.fail) {
    //       alert("비밀번호를 다시 넣어주세요!");
    //     }
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  };

  render() {
    return (
      <div>
        <header>
          <h1>READ</h1>
        </header>
        <form onSubmit={this.onSubmit} className="test">
          <article>
            <table>
              {this.renderBoard2()}
            </table>
          </article>
         
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
    getRead : (id)=>{dispatch(getRead(id))},
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReadPaneContainer);

// export default ReadPaneContainer;
