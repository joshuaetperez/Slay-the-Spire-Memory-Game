import React from 'react';
import DifficultyToggle from './DifficultyToggle';

function ResultPrompt(props) {
  let promptText;
  if (props.hasWonGame) {
    promptText =
      'You won! You clicked on all unique cards! Click on the button below to start a new game.';
  } else {
    promptText =
      'You lost! You chose a card that you have previously clicked on! Click on the button below to start a new game.';
  }

  return (
    <div className="prompt-container">
      <div className="prompt">
        <div className="prompt-text">{promptText}</div>
        <DifficultyToggle
          difficulty={props.difficulty}
          onToggleDifficulty={props.onToggleDifficulty}
        />
        <button className="play-button" onClick={props.onResetGame}>
          New Game
        </button>
      </div>
    </div>
  );
}

export default ResultPrompt;
