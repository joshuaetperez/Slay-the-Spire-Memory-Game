// Module for all Cards
// Keep in mind that setScore() is asynchronous so, in reality, the scoreBreakpoints are actually 1 higher than what is stated here
// Ex. Round 2 starts when the score is 7 in Normal and 10 in Hard
const Round = (() => {
  let round = 1;
  const normalScoreBreakpoints = [2, 6, 11, 17, 25, 34, 44];
  const hardScoreBreakpoints = [9, 19, 27, 35, 41, 47, 52];
  const normalRemainingCardAmountArr = [3, 4, 5, 6, 8, 9, 10, 12];
  const hardRemainingCardAmountArr = [10, 10, 8, 8, 6, 6, 5, 4];

  const getRound = () => round;
  const increaseRound = (difficulty, score) => {
    const scoreBreakpoints =
      difficulty === 'Normal' ? normalScoreBreakpoints : hardScoreBreakpoints;
    if (scoreBreakpoints.includes(score)) {
      round += 1;
      return true;
    }
    return false;
  };
  const resetRound = () => {
    round = 1;
  };
  const getClickedCardAmount = (difficulty) => {
    const amount =
      difficulty === 'Normal' ? 0 : 10 - hardRemainingCardAmountArr[round - 1];
    return amount;
  };
  const getRemainingCardAmount = (difficulty) => {
    const amount =
      difficulty === 'Normal'
        ? normalRemainingCardAmountArr[round - 1]
        : hardRemainingCardAmountArr[round - 1];
    return amount;
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
