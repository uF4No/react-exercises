import React, {Component} from 'react'
import './Deck.css'

import Card from './Card'

class Deck extends Component{
  render(){
    const cardss = this.props.cards;
    console.log(cardss)

    return (
      <div className="Deck">
        <h3>This is a Deck with {this.props.totalxp} experience</h3>
        <h4>{this.props.isWinner? 'This deck WON!!' : 'This deck LOSE!'}</h4>
        <div className="Deck-cards">
          {/* Loop through this.props.cards */}
          {this.props.cards.map((c) => (
            <Card key={c.name} name={c.name} power={c.power} exp={c.experience} img={c.image} /> 
          ))}
        </div>
        <hr />

      </div>
    )
  }
}

export default Deck;