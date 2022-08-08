export { CounterComponent }

class CounterComponent extends EventTarget {
  #parentEl = undefined
  #el = undefined
  #value = ''
  #onincrement = null
  #ondecrement = null
  #onreset = null

  #handle = eventName => () => {
    const event = new CustomEvent(eventName)

    this.dispatchEvent(event)

    eval(`this.#on${eventName}`)?.(event)
  }

  settleAt(el) {
    this.#parentEl = el

    if (this.#el) this.#parentEl.append(this.#el)
  }

  render() {
    if (!this.#el) {
      this.#el = document.createElement('div')
      this.#el.className = 'counter container'
    }

    if (this.#parentEl) this.#parentEl.append(this.#el)

    this.#el.innerHTML = `
      <button class="btn increment"></button>
      <output class="out counter">${this.#value}</output>
      <button class="btn decrement"></button>
      <button class="btn reset"></button>
    `

    this.#addEventListeners()

    return this.#el
  }

  setValue(value) {
    this.#value = value

    this.#el?.querySelector('.out.counter')?.replaceChildren(value)
  }

  get el() {
    return this.#el
  }

  #addEventListeners() {
    this.#el?.querySelector('.btn.increment')?.addEventListener('click', this.#handle('increment'))
    this.#el?.querySelector('.btn.decrement')?.addEventListener('click', this.#handle('decrement'))
    this.#el?.querySelector('.btn.reset')?.addEventListener('click', this.#handle('reset'))
  }

  get onincrement() {
    return this.#onincrement
  }

  set onincrement(fn) {
    if (typeof fn == 'function') this.#onincrement = fn
    else this.#onincrement = null
  }

  get ondecrement() {
    return this.#ondecrement
  }

  set ondecrement(fn) {
    if (typeof fn == 'function') this.#ondecrement = fn
    else this.#ondecrement = null
  }

  get onreset() {
    return this.#onreset
  }

  set onreset(fn) {
    if (typeof fn == 'function') this.#onreset = fn
    else this.#onreset = null
  }
}
