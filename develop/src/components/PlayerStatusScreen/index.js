import React, { Component } from 'react'
import PlayerStatusCard from './PlayerStatusCard'
import './style.css'

export class PlayerStatusScreen extends Component {

    // onClick = (e) => {
    //     document.querySelector(".playerStatusContainer").classList.toggle('open');
    //     document.querySelector("#openBtn").classList.toggle('shiftDownward');
    //     // document.querySelector("#gameBoard").classList.toggle('fadeOutBackground');
    //     document.querySelector('body').classList.toggle('hideScrollBar');
    // }

    render() {
        return (
            <>
            {/* <div onClick={this.onClick} id='openBtn'>Status</div> */}
            <div className="playerStatusContainer">
                < PlayerStatusCard playerID={1}/>
                < PlayerStatusCard playerID={2}/>
                < PlayerStatusCard playerID={3}/>
                < PlayerStatusCard playerID={4}/>
            </div>
            </>
        )
    }
}

export default PlayerStatusScreen
