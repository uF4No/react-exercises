import React from 'react';
import './App.css';

import Deck from './Deck'

import * as utils from './utils'


function App() {
  const decks = utils.shuffleFruitemons()
  console.log(decks)
  // loops all and adds the experience of each to a variable called xp, which is initialized to 0
  let xpA = decks.deckA.reduce((xp, fruitemon) => xp + fruitemon.experience, 0)
  let xpB = decks.deckB.reduce((xp, fruitemon) => xp + fruitemon.experience, 0)
  

  return (
    <div className="App">
      <h1>Fruitemon game!</h1>
      <Deck cards={decks.deckA} totalxp={xpA} isWinner={xpA > xpB}/>
      <Deck cards={decks.deckB} totalxp={xpB} isWinner={xpB > xpA}/>
    </div>
  );
}

export default App;
