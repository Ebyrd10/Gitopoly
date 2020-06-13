import React, { Component } from 'react';
import '../PlayerStatusButton/style.css'


export class PlayerStatusButton extends Component {
    onClick = (e) => {
        document.querySelector(".playerStatusContainer").classList.toggle('open');
        document.querySelector("#openBtn").classList.toggle('shiftDownward');
        // document.querySelector("#gameBoard").classList.toggle('fadeOutBackground');
        document.querySelector('body').classList.toggle('hideScrollBar');
    }
    render() {
        return (
            <div onClick={this.onClick} id='openBtn'>Status</div>
        )
    }
}

export default PlayerStatusButton
