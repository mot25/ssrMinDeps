import BaseComponent from "./BaseComponent.js";

export default class CounterComponent extends BaseComponent {
  value = 0;

  constructor(props) {
    super(props);
    this.value = props.defaultValue
    this.createEventListener()
  }

  createTemplate() {
    return `
          <div>
              <button data-el="increment">+</button>
              <input disabled value="${this.value}" />
              <button data-el="decrement">-</button>
          </div>
`
  }

  handleIncrementBtnClick(e) {
    this.value += 1

  }

  handleDecrementBtnClick(e) {
    this.value -= 1

  }

  createEventListener() {
    this.subElements.increment.addEventListener('click', this.handleIncrementBtnClick())
    this.subElements.decrement.addEventListener('click', this.handleDecrementBtnClick())
  }

  destroyEventListener() {
    this.subElements.increment.removeEventListener('click', this.handleIncrementBtnClick())
    this.subElements.decrement.removeEventListener('click', this.handleDecrementBtnClick())
  }

  destroy() {
    this.destroyEventListener()
  }
}