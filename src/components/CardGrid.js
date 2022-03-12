import React, {useState, useEffect} from 'react';
import AllCards from '../card';

// Randomize array in-place using Durstenfeld shuffle algorithm
// Taken from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Returns a Card which is made up a character's picture and name
function Card(props) {
  const card = props.card;

  function handleClick(e) {
    // If card has already been clicked, lose the game

    // If card has not been clicked, increase score
    props.onIncreaseScore();
  }

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-image">
        <img src={card.getImage()} alt=""></img>
      </div>
      <div className="card-name">{card.getName()}</div>
    </div>
  );
}

// Returns the 10 initial Cards in a random order
function InitialBoard(props) {
  const currentCardIndicesArr = props.currentCardIndicesArr;
  shuffleArray(currentCardIndicesArr);
  return currentCardIndicesArr.map((index) => {
    const card = AllCards.getCardByIndex(index);
    return (
      <Card
        card={card}
        onIncreaseScore={props.onIncreaseScore}
        onResetScore={props.onResetScore}
        cardIndex={index}
        key={index}
      />
    );
  });
}

// Returns the current state of the grid of Cards
function CardGrid(props) {
  // const [round, setRound] = useState(1);
  const [currentCardIndicesArr, setCurrentCardIndicesArr] = useState(
    AllCards.getInitialCardIndices()
  );
  // const [clickedCards, setClickedCards] = useState([]);
  // const [remainingCards, setRemainingCards] = useState([]);

  // const image = AllCards.getCard('Chosen').getImage();

  // Can either have InitialBoard or a new board
  return (
    <div className="grid">
      <InitialBoard
        currentCardIndicesArr={currentCardIndicesArr}
        onIncreaseScore={props.onIncreaseScore}
        onResetScore={props.onResetScore}
      />
    </div>
  );
}

export default CardGrid;
// export { CardComponent };
