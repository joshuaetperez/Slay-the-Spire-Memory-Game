import React from 'react';
import DifficultyToggle from './DifficultyToggle';

function ResultPrompt(props) {
  let resultText;
  let promptText;
  if (props.hasWonGame) {
    resultText = 'YOU WON!!!';
    promptText =
      'You clicked on all unique cards! Click on the button below to start a new game.';
  } else {
    resultText = 'YOU LOST!';
    promptText =
      'You chose that card already! Click on the button below to start a new game.';
  }

  return (
    <div className="prompt-container">
      <div className="prompt">
        <div className="result-text">{resultText}</div>
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
