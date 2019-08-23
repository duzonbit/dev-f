import React, { Component } from 'react';

class ResultNotifyModal extends Component {
    render() {
        return (
          
            <div className='resultModal'>
                <h5>{this.props.resultMessage}</h5>
                <button onClick={this.props.closeModal}>close</button>
            </div>
        );
    }
}

export default ResultNotifyModal;