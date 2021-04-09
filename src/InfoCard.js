import React, { Component } from 'react'
import './styles/card.css'


export class InfoCard extends Component {
    render() {
        return (
            <div className="infocard">
                <span className="material-icons" style={{background: this.props.bgcolor}}>
                {this.props.icon}
                </span>
                <span className="text">{this.props.text}</span>
                <span className="value">{this.props.value}</span>

            </div>
        )
    }
}




export default InfoCard
