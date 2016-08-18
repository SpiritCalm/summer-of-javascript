// write a function spliceOne that takes two arguments, an array and an index,
// and returns the array with the value at that array index removed. If an
// optional third argument is provided, that value should be added at the array
// index.

const spliceOne = (arr, idx, val) => {
  // store arr.length
  var len = arr.length

  if (idx > len) return false

  // if no val arg is passed in, simply remove the value at idx
  if (!val) {
    if (idx < len - 1) {
      for (let i = idx; i < len; i++) {
        arr[i] = arr[i + 1]
      }
    }
    // remove last value
    delete arr[len - 1]

    // update length of array
    len -= 1
  } else {
    // iterate right to left, copy all vals after idx to the right
    for (let i = len; i > idx; i--) {
      arr[i] = arr[i - 1]
    }

    // overwrite arr[idx] with value
    arr[idx] = val
  }
  return arr
}

module.exports = spliceOne

