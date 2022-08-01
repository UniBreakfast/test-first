export { Counter }

class Counter extends EventTarget {
  #value = 0

  constructor(initialValue=0) {
    super()

    this.#value = Math.trunc(initialValue) || 0
  }

  get value() {
    return this.#value
  }

  increment() {
    this.#value++

    this.dispatchEvent(new CustomEvent('increment'))
    this.dispatchEvent(new CustomEvent('change'))
  }

  decrement() {
    if (this.#value === 0) return

    this.#value--

    this.dispatchEvent(new CustomEvent('decrement'))
    this.dispatchEvent(new CustomEvent('change'))
  }

  reset() {
    if (this.#value === 0) return

    this.#value = 0

    this.dispatchEvent(new CustomEvent('change'))
  }
  
}
