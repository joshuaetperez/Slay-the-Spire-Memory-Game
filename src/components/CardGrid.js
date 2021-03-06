import React from 'react';
import AllCards, {
  ClickedCardIndices,
  RemainingCardIndices,
  CurrentCardIndices,
} from '../scripts/card';
import {shuffleArray, setGridLayout} from '../scripts/helper';
import Round from '../scripts/round';
import {v4 as uuidv4} from 'uuid';

const maxScore = AllCards.getArr().length - 1;

// Returns a Card which is made up a character's picture and name
function Card(props) {
  const card = props.card;
  const cardIndex = props.cardIndex;
  const score = props.score;

  function handleClick(e) {
    // If card has already been clicked, the game has been lost
    if (ClickedCardIndices.includesIndex(cardIndex)) {
      props.onGameLoss();
    }
    // Else, increase score, modify index arrays, and check if the game has been won
    else {
      const difficulty = props.difficulty;
      props.onIncreaseScore();
      ClickedCardIndices.insertIndex(cardIndex);
      RemainingCardIndices.removeIndex(cardIndex);
      if (Round.increaseRound(difficulty, score)) {
        CurrentCardIndices.populateArr(difficulty);
      }
      if (score === maxScore) props.onGameWin();
    }
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

// Returns the Cards featured in the current round
function Board(props) {
  const currentCardIndicesArr = CurrentCardIndices.getArr();
  shuffleArray(currentCardIndicesArr);
  const gridClass = setGridLayout(currentCardIndicesArr.length);
  return (
    <div className={gridClass}>
      {currentCardIndicesArr.map((index) => {
        const card = AllCards.getCardByIndex(index);
        return (
          <Card
            card={card}
            score={props.score}
            difficulty={props.difficulty}
            onIncreaseScore={props.onIncreaseScore}
            onResetScore={props.onResetScore}
            onGameWin={props.onGameWin}
            onGameLoss={props.onGameLoss}
            cardIndex={index}
            key={uuidv4()}
          />
        );
      })}
    </div>
  );
}

// Returns the current state of the grid of Cards
function CardGrid(props) {
  return (
    <div className="grid-container">
      <div className="round-text">Round {Round.getRound()}</div>
      <Board
        score={props.score}
        difficulty={props.difficulty}
        onIncreaseScore={props.onIncreaseScore}
        onResetScore={props.onResetScore}
        onGameWin={props.onGameWin}
        onGameLoss={props.onGameLoss}
      />
    </div>
  );
}

export default CardGrid;
