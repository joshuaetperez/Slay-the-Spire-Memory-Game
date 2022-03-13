import React, {useState} from 'react';
import CardGrid from './components/CardGrid';
import ResultPrompt from './components/ResultPrompt';
import Round from './scripts/round';
import {resetAllIndexArrays} from './scripts/card';
import './styles/style.css';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  // gameResult can be composed of:
  //  0: Undergoing
  //  1: Won
  //  2: Lost
  const [gameResult, setGameResult] = useState(0);

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

  function handleResetGame() {
    handleSetGameResult(0);
    handleResetScore();
    Round.resetRound();
    resetAllIndexArrays();
  }

  function handleGameWin() {
    handleSetGameResult(1);
  }

  function handleGameLoss() {
    handleSetGameResult(2);
  }

  function displayMainContent() {
    if (gameResult === 0) {
      return (
        <CardGrid
          score={score}
          onIncreaseScore={handleIncreaseScore}
          onResetScore={handleResetScore}
          onGameWin={handleGameWin}
          onGameLoss={handleGameLoss}
        />
      );
    } else if (gameResult === 1) {
      return <ResultPrompt hasWonGame={true} onResetGame={handleResetGame} />;
    }
    return <ResultPrompt hasWonGame={false} onResetGame={handleResetGame} />;
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
