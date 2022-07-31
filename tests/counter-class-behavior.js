import { Counter } from '../classes/counter-class.js' 

testCounterClass()

function testCounterClass() {
  testIfCounterShowsValue()
  testIfCounterStartsAtZero()
  testIfCounterStartsAtArgValue()
  testIfCounterIncreasesByOne()
  testIfCounterDecreasesByOne()
  testIfCounterStopsAtZero()
  testIfCounterResets()
  testIfCounterGeneratesEventOnIncrease()
  testIfCounterGeneratesEventOnDecrease()
  testIfCounterGeneratesEventOnChange()
}

// counter should have getter 'value', that returns the current value (number)
function testIfCounterShowsValue() {
  const counter = new Counter()

  if (counter.value === 0) console.log('Counter provides value')
  else console.log('HALT! Counter does not provide value!')
}

// counter should start at zero
function testIfCounterStartsAtZero() {
  const counter = new Counter()

  if (counter.value === 0) console.log('Counter starts at zero')
  else console.log('HALT! Counter does not start at zero!')
}

// counter should start at a value passed as an argument
function testIfCounterStartsAtArgValue() {
  const counter = new Counter(10)

  if (counter.value === 10) console.log('Counter starts at 10 if passed 10')
  else console.log('HALT! Counter does not start at 10 if passed 10!')
}

// counter should increase by one
function testIfCounterIncreasesByOne() {
  const counter = new Counter()

  counter.increase()

  if (counter.value === 1) console.log('Counter increases by one')
  else console.log('HALT! Counter does not increase by one!')
}

// counter should decrease by one
function testIfCounterDecreasesByOne() {
  const counter = new Counter(5)

  counter.decrease()

  if (counter.value === 4) console.log('Counter decreases by one')
  else console.log('HALT! Counter does not decrease by one!')
}

// counter should stop at zero
function testIfCounterStopsAtZero() {
  const counter = new Counter()

  counter.decrease()

  if (counter.value === 0) console.log('Counter stops at zero')
  else console.log('HALT! Counter does not stop at zero!')
}

// counter should reset to zero
function testIfCounterResets() {
  const counter = new Counter(3)

  counter.reset()

  if (counter.value === 0) console.log('Counter resets to zero')
  else console.log('HALT! Counter does not reset to zero!')
}
