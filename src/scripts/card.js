import {importPictures, shuffleArray} from './helper';

// images[] contains all the pictures in the picture folder
const images = importPictures();

// Card factory function
const Card = (name) => {
  const getName = () => name;
  const getImage = () => images[name];

  return {getName, getImage};
};

// Module for all cards
const AllCards = (() => {
  const allCardsArr = [];

  const getArr = () => allCardsArr;
  const getCardByName = (name) => {
    return allCardsArr.find((item) => item.getName() === name);
  };
  const getCardByIndex = (index) => {
    return allCardsArr[index];
  };

  // Returns an array of the indices of the initial 10 random unique Cards
  const getInitialCardIndices = () => {
    const allCardIndicesArr = [];
    const largestIndex = allCardsArr.length - 1;
    for (let i = 0; i < largestIndex; i++) {
      allCardIndicesArr[i] = i;
    }
    shuffleArray(allCardIndicesArr);
    return allCardIndicesArr.slice(0, 10);
  };

  const populateArr = () => {
    for (let name in images) {
      const newCard = Card(name);
      allCardsArr.push(newCard);
    }
  };
  populateArr();

  return {getArr, getCardByName, getCardByIndex, getInitialCardIndices};
})();

export default AllCards;
// export {Card};
