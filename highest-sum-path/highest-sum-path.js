'use strict'
/**
 * Given a 2 dimensional array of numbers, start at the top left and moving only right or down finds the path crossing numbers with the greatest total sum. 
Return a path string of 'right' and 'down' representing the moves made from top left to bottom right and a sum representing the total sum.

Example:

var matrix = [
  [6, 15, 25, 18],
  [14, 90, 45, 17],
  [3,  6,  7, 21],
  [13, 46,  7,  1]
]
returns { 'path': 'right, down, right, right, down, down', 'sum': 195 }
*/
function highestSumPath (matrix) {
  var store = []
  var row = 0
  var col = 0
  // get number of rows (equal to the number of sub array in the matrix)
  var rowlen = matrix.length - 1
  var collen = matrix[1].length - 1
  var highest = { sum: 0, path: '' }
  var lastValue = matrix[rowlen][collen]
  // closure lets us use an inner recursive function to find paths
  function makePath(row, col, partialSum, path ) {
    if (row === rowlen && col === collen) {
      return partialSum > highest.sum
        ? highest = {sum: partialSum, path: path}
        : false
    }

    // check right
    if (col < collen) {
      makePath(row, col + 1, partialSum + matrix[row][col], path + ' right')
    }

    // check down
    if (row < rowlen) {
      makePath(row + 1, col, partialSum + matrix[row][col], `${path}down `)
    }
  }

  // start the recursive calls
  makePath(0, 0, lastValue, '')
  return highest
}

module.exports = highestSumPath
