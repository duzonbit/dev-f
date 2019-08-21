import React,{useEffect} from "react";
import { connect } from "react-redux";
import GeneralReadData from "component/bbs/read/GeneralReadData";
import GeneralActionButton from "component/bbs/read/GeneralActionButton";
import GeneralSubTitle from "component/bbs/general/GeneralSubTitle";
import { readAction, delAction } from "store/module/bbs/defaultbbs";

const ReadPaneContainer = (props) => {

  useEffect(()=>{
    if(props.action === "del"){
      alert("글이 삭제 되었습니다.");
      props.history.push("/");
    }
  });
  
  
  if (props.action !== "read") 
    props.readAction(props.readNum);
  
  const onDel = async (e) => {
    e.preventDefault();
    let pw = prompt("비밀번호를 입력하세요");
    props.delAction(props.bbs.idx,{
      idx: props.bbs.idx,
      name: props.bbs.name,
      pw: pw
    })
    // await AjaxBbs.del(props.idx, {
    //   idx: props.idx,
    //   name: props.bbs.name,
    //   pw: pw
    // }).then(({ data }) => {
    //   console.log(data);
    //   if (data.message === Message.success) {
    //     alert("성공");
    //     props.history.push("/");
    //   } else if (data.message === Message.fail) {
    //     alert("비밀번호를 다시 넣어주세요!");
    //   }
    // });
  }

  return (
    <div>
      <GeneralSubTitle subtitle={"글"} />
      <GeneralReadData content={props.bbs} />
      <GeneralActionButton
        idx={props.bbs.idx}
        history={props.history}
        del={onDel}
      />
    </div>
  );
};

export default connect(
  (state) =>({
    action: state.bbs.action,
    bbs: state.bbs.content === undefined ? {
      idx : "",
      name : "",
      pw : "",
      title : "",
      content : "",
      regdate : "",
      modifydate : "",
    } : state.bbs.content,
    ms:"",
  }),
  (dispatch) => ({
    readAction: (idx) => {
      dispatch(readAction(idx));
    },
    delAction: (idx, data) => {
      dispatch(delAction(idx, data));
    }
  })
)(ReadPaneContainer);

// class ReadPaneContainer extends Component {
//   state = {
//     res: {}
//   };

//   board = {};
//   idx = "";

//   async componentDidMount() {
//     const res = await AjaxBbs.read(this.props.pageNum);
//     this.board = res.data;
//     this.idx = this.board.idx;
//     this.setState({
//       res: res
//     });
//   }

//   renderBoard = ({ res } = this.state, { board } = this) => {
//     if (res.status === 200) {
//       let vBoard = [];
//       for (const key in board) {
//         vBoard.push(
//           <tr key={key}>
//             <td>{key}</td>
//             <td>
//               {key === "idx" ? (
//                 <input name={key} value={board[key]} readOnly={true} />
//               ) : key === "name" ? (
//                 <input name={key} value={board[key]} readOnly={true} />
//               ) : key === "pw" ? (
//                 <input name={key} />
//               ) : key === "content" ? (
//                 <textarea name={key} value={board[key]} readOnly={true}>
//                   {board[key]}
//                 </textarea>
//               ) : (
//                 <input value={board[key]} readOnly={true} />
//               )}
//             </td>
//           </tr>
//         );
//       }
//       vBoard.push(
//         <tr>
//           <td>
//             <Link to={UrlBbs.update + board["idx"]}>
//               <button>업데이트</button>
//             </Link>
//           </td>
//         </tr>
//       );
//       return vBoard;
//     }
//   };

//   onSubmit = (e) => {
//     e.preventDefault();
//     let data = {};
//     const formData = new FormData(e.target);
//     for (let key of formData.keys()) {
//       data[key] = formData.get(key);
//     }

//     AjaxBbs.del(data)
//       .then(({ data }) => {

//         if (data.message === Message.success) {
//           alert("성공");
//           this.props.history.push("/");
//         } else if (data.message === Message.fail) {
//           alert("비밀번호를 다시 넣어주세요!");
//         }
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   };

//   onDel = (e)=>{
//     e.preventDefault();
//     let pw = prompt("비밀번호를 입력하세요");
//     AjaxBbs.del(this.idx,{
//       idx:this.idx,
//       name:this.board.name,
//       pw:pw,
//     }).then(({data})=>{
//       console.log(data);
//       if (data.message === Message.success) {
//         alert("성공");
//         this.props.history.push("/");
//       } else if (data.message === Message.fail) {
//         alert("비밀번호를 다시 넣어주세요!");
//       }
//     })
//   }

//   render() {
//     console.log(
//       this.action,
//       this.board,
//       this.idx,

//     );

//     return (
//       <div>
//         <GeneralSubTitle subtitle={"글"}></GeneralSubTitle>
//         <GeneralReadData content={this.board} />
//         <GeneralActionButton idx={this.idx} history={this.props.history} del={this.onDel}/>
//       </div>
//     );
//   }
// }
