import React, { Component } from 'react'
import PlayerIcon from '../../PlayerIcon'
import './style.css'

export class PlayerStatusCard extends Component {
    render() {
        return (
            <div className="playerStatusCardContainer">
                {/* Player Icon */}
                <div className="playerIcon"> hello </div>
                {/* Select New Icon Bar */}
                < PlayerIcon />
                {/* Name */}
                {/* Money */}
                {/* Properties Owned*/}
            </div>
        )
    }
}

export default PlayerStatusCard
