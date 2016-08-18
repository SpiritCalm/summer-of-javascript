
function EventEmitter () {
  this.store = {}
}

EventEmitter.prototype.on = function (eventName, cb) {
  // add event name as key on this.store: concat or create array if not exist
  if (this.store[eventName]) {
    this.store[eventName].push(cb)
  } else {
    this.store[eventName] = [cb]
  }
  return this.store
}

EventEmitter.prototype.trigger = function (eventName, ...args) {
  if (!this.store[eventName]) throw new Error('unrecognized event')
  if (this.store.length < 2) return this.store[eventName](args)

  this.store[eventName].forEach(function (f) {
    f.apply(this,args)
  })
}

module.exports = EventEmitter

