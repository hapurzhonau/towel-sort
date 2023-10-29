
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let res = [];
  if (!matrix) {
    return [];
  } else {
    matrix.map((el, ind) => {
      if (ind % 2 === 0 || ind === 0) {
        el.map(el2 => res.push(el2))
      } else {
        el.reverse().map(el3 => res.push(el3))
      }
    })
  };
  return res;
}
