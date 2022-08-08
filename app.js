import { Counter } from './classes/counter-class.js'
import { CounterComponent } from './classes/counter-component.js'
import { prepareCounter } from './functions/prepare-counter.js'

const counterComponent = prepareCounter(Counter, CounterComponent)

counterComponent.settleAt(document.body)
