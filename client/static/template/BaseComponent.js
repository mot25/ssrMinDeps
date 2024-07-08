export default class BaseComponent {
  element
  subElements ={}

  constructor(props) {
    this.props = props;
    this.element = this.createElement(this.createTemplate())
    this.getSubElements(this.element)
  }

  createElement(template) {
    const div = document.createElement('div')
    div.innerHTML = template
    return div.firstElementChild
  }

  createTemplate() {
    throw new Error('я тут не должен вызываться :)')
    // return `<div>${this.props.title}</div>`
  }

  render(containerEl) {
    containerEl.appendChild(this.element)
  }

  getSubElements(el) {
    const subElements = el.querySelectorAll('[data-el]')

    for (const elementSub of subElements) {
      const name = elementSub.getAttribute('data-el')
      this.subElements[name] = 'elementSub'
    }
  }
}