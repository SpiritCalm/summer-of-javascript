const test = require('tape')
const balanceIndex = require('./../balance-index/balance-index')

test('finds balanced index', (t) => {
  t.plan(4)
  var arr1 = [1, 1, 19, 1, 1]
  var arr2 = [1, 1, 19, 2]
  var arr3 = [9]
  t.equal(balanceIndex(arr1), 2, 'should handle exactly balanced arrays')
  t.equal(balanceIndex(arr2), 2, 'should handle imbalanced arrays')
  t.notEqual(balanceIndex(arr2), -1, 'shouldnt throw wrong answers')
  t.equal(balanceIndex(arr3), 0, 'should handle arr with 1 value')
})
