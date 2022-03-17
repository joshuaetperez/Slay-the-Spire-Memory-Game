import React, {useState} from 'react';
import IntroductionPrompt from './components/IntroductionPrompt';
import CardGrid from './components/CardGrid';
import ResultPrompt from './components/ResultPrompt';
import Round from './scripts/round';
import {resetAllIndexArrays} from './scripts/card';
import './styles/style.css';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  // Possible states for gameResult:
  // -1: On Introduction prompt
  //  0: Undergoing
  //  1: Won
  //  2: Lost
  const [gameResult, setGameResult] = useState(-1);

  // Possible states for difficulty:
  // "Normal": Normal
  // "Hard": Hard
  const [difficulty, setDifficulty] = useState('Normal');

  function handleIncreaseScore() {
    if (score === bestScore) {
      setBestScore(score + 1);
    }
    setScore(score + 1);
  }

  function handleResetScore() {
    setScore(0);
  }

  function handleSetGameResult(resultNum) {
    if (resultNum >= 0 && resultNum <= 3) setGameResult(resultNum);
  }

  function handleToggleDifficulty() {
    difficulty === 'Normal' ? setDifficulty('Hard') : setDifficulty('Normal');
  }

  function handleResetGame() {
    handleSetGameResult(0);
    handleResetScore();
    Round.resetRound();
    resetAllIndexArrays(difficulty);
  }

  function handleGameWin() {
    handleSetGameResult(1);
  }

  function handleGameLoss() {
    handleSetGameResult(2);
  }

  function displayMainContent() {
    if (gameResult === -1) {
      return (
        <IntroductionPrompt
          difficulty={difficulty}
          onToggleDifficulty={handleToggleDifficulty}
          onResetGame={handleResetGame}
        />
      );
    } else if (gameResult === 0) {
      return (
        <CardGrid
          score={score}
          difficulty={difficulty}
          onIncreaseScore={handleIncreaseScore}
          onResetScore={handleResetScore}
          onGameWin={handleGameWin}
          onGameLoss={handleGameLoss}
        />
      );
    } else if (gameResult === 1) {
      return (
        <ResultPrompt
          hasWonGame={true}
          difficulty={difficulty}
          onToggleDifficulty={handleToggleDifficulty}
          onResetGame={handleResetGame}
        />
      );
    }
    return (
      <ResultPrompt
        hasWonGame={false}
        difficulty={difficulty}
        onToggleDifficulty={handleToggleDifficulty}
        onResetGame={handleResetGame}
      />
    );
  }

  return (
    <div className="app-wrapper">
      <div className="header">
        <div className="header-left">
          <div className="title">Slay the Spire Memory Game</div>
          <div className="rules">
            Click on cards that you have not previously clicked on before to
            increase your score!
          </div>
        </div>
        <div className="header-right">
          <div className="score">Score: {score}</div>
          <div className="best-score">Best score: {bestScore}</div>
        </div>
      </div>
      <div className="main-content">{displayMainContent()}</div>
    </div>
  );
}

export default App;
