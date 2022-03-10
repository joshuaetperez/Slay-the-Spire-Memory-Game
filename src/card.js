// Require all images in the pictures folder
// The images are mapped to the character name (ex. images['Chosen'])
function importAll(r) {
  let images = {};
  r.keys().forEach((item) => {
    // The characters "./" and ".webp" are removed from the keys of images object
    // The character "_" is replaced with a space
    images[item.replace(/.\/|.webp/g, '').replace(/_/g, ' ')] = r(item);
  });
  return images;
}
const images = importAll(require.context('./pictures', false));

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
  const getCard = (name) => {
    return allCardsArr.find((item) => item.getName() === name);
  };

  // Returns an array of the initial 10 random unique Cards
  const getInitialCards = () => {
    const initialCardArr = [];
    const allCardsArrLength = allCardsArr.length;
    while (initialCardArr.length < 10) {
      const index = Math.floor(Math.random() * allCardsArrLength) + 1;
      if (initialCardArr.indexOf(index) === -1)
        initialCardArr.push(allCardsArr[index]);
    }
    return initialCardArr;
  };

  const populateArr = () => {
    for (let name in images) {
      const newCard = Card(name);
      allCardsArr.push(newCard);
    }
  };
  populateArr();

  return {getArr, getCard, getInitialCards};
})();

export default AllCards;
// export {Card};
