import React from 'react';
import {AjaxBbs} from "url/bbs"

class CreatePaneContainer extends React.Component {
  onSubmit = (event) => {
    event.preventDefault();
    let data = {};
    const formData = new FormData(event.target);
    for(let key of formData.keys()){
      data[key]=formData.get(key);
    }
    AjaxBbs.create(data).then((data)=>{
      console.log(data);  
      alert("잘 되네");
      this.props.history.push('/');
    }).catch((e)=>{
      console.log(e);
    });
  }

  render() {
    return (
      
      <div>
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
      </div>
    );
  }
}

export default CreatePaneContainer;