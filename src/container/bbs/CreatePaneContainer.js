import React from 'react';
import {AjaxBbs, UrlBbs } from "url/bbs"
import { getCreate } from "store/module/bbs/create";
import { connect } from "react-redux";
import ResultNotifyModal from "component/bbs/modals/ResultNotifyModal";
import Modal from "react-modal";



class CreatePaneContainer extends React.Component {

 // afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   this.subtitle.style.color = '#f00';
  // }
  state = {
    modalIsOpen: false,
    modalMessage:'',
  };

  openModal=()=> {
    if(!this.state.modalIsOpen){
      this.setState({modalIsOpen: true});
    }
    // this.modal.modalIsOpen = true;
    
  }
 
  closeModal=()=> {
    if(this.state.modalIsOpen){
      this.setState({modalIsOpen: false});
      document.location='/';
    }
    // this.modal.modalIsOpen = false;

  }
  
  componentDidMount(){
        Modal.setAppElement("#createPaneContainer");
  }

  componentDidUpdate = (prevProps, prevState)=>{
    const { loading, error,message } = this.props; //state to props
  //  console.log('디드업데이트 콜');
   

    if(prevProps.message !== message){
      // console.log('did',message);
    if(!loading && !error && message==='success'){
      // this.modal.message='성공';
      this.setState({...this.state,modalMessage:'성공'})
      // if(!alert("작성 성공")) document.location = '/';  
      
    }else if(error || (!loading&&message===undefined)){
      // this.modal.message='실패';

      this.setState({...this.state,modalMessage:'실패'})

      // alert('실패');
    }


    this.openModal();
  }
    
  }

  onSubmit = (event) => {
    const { getCreate } = this.props; //dispatch to props

    event.preventDefault();
    const formData = new FormData(event.target);

    let data={};
    for(let key of formData.keys()){
      data = {
        ...data,
        [key] : formData.get(key),
      }
    }
    getCreate(data); // dispatch action
    
  }

  render() {
   
    return (
      
      <div id="createPaneContainer" >
        <form onSubmit={this.onSubmit}>
        <div>
            <label>name</label>
            <input name="name" type="text"/>
        </div>
        <div>
            <label>pw</label>
            <input name="pw" type="text"/>
        </div>
        <div>
            <label>title</label>
            <input name="title" type="text"/>
        </div>
        <div>
            <label>content</label>
            <textarea name="content" cols="30" rows="10"></textarea>
        </div>
        <button type="submit">확인</button>
        </form>


        {/* //////////////////////////////// */}

        <Modal
          shouldCloseOnOverlayClick={false}
          isOpen={this.state.modalIsOpen}
          // onAfterOpen={this.afterOpenModal}
          // onRequestClose={this.closeModal}
          // style={customStyles}
          // className="overlay"
          className='modal'
          overlayClassName="overlay"

          // contentLabel="Example Modal"
          // setAppElement="#createPaneContainer"
        >
          <ResultNotifyModal
          // style={customStyles}
          closeModal={this.closeModal}
          // style={customStyles}

          resultMessage={this.state.modalMessage}
          />

        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  
  return {
    loading : state.create.get('loading'),
    error : state.create.get('error'),
    message : state.create.get('message'),
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    getCreate : (data)=>{dispatch(getCreate(data))},
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreatePaneContainer);