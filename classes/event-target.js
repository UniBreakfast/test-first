// EventTarget polyfill
global.EventTarget = class EventTarget {
  #listeners = {}

  addEventListener(type, listener) {
    let listeners = this.#listeners[type]

    if (!listeners) this.#listeners[type] = listeners = []

    listeners.push(listener)
  }

  removeEventListener(type, listener) {
    const listeners = this.#listeners[type]
    const i = listeners?.indexOf(listener)

    if (i != -1) listeners?.splice(i, 1)
  }

  dispatchEvent(event) {
    const listeners = this.#listeners[event?.type]

    listeners?.forEach(listener => listener(event))
  }
}

// CustomEvent polyfill
global.CustomEvent = class CustomEvent {
  constructor(type, { detail } = {}) {
    this.type = type
    this.detail = detail
  }
}
