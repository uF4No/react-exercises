import React, {Component} from 'react';
import './Card.css'


class Card extends Component{
  render(){
    return (
      <div className="Card">
        <h3>{this.props.name}</h3>
        <p className="Card-image">{this.props.img}</p>
        <p>EXP: {this.props.exp}</p>
        <p>Power: {this.props.power}</p>
      </div>
    )
  }
}

export default Card;