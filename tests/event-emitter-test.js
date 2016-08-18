const test = require('tape')
const EventEmitter = require('./../event-emitter/event-emitter')

test('stores events with .on()', (t) => {
  t.plan(2)
  var emitter = new EventEmitter()

  emitter.on('speak', () => { return 'hello' })

  t.ok(emitter.store.speak, 'should store event names')
  t.notOk(emitter.store.shout, 'should return undefined')
})

test('stores multiple events with same name', (t) => {
  t.plan(2)
  var emitter2 = new EventEmitter()
  var count1 = 0
  var count2 = 10

  emitter2.on('count', () => { return count1 += 1})
  emitter2.on('count', () => { return count2 += 10})
  emitter2.on('speak', () => 'hello')

  t.equal(emitter2.store.count.length, 2, 'adds multiple fns at eventName')
  t.equal(emitter2.store.speak.length, 1, 'adds multiple fns at different eventNames')
})

test('triggers multiple events with same name', (t) => {
  t.plan(2)
  var emitter2 = new EventEmitter()
  var count1 = 0
  var count2 = 10

  emitter2.on('count', () => { return count1 += 1 })
  emitter2.on('count', () => { return count2 += 10 })
  emitter2.trigger('count')

  t.equal(count1, 1, 'adds multiple fns at eventName')
  t.equal(count2, 20, 'adds multiple fns at eventName')
})

test('triggers multiple events that accept arguments', (t) => {
  t.plan(2)
  var emitter2 = new EventEmitter()
  var count1 = 0
  var count2 = 10

  emitter2.on('count', (n) => { return count1 += 1 + n })
  emitter2.on('count', (n) => { return count2 += 10 + n })
  emitter2.trigger('count', 4)

  t.equal(count1, 5, 'triggers callback that accepts args')
  t.equal(count2, 24, 'triggers callback that accepts args')
})

test('should trigger events that exist in store', (t) => {
  t.plan(1)
  var emitter3 = new EventEmitter
  var single = 'single'

  emitter3.on('speak', () => single += 's')
  emitter3.trigger("speak")

  t.equal(single, 'singles', 'triggers events')
})

test('shoudl throw error when called with event not in store', (t) => {
  t.plan(1)
  var emitter = new EventEmitter()

  t.throws(() => emitter.trigger('noSuchEvent'), /Error/, 'throws error')
})






