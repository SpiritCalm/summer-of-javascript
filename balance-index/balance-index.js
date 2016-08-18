/** write a function balanceIndex that finds and returns the array index where
* the sum of all values to  the left of that index equals the sum of all values
* to the right of that index
*/

/** Approach 1: for each index in array, loop up to current index and sum values; following each
* then loop to end and accumulate sums to right of current index. Compare them.
*/

function balanceIndex (arr) {
  // initialize the leftSide sum to 0; rightSum will be initialized in loop
  var leftSum = 0;
  var rightSum;

  // handle edge cases: array.length 1 ? return 0; empty array? -1
  if (!arr.length) throw new Error('cant do an empty array');
  if (arr.length == 1) return 0;

  // make a for loop with i = 1
  for (let i = 1; i < arr.length; i++) {
    // accumulate the leftSum on each iteration of the outer loop
    leftSum += arr[i];
    // reset the rightSum  to 0 on each iteration of the outer loop
    rightSum = 0;
    // make an inner loop to sum all values to the right of current index
    for (let j = i + 1; j < arr.length; j++) {
        // accumulate rightSum
        rightSum += arr[j]
    }

    // at the end of inner loop, check if sums are equal
    if (leftSum === rightSum) return i; 
  }
  // if no balancedIndex, return -1
  return -1;
}
// O(n^2) time

/** Approach 2: use a dictionary to compare sums to left and right of every
 * index
 */
function balanceIndex2 (arr) {
  // create dictionary of index:currentSum for leftSums and rightSums
  var sumsLeftOfIndex = {}
  var sumsRightOfIndex = {}
  // create variables to hold our accumulated sums
  var leftSum = 0
  var rightSum = 0

  // reduce to build object of { index: sumofValuesToLeft }
  for (let i = 0; i < arr.length; i++) {
    // if first value in array, set sumsLeftOfIndex to 0
    if (!arr[i - 1]) sumsLeftOfIndex[i] = 0;
    else {
      // add value to the left of current index to sum and set to dictionary
      leftSum += arr[i - 1]
      sumsLeftOfIndex[i] = leftSum;
    }
  }

  // reduce right  to build object of right sums
  for (let j = arr.length - 1; j >= 0; j--) {
    // handle last value in array
    if (!arr[j + 1]) sumsRightOfIndex[j] = 0
    else {
      // else: sum current value and set to dictionary
      rightSum += arr[j + 1]
      sumsRightOfIndex[j] = rightSum;
    }
  }

  // loop over keys in object and compare keys; if values match return key
  for (let k = 0; k < arr.length; k++) {
    // if both dictionaries at the same key have the same value, then index is
    // the balanced index
    if (sumsLeftOfIndex[arr[k]] === sumsRightOfIndex[arr[k]]) return arr[k]
  }

  // no balanced index
  return -1;
}

module.exports = balanceIndex
