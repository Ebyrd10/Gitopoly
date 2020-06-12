import React, { Component } from 'react'
import PlayerIcon from '../../PlayerIcon'
import './style.css'

export class PlayerStatusCard extends Component {

    lockCard = (e) => {
        const item =  e.target;
        item.classList.toggle('clickedOn');
    }

    render() {
        return (
            <div className="playerStatusCardContainer" playerID={this.props.playerID}>
                {/* Player Icon */}
                <div className="playerIcon"></div>
                {/* Select New Icon Bar */}
                < PlayerIcon/>
                <div className="playerNum"> Player {this.props.playerID}</div>
                {/* Name */}
                <div className="playerName cardList"> Name: </div>
                {/* Money */}
                <div className="playerMoney cardList"> Money: </div>
                {/* Properties Owned*/}
                <div className="playerProperties cardList"> Properties: </div>
                {/* Lock on Screen Button */}
                <div onClick={this.lockCard} className="lockIconContainer"><span className="cardList lockIcon"></span></div>
            </div>
        )
    }
}

export default PlayerStatusCard
