import React, { Component } from 'react'
import PlayerStatusCard from './PlayerStatusCard'
import './style.css'

export class PlayerStatusScreen extends Component {

    onClick = (e) => {
        document.querySelector(".playerStatusContainer").classList.toggle('open');
        document.querySelector("#openBtn").classList.toggle('shiftDownward');
        // document.querySelector("#gameBoard").classList.toggle('fadeOutBackground');
        document.querySelector('body').classList.toggle('hideScrollBar');
    }

    render() {
        return (
            <>
            <div onClick={this.onClick} id='openBtn'>Status</div>
            <div className="playerStatusContainer">
                < PlayerStatusCard />
                < PlayerStatusCard />
                < PlayerStatusCard />
                < PlayerStatusCard />
            </div>
            </>
        )
    }
}

export default PlayerStatusScreen
