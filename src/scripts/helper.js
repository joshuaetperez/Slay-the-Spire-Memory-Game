// Require all images in the pictures folder
// The images are mapped to the character name (ex. images['Chosen'])
function importPictures() {
  const r = require.context('../pictures', false);
  const images = {};
  r.keys().forEach((item) => {
    // The characters "./" and ".webp" are removed from the keys of images object
    // The character "_" is replaced with a space
    images[item.replace(/.\/|.webp/g, '').replace(/_/g, ' ')] = r(item);
  });
  return images;
}

// Randomize array in-place using Durstenfeld shuffle algorithm
// Taken from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export {importPictures, shuffleArray};
