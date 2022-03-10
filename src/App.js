import React, {useState, useEffect} from 'react';
import CardGrid from './components/CardGrid';
import './styles/style.css';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

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
        {/* <img src={images['Chosen']} alt="A pic" height="200" width="150"></img> */}
        <CardGrid />
      </div>
    </div>
  );
}

export default App;
