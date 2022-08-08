import { prepareCounter } from './'

testIfFunctionPreparesCounter()

function testIfFunctionPreparesCounter() {
  testIfItCreatesACounter()
  testIfItCreatesACounterUIComponent()
  testIfItShowsTheInitialValue()
  testIfItAddsIncrementEventListener()
  testIfItAddsDecrementEventListener()
  testIfItAddsResetEventListener()
  testIfItAddsChangeEventListener()
}

function testIfItCreatesACounter() {
  Counter.instanceCreated = false

  prepareCounter(Counter, CounterComponent)

  if (Counter.instanceCreated) console.log('Preparation function creates a counter')
  else console.error('Preparation function does not create a counter')
}

function testIfItCreatesACounterUIComponent() {
  CounterComponent.instanceCreated = false

  prepareCounter(Counter, CounterComponent)

  if (CounterComponent.instanceCreated) console.log('Preparation function creates a counter UI component')
  else console.error('Preparation function does not create a counter UI component')
}

function testIfItShowsTheInitialValue() {
  Counter.prototype.value = 33
  CounterComponent.value = null

  prepareCounter(Counter, CounterComponent)

  if (CounterComponent.value == 33) console.log('Preparation function shows the initial value')
  else console.error('Preparation function does not show the initial value')
}

function testIfItAddsIncrementEventListener() {
  CounterComponent.incrementListenerAdded = false

  prepareCounter(Counter, CounterComponent)

  if (CounterComponent.incrementListenerAdded) console.log('Preparation function adds an increment event listener')
}

class Counter {
  constructor() {
    Counter.instanceCreated = true
  }
}

class CounterComponent {
  setValue(value) {
    CounterComponent.value = value
  }
}
