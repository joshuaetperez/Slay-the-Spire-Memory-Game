import React from 'react';

function ResultPrompt(props) {
  let promptText;
  if (props.hasWonGame) {
    promptText =
      'You won! You clicked on all unique cards! Click on the button below to set up a new game.';
  } else {
    promptText =
      'You Lost! You chose a card that you have previously clicked on! Click on the botton below to set up a new game.';
  }

  return (
    <div className="prompt">
      <div className="prompt-text">{promptText}</div>
      <button className="replay-button">New Game</button>
    </div>
  );
}

export default ResultPrompt;
