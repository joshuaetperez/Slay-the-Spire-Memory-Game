import {importPictures, shuffleArray} from './helper';
import Round from './round';

// images[] contains all the pictures in the picture folder
const images = importPictures();

// Card factory function
const Card = (name) => {
  const getName = () => name;
  const getImage = () => images[name];

  return {getName, getImage};
};

// Module for all Cards
const AllCards = (() => {
  const allCardsArr = [];

  const getArr = () => allCardsArr;
  const getCardByName = (name) => {
    return allCardsArr.find((item) => item.getName() === name);
  };
  const getCardByIndex = (index) => {
    return allCardsArr[index];
  };

  const populateArr = () => {
    for (let name in images) {
      const newCard = Card(name);
      allCardsArr.push(newCard);
    }
  };

  populateArr();
  return {getArr, getCardByName, getCardByIndex};
})();

// Module for managing the indices of all Cards that have already been clicked
const ClickedCardIndices = (() => {
  let clickedCardIndicesArr;

  const getArr = () => clickedCardIndicesArr;
  const insertIndex = (index) => {
    clickedCardIndicesArr.push(index);
  };
  const includesIndex = (index) => clickedCardIndicesArr.includes(index);
  const resetArr = () => {
    clickedCardIndicesArr = [];
  };

  resetArr();
  return {getArr, insertIndex, includesIndex, resetArr};
})();

// Module for managing the indices of all Cards that have not been clicked
const RemainingCardIndices = (() => {
  let remainingCardIndicesArr;

  const getArr = () => remainingCardIndicesArr;
  const removeIndex = (index) => {
    const arrIndex = remainingCardIndicesArr.indexOf(index);
    remainingCardIndicesArr.splice(arrIndex, 1);
  };
  const includesIndex = (index) => remainingCardIndicesArr.includes(index);
  const resetArr = () => {
    remainingCardIndicesArr = [];
    for (let i = 0; i < AllCards.getArr().length; i++) {
      remainingCardIndicesArr[i] = i;
    }
  };

  resetArr();
  return {getArr, removeIndex, includesIndex, resetArr};
})();

// Module for managing the indices of all current Cards on the Board
const CurrentCardIndices = (() => {
  let currentCardIndicesArr;

  const getArr = () => currentCardIndicesArr;

  // Resulting array is NOT shuffled
  const populateArr = (difficulty) => {
    currentCardIndicesArr = [];
    const clickedCardIndicesArr = ClickedCardIndices.getArr().slice();
    const remainingCardIndicesArr = RemainingCardIndices.getArr().slice();

    // On Easy difficulty, currentCardIndicesArr is populated only using the indices from remainingCardIndicesArr, the amount of which varies depending on the round
    // On Hard difficulty, currentCardIndicesArr is populated with a ratio of indices from remainingCardIndicesArr and clickedCardIndicesArr
    const clickedCardAmount = Round.getClickedCardAmount(difficulty);
    const remainingCardAmount = Round.getRemainingCardAmount(difficulty);

    shuffleArray(clickedCardIndicesArr);
    shuffleArray(remainingCardIndicesArr);
    for (let i = 0; i < clickedCardAmount; i++) {
      currentCardIndicesArr.push(clickedCardIndicesArr[i]);
    }
    for (let i = 0; i < remainingCardAmount; i++) {
      currentCardIndicesArr.push(remainingCardIndicesArr[i]);
    }
  };

  populateArr('Normal');
  return {getArr, populateArr};
})();

const resetAllIndexArrays = (difficulty) => {
  ClickedCardIndices.resetArr();
  RemainingCardIndices.resetArr();
  CurrentCardIndices.populateArr(difficulty);
};

export default AllCards;
export {
  ClickedCardIndices,
  RemainingCardIndices,
  CurrentCardIndices,
  resetAllIndexArrays,
};
