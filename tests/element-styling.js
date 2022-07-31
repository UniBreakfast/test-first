runAllTests()

function runAllTests() {
  testCounterStyling()
  testIncreaseButtonStyling()
  testDecreaseButtonStyling()
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

// increase button should be centered above the counter
function testIncreaseButtonStyling() {
  const increaseBtn = document.querySelector('button.btn.increase')
  const { bottom, left, width } = increaseBtn.getBoundingClientRect()
  const right = innerWidth - left - width

  const counterEl = document.querySelector('.counter')
  const { top: counterTop } = counterEl.getBoundingClientRect()

  if (closeEnough(left, right)) console.log('Increase button centered')
  else console.log('HALT! Increase button is not centered!')

  if (bottom < counterTop) console.log('Increase button above counter')
  else console.log('HALT! Increase button is not above counter!')
}

// decrease button should be centered below the counter
function testDecreaseButtonStyling() {
  const decreaseBtn = document.querySelector('button.btn.decrease')
  const { top, left, width } = decreaseBtn.getBoundingClientRect()
  const right = innerWidth - left - width

  const counterEl = document.querySelector('.counter')
  const { bottom: counterBottom } = counterEl.getBoundingClientRect()

  if (closeEnough(left, right)) console.log('Decrease button centered')
  else console.log('HALT! Decrease button is not centered!')

  if (top > counterBottom) console.log('Decrease button below counter')
  else console.log('HALT! Decrease button is not below counter!')
}

// check if two numbers are close enough to be considered equal (difference < 2)
function closeEnough(a, b) {
  return Math.abs(a - b) < 2
}
