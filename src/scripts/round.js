// Module for all Cards
// Keep in mind that setScore() is asynchronous so, in reality, the scoreBreakpoints are actually 1 higher than what is stated here
// Ex. Round 2 starts when the score is 10
const Round = (() => {
  let round = 1;
  const scoreBreakpoints = [9, 19, 27, 35, 41, 47, 52];
  const cardAmount = [10, 10, 8, 8, 6, 6, 5, 4];

  const getRound = () => round;
  const increaseRound = (score) => {
    if (scoreBreakpoints.includes(score)) {
      round += 1;
      return true;
    }
    return false;
  };
  const resetRound = () => {
    round = 1;
  };
  const getClickedCardAmount = () => {
    return 10 - cardAmount[round - 1];
  };
  const getRemainingCardAmount = () => {
    return cardAmount[round - 1];
  };

  return {
    getRound,
    increaseRound,
    resetRound,
    getClickedCardAmount,
    getRemainingCardAmount,
  };
})();

export default Round;
