const pyramid = (array, target) => {
  result = [];
  const helper = (curFactor, row, col, result) => {
    curFactor = curFactor / array[row][col];
    if (curFactor === 1 && row === array.length - 1) {
      return true;
    } else if (row === array.length - 1) {
      return false;
    }
    if (curFactor % array[row + 1][col] === 0) {
      result.push('L');
      if (!helper(curFactor, row + 1, col, result)) {
        result.pop();
      } else {
        return true;
      }
    }
    if (curFactor % array[row + 1][col + 1] === 0) {
      result.push('R');
      if (!helper(curFactor, row + 1, col + 1, result)) {
        result.pop();
      } else {
        return true;
      }
    }
  };

  helper(target, 0, 0, result);
  return result;
};

module.exports = pyramid;
