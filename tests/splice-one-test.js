const test = require('tape')
const spliceOne = require('./../splice-one/splice-one')

test('should remove value at passed in index', (t) => {
  t.plan(2)
  var arr1 = [1, 3, 5, 2, 4, 6]
  var arr2 = [1, 3, 5, 2, 4, 6]
  t.deepLooseEqual(spliceOne(arr1, 2), [1, 3, 2, 4, 6], 'remove index 2')
  t.deepLooseEqual(spliceOne(arr2, 5), [1 ,3, 5, 2, 4], 'remove last index')
})

test('should add a value at index', (t) => {
  t.plan(2)
  var arr3 = [1, 3, 5, 7]
  var arr4 = [1, 3, 5, 7]

  t.deepLooseEqual(
      spliceOne(arr3, 2, 100), [1, 3, 100, 5, 7], 'should add value'
      )

  t.deepLooseEqual(
      spliceOne(arr4, 4, 100), [1, 3, 5, 7, 100], 'should add value at end'
      )
})

test('should handle errors', (t) => {
  t.plan(2)

  var arr4 = [1, 3, 5, 7]
  var arr5 = [1, 3, 5, 7]
  t.notOk(spliceOne(arr4, 10), 'should return false removing from out of range')
  t.notOk(spliceOne(arr5, 10, 100), 'should return false adding out of range')
})
