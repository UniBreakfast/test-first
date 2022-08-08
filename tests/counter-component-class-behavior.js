import { CounterComponent } from '../classes/counter-component.js'

testCounterComponent()

function testCounterComponent() {
  testIfComponentRenders()
  testIfComponentAppendsToDOM()
  testIfComponentHasRequiredButtons()
  testIfComponentHasOutputElement()
  testIfComponentShowsProvidedValue()
  testIfComponentSignalsOnIncrementPress()
  testIfComponentSignalsOnDecrementPress()
  testIfComponentSignalsOnResetPress()
}

function testIfComponentRenders() {
  const counter = new CounterComponent()
  const counterEl = counter?.render?.()

  if (counterEl && counterEl == counter.el) console.log('Counter component renders')
  else console.log('HALT! Counter component does not render!')
}

function testIfComponentAppendsToDOM() {
  const counter = new CounterComponent()

  counter.settleAt?.(document.body)
  counter.render()

  if (document.body.contains(counter.el)) console.log('Counter component appends to DOM')
  else console.log('HALT! Counter component does not append to DOM!')

  counter.el?.remove?.()
}

function testIfComponentHasRequiredButtons() {
  const counter = new CounterComponent()
  const counterEl = counter?.render?.()
  const hasIncrementButton = counterEl?.querySelector('button.btn.increment')
  const hasDecrementButton = counterEl?.querySelector('button.btn.decrement')
  const hasResetButton = counterEl?.querySelector('button.btn.reset')
  
  if (hasIncrementButton && hasDecrementButton && hasResetButton) 
    console.log('Counter component has required buttons')
  else console.log('HALT! Counter component does not have all required buttons!')
}

function testIfComponentHasOutputElement() {
  const counter = new CounterComponent()
  const counterEl = counter?.render?.()
  const hasOutputElement = counterEl?.querySelector('.out.counter')
  
  if (hasOutputElement) console.log('Counter component has output element')
  else console.log('HALT! Counter component does not have output element!')
}

function testIfComponentShowsProvidedValue() {
  const counter = new CounterComponent()
  const counterEl = counter?.render?.()
  const outputEl = counterEl?.querySelector('.out.counter')

  counter.setValue?.(10)
  
  if (outputEl?.innerText == '10') console.log('Counter component shows provided value')
  else console.log('HALT! Counter component does not show provided value!')
}

function testIfComponentSignalsOnIncrementPress() {
  const counter = new CounterComponent()
  const counterEl = counter?.render?.()
  const incrementButton = counterEl?.querySelector('button.btn.increment')

  let propEventListenerCalled, addedEventListenerCalled

  counter.onincrement = () => propEventListenerCalled = true
  counter.addEventListener?.('increment', () => addedEventListenerCalled = true)

  incrementButton?.click()
  
  if (propEventListenerCalled && addedEventListenerCalled)
    console.log('Counter component signals on increment press')
  else console.log('HALT! Counter component does not signal on increment press!')
}

function testIfComponentSignalsOnDecrementPress() {
  const counter = new CounterComponent()
  const counterEl = counter?.render?.()
  const decrementButton = counterEl?.querySelector('button.btn.decrement')

  let propEventListenerCalled, addedEventListenerCalled

  counter.ondecrement = () => propEventListenerCalled = true
  counter.addEventListener?.('decrement', () => addedEventListenerCalled = true)

  decrementButton?.click()
  
  if (propEventListenerCalled && addedEventListenerCalled)
    console.log('Counter component signals on decrement press')
  else console.log('HALT! Counter component does not signal on decrement press!')
}

function testIfComponentSignalsOnResetPress() {
  const counter = new CounterComponent()
  const counterEl = counter?.render?.()
  const resetButton = counterEl?.querySelector('button.btn.reset')

  let propEventListenerCalled, addedEventListenerCalled

  counter.onreset = () => propEventListenerCalled = true
  counter.addEventListener?.('reset', () => addedEventListenerCalled = true)

  resetButton?.click()
  
  if (propEventListenerCalled && addedEventListenerCalled)
    console.log('Counter component signals on reset press')
  else console.log('HALT! Counter component does not signal on reset press!')
}
