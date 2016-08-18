const test = require('tape')
const sumPath = require('./../highest-sum-path/highest-sum-path')

test('Finds highest path in a matrix', (t) => {
  var matrix = [[0, 1, 0], [-10, 0, 0], [99, 0, 0]]
  var sum = sumPath(matrix).sum
  var path = sumPath(matrix).path
  t.equal(sum, 89, 'should find the highest sum')
  t.equal(path, 'down down right right ', 'should find correct path')
  t.end()
})

test('Finds path that changes directions', (t) => {
  var matrix = [[0, 1, 0], [0, 1, 1], [0, 0, 1]]
  var sum = sumPath(matrix).sum
  var path = sumPath(matrix).path
  t.equal(sum, 4, 'should find the highest sum')
  t.equal(path, 'right down right down ', 'should find correct path')
  t.end()
})

test('Finds highest path starting down ', (t) => {
  var matrix = [[1, 0, 1], [1, 1, 1], [0, 0, 1]]
  var sum = sumPath(matrix).sum
  var path = sumPath(matrix).path
  t.equal(sum, 5, 'should find the highest sum')
  t.equal(path, 'down right right down ', 'should find correct path')
  t.end()
})
