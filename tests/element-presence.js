runAllTests()

function runAllTests() {
  testCounterPresence()
  testIncreaseButtonPresence()
  testDecreaseButtonPresence()
}

// it should have a class 'counter' and a value of 0 inside of it
function testCounterPresence() {
  const counterEl = document.querySelector('.counter')

  if (counterEl?.innerText == '0') console.log('Counter present')
  else console.log('HALT! No counter found!') 
}

// it should have classes 'btn' and 'increase'
function testIncreaseButtonPresence() {
  const increaseBtn = document.querySelector('button.btn.increase')

  if (increaseBtn) console.log('Increase button present')
  else console.log('HALT! No increase button found!') 
}

// it should have classes 'btn' and 'decrease'
function testDecreaseButtonPresence() {
  const decreaseBtn = document.querySelector('button.btn.decrease')

  if (decreaseBtn) console.log('Decrease button present')
  else console.log('HALT! No decrease button found!') 
}
