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
    remainingCardIndicesArr.splice(index, 1);
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

  // Populates currentCardIndicesArr with a ratio of indices from remainingCardIndicesArr and clickedCardIndicesArr
  // Ratio depends on the current round
  // Resulting array is NOT shuffled
  const populateArr = () => {
    currentCardIndicesArr = [];
    const clickedCardIndicesArr = ClickedCardIndices.getArr();
    const remainingCardIndicesArr = RemainingCardIndices.getArr();
    const clickedCardAmount = Round.getClickedCardAmount();
    const remainingCardAmount = Round.getRemainingCardAmount();
    shuffleArray(clickedCardIndicesArr);
    shuffleArray(remainingCardIndicesArr);
    for (let i = 0; i < clickedCardAmount; i++) {
      currentCardIndicesArr.push(clickedCardIndicesArr[i]);
    }
    for (let i = 0; i < remainingCardAmount; i++) {
      currentCardIndicesArr.push(remainingCardIndicesArr[i]);
    }
  };

  populateArr();
  return {getArr, populateArr};
})();

const resetAllIndexArrays = () => {
  ClickedCardIndices.resetArr();
  RemainingCardIndices.resetArr();
  CurrentCardIndices.populateArr();
};

export default AllCards;
export {
  ClickedCardIndices,
  RemainingCardIndices,
  CurrentCardIndices,
  resetAllIndexArrays,
};
