runAllTests()

function runAllTests() {
  testCounterStyling()
  testIncrementButtonStyling()
  testDecrementButtonStyling()
}

// counter should be at the center of the page
function testCounterStyling() {
  const counterEl = document.querySelector('.counter')
  const { top, left, width, height } = counterEl.getBoundingClientRect()
  const bottom = innerHeight - top - height
  const right = innerWidth - left - width

  if (closeEnough(top, bottom) && closeEnough(left, right)) console.log('Counter centered')
  else console.log('HALT! Counter is not centered!') 
}

// increment button should be centered above the counter
function testIncrementButtonStyling() {
  const incrementBtn = document.querySelector('button.btn.increment')
  const { bottom, left, width } = incrementBtn.getBoundingClientRect()
  const right = innerWidth - left - width

  const counterEl = document.querySelector('.counter')
  const { top: counterTop } = counterEl.getBoundingClientRect()

  if (closeEnough(left, right)) console.log('Increment button centered')
  else console.log('HALT! Increment button is not centered!')

  if (bottom < counterTop) console.log('Increment button above counter')
  else console.log('HALT! Increment button is not above counter!')
}

// decrement button should be centered below the counter
function testDecrementButtonStyling() {
  const decrementBtn = document.querySelector('button.btn.decrement')
  const { top, left, width } = decrementBtn.getBoundingClientRect()
  const right = innerWidth - left - width

  const counterEl = document.querySelector('.counter')
  const { bottom: counterBottom } = counterEl.getBoundingClientRect()

  if (closeEnough(left, right)) console.log('Decrement button centered')
  else console.log('HALT! Decrement button is not centered!')

  if (top > counterBottom) console.log('Decrement button below counter')
  else console.log('HALT! Decrement button is not below counter!')
}

// check if two numbers are close enough to be considered equal (difference < 2)
function closeEnough(a, b) {
  return Math.abs(a - b) < 2
}
