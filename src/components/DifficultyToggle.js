import React from 'react';

function DifficultyToggle(props) {
  function displayDifficultyToggle() {
    if (props.difficulty === 'Normal') {
      return (
        <button
          className="material-icons normal-difficulty-toggle"
          onClick={props.onToggleDifficulty}
        >
          toggle_off
        </button>
      );
    }
    return (
      <button
        className="material-icons hard-difficulty-toggle"
        onClick={props.onToggleDifficulty}
      >
        toggle_on
      </button>
    );
  }

  return (
    <div className="toggle-difficulty">
      <span>Normal</span>
      {displayDifficultyToggle()}
      <span>Hard</span>
    </div>
  );
}

export default DifficultyToggle;
