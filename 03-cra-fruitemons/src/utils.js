function shuffleFruitemons(){
  const fruitemons = [
    {"name":"kiwi", "power": 3, "experience": 12, "image":"🥝"},
    {"name":"watermelon", "power": 2, "experience": 10, "image":"🍉"},
    {"name":"apple", "power": 4, "experience": 9, "image":"🍎"},
    {"name":"banana", "power": 5, "experience": 13, "image":"🍌"},
    {"name":"pear", "power": 2, "experience": 7, "image":"🍐"},
    {"name":"orange", "power": 4, "experience": 10, "image":"🍊"},
    {"name":"grapes", "power": 4, "experience": 8, "image":"🍇"},
    {"name":"cherry", "power": 3, "experience": 10, "image":"🍒"}
  ]
  
  let deckA = []
  let deckB = []
  for(let i =0; i< 8; i++){
    // select a random card
    let rand = Math.floor(Math.random() * Math.floor(fruitemons.length));
    //push the card to deckA or deckB
    if(deckA.length === deckB.length){
      deckA.push(fruitemons[rand])
    }else{
      deckB.push(fruitemons[rand])
    }
    console.log(`Deck A has ${deckA.length} cards`)
    console.log(`Deck B has ${deckB.length} cards`)
    // remove card from the full deck
    fruitemons.splice(rand, 1)
    
  }

  return {deckA, deckB}
}

module.exports = {shuffleFruitemons}