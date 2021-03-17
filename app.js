const pyramid = require('./pyramid_puzzle.js');
const py = [[2], [3, 4], [4, 5, 6], [7, 8, 9, 10], [11, 12, 13, 14, 15]];
const target = 6720;
console.log(pyramid(py, target));
