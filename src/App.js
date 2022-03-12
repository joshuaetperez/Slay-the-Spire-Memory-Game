import React, {useState, useEffect} from 'react';
import CardGrid from './components/CardGrid';
import './styles/style.css';

// Returns previous prop or state
// function usePrevious(value) {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current = value;
//   });
//   return ref.current;
// }

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function handleIncreaseScore() {
    setScore(score + 1);
    if (score >= bestScore) {
      setBestScore(score + 1);
    }
  }

  function handleResetScore() {
    setScore(0);
  }

  function handleResetGame() {}

  function handleGameWin() {}

  function handleGameLoss() {}

  // useEffect(() => {
  //   const prevScore = usePrevious(score);
  //   if (prevScore !== score) {

  //   }
  // });

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
      <div className="main-content">
        <CardGrid
          onIncreaseScore={handleIncreaseScore}
          onResetScore={handleResetScore}
        />
      </div>
    </div>
  );
}

export default App;
