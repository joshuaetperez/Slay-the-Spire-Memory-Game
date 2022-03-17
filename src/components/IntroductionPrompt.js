import React from 'react';
import DifficultyToggle from './DifficultyToggle';

function IntroductionPrompt(props) {
  const promptText =
    'There are two difficulties that can be selected: Normal and Hard. Use the toggle below to select your difficulty.';
  const promptNormalText = (
    <div className="normal-difficulty-prompt-text">
      In Normal difficulty, the number of cards that have to be clicked to
      advance to the next round will start small and will increase in future
      rounds. Cards in the previous rounds will{' '}
      <span className="bold">NOT</span> appear in subsequent rounds.
    </div>
  );
  const promptHardText = (
    <div className="hard-difficulty-prompt-text">
      In Hard difficulty, the number of cards shown each round will always be{' '}
      <span className="bold">10</span>. Cards in the previous rounds{' '}
      <span className="bold">WILL</span> appear in subsequent rounds starting on
      the third round, and the number of such cards will increase in future
      rounds.
    </div>
  );

  function displayPromptDifficultyText() {
    if (props.difficulty === 'Normal') {
      return promptNormalText;
    }
    return promptHardText;
  }

  return (
    <div className="prompt-container">
      <div className="prompt">
        <div className="prompt-text">{promptText}</div>
        <DifficultyToggle
          difficulty={props.difficulty}
          onToggleDifficulty={props.onToggleDifficulty}
        />
        {displayPromptDifficultyText()}
        <button className="play-button" onClick={props.onResetGame}>
          Start Game
        </button>
      </div>
    </div>
  );
}

export default IntroductionPrompt;
