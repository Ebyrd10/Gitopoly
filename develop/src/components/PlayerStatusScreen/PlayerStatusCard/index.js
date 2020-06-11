import React, { Component } from 'react'
import PlayerIcon from '../../PlayerIcon'
import './style.css'

export class PlayerStatusCard extends Component {

    render() {
        return (
            <div className="playerStatusCardContainer">
                {/* Player Icon */}
                <div className="playerIcon"></div>
                {/* Select New Icon Bar */}
                < PlayerIcon/>
                <div className="playerNum"> Player  </div>
                {/* Name */}
                <div className="playerName cardList"> Name: </div>
                {/* Money */}
                <div className="playerMoney cardList"> Money: </div>
                {/* Properties Owned*/}
                <div className="playerProperties cardList"> Properties: </div>
            </div>
        )
    }
}

export default PlayerStatusCard
