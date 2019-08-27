import React, { Component } from 'react';
import { UrlBbs } from "url/bbs";
import swal from 'sweetalert';


class ResultNotifyModal extends Component {
    
    state={
        input:'',
    }

    onTextChange=(e)=>{
        this.setState({input:e.target.value})
    }
    
    working=()=>{
        if(this.props.work === '수정'){
            // document.location=UrlBbs.update+[this.props.idx];
            this.props.history.push(UrlBbs.update+[this.props.idx]);
        }else if(this.props.work === '삭제'){
            this.props.delete();
        }
    }

    pwCheck=()=>{
        if(this.state.input === this.props.pw){
            this.working();
        }else{
            swal("Wrong Password!", "", "warning");
        }
    }
    render() {

        return (
          
            <div className='resultModal'>
                <h5>비밀 번호를 입력하세요</h5>
               
                <h5>지울꺼임 : {this.props.pw}</h5>
                <input value={this.state.input} onChange={this.onTextChange}/>
                <button onClick={this.pwCheck}>확인</button>
                <button onClick={this.props.closeModal}>close</button>
            </div>
        );
    }
}

export default ResultNotifyModal;