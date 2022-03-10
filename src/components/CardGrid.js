// import React, {useState, useEffect} from 'react';
import AllCards from '../card';

function CardGrid() {
  // const [round, setRound] = useState(1);
  // const [currentCards, setCurrentCards] = useState([]);
  // const [clickedCards, setClickedCards] = useState([]);
  // const [remainingCards, setRemainingCards] = useState([]);

  const image = AllCards.getCard('Chosen').getImage();
  return (
    <div>
      <img src={image} alt="A pic" height="200" width="150"></img>
    </div>
  );
}

export default CardGrid;
