runAllTests()

function runAllTests() {
  testCounterPresence()
  testIncrementButtonPresence()
  testDecrementButtonPresence()
}

// it should have a class 'counter' and a value of 0 inside of it
function testCounterPresence() {
  const counterEl = document.querySelector('.counter')

  if (counterEl?.innerText == '0') console.log('Counter present')
  else console.log('HALT! No counter found!') 
}

// it should have classes 'btn' and 'increment'
function testIncrementButtonPresence() {
  const incrementBtn = document.querySelector('button.btn.increment')

  if (incrementBtn) console.log('Increment button present')
  else console.log('HALT! No increment button found!') 
}

// it should have classes 'btn' and 'decrement'
function testDecrementButtonPresence() {
  const decrementBtn = document.querySelector('button.btn.decrement')

  if (decrementBtn) console.log('Decrement button present')
  else console.log('HALT! No decrement button found!') 
}
