// write a function balanceIndex that finds and returns the array index where
// the sum of all values to  the left of that index equals the sum of all values
// to the right of that index

function balanceIndex (arr) {
  // initialize the leftSide sum to 0; rightSum will be initialized in loop
  var leftSum = 0
  var rightSum

  // handle edge cases: arr is empty or length 1:
  if (!arr.length) return -1;
  if (arr.length === 1) return 0;

  for (let i = 1; i < arr.length; i++) {
    // accumulate the leftSum on each iteration of the outer loop
    leftSum += arr[i - 1]

    // reset the rightSum on each iteration of the outer loop
    rightSum = 0 

    for (let j = i + 1; j < arr.length; j++) {
      rightSum += arr[j]
    }

    // at the end of inner loop, check if sums are equal
    if (leftSum === rightSum) return i
  }
  // if no balancedIndex, return -1
  return -1
}
// O(n^2) time

// balanceIndex version2
function balanceIndex2 (arr) {
  // create dictionary of index:currentSum for leftSide and rightSide
  var leftSideSums = {}
  var rightSideSums = {}
  var leftSum = 0
  var rightSum = 0

  // reduce to build object
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i - 1]) leftSideSums[i] = 0
    else {
      leftSum += arr[i - 1]
      leftSideSums[i] = leftSum
    }
  }

  for (let j = arr.length - 1; j >= 0; j--) {
    if (!arr[j + 1]) rightSideSums[j] = 0
    else {
      rightSum += arr[j + 1]
      rightSideSums[j] = rightSum
    }
  }

  // compare keys; if match return key
  for (let k = 0; k < arr.length; k++) {
    if (rightSideSums[arr[k]] === leftSideSums[arr[k]]) return k
  }

  // no balanced index
  return -1
}

module.exports = balanceIndex2
