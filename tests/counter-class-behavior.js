import '../classes/event-target.js'
import { Counter } from '../classes/counter-class.js' 

testCounterClass()

function testCounterClass() {
  testIfCounterShowsValue()
  testIfCounterStartsAtZero()
  testIfCounterStartsAtArgValue()
  testIfCounterIncrementsByOne()
  testIfCounterDecrementsByOne()
  testIfCounterStopsAtZero()
  testIfCounterResets()
  testIfCounterGeneratesEventOnIncrement()
  testIfCounterGeneratesEventOnDecrement()
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

// counter should increment by one
function testIfCounterIncrementsByOne() {
  const counter = new Counter()

  counter.increment()

  if (counter.value === 1) console.log('Counter increments by one')
  else console.log('HALT! Counter does not increment by one!')
}

// counter should decrement by one
function testIfCounterDecrementsByOne() {
  const counter = new Counter(5)

  counter.decrement()

  if (counter.value === 4) console.log('Counter decrements by one')
  else console.log('HALT! Counter does not decrement by one!')
}

// counter should stop at zero
function testIfCounterStopsAtZero() {
  const counter = new Counter()

  counter.decrement()

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

// counter should generate event on increment
function testIfCounterGeneratesEventOnIncrement() {
  const counter = new Counter()
  let eventFired = false

  counter.addEventListener('increment', () => eventFired = true)

  counter.increment()

  if (eventFired) console.log('Counter generates event on increment')
  else console.log('HALT! Counter does not generate event on increment!')
}

// counter should generate event on decrement
function testIfCounterGeneratesEventOnDecrement() {
  const counter = new Counter(5)
  let eventFired = false

  counter.addEventListener('decrement', () => eventFired = true)

  counter.decrement()

  if (eventFired) console.log('Counter generates event on decrement')
  else console.log('HALT! Counter does not generate event on decrement!')
}

// counter should generate event on change
function testIfCounterGeneratesEventOnChange() {
  const counter = new Counter()
  let eventFiredCount = 0

  counter.addEventListener('change', () => eventFiredCount++)

  counter.increment()
  counter.decrement()

  if (eventFiredCount == 2) console.log('Counter generates event on change')
  else console.log('HALT! Counter does not generate event on change!')
}
