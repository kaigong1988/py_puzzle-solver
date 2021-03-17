const pyramid = require('./pyramid_puzzle.js');

describe(`#pyramid1`, () => {
  test('should be able take a pyramid with depth of 5', () => {
    const py = [[2], [4, 3], [3, 2, 6], [2, 9, 5, 2], [10, 5, 2, 15, 5]];
    const target = 720;
    expect(pyramid(py, target)[0]).toBe('L');
    expect(pyramid(py, target)[1]).toBe('R');
    expect(pyramid(py, target)[2]).toBe('L');
    expect(pyramid(py, target)[3]).toBe('L');
  });
});

describe(`#pyramid2`, () => {
  test('should return empty array while no path', () => {
    const py = [[2], [4, 3], [3, 2, 6], [2, 9, 5, 2], [10, 5, 2, 15, 5]];
    const target = 1024;
    expect(pyramid(py, target).length).toBe(0);
  });
});

describe(`#pyramid3`, () => {
  test('should return empty array while only 1 depth', () => {
    const py = [[2]];
    const target = 2;
    expect(pyramid(py, target).length).toBe(0);
  });
});

describe(`#pyramid4`, () => {
  test('should only have one step while there are 2 depth', () => {
    const py = [[2], [4, 3]];
    const target = 8;
    expect(pyramid(py, target).length).toBe(1);
    expect(pyramid(py, target)[0]).toBe('L');
  });
});
