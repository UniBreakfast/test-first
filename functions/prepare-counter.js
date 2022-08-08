export { prepareCounter }

function prepareCounter(Counter, CounterComponent) {
  const counter = new Counter()
  const counterComponent = new CounterComponent()

  counterComponent.setValue(counter.value)
  counterComponent.render()

  counterComponent.addEventListener('increment', () => counter.increment())
  counterComponent.addEventListener('decrement', () => counter.decrement())
  counterComponent.addEventListener('reset', () => counter.reset())

  counter.addEventListener('change', () => counterComponent.setValue(counter.value))

  return counterComponent
}
