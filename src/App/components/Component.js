export default class Component {
  /**@type {Component[]} */children
  constructor(children) {
    if (children)
      this.children = children
    else
      this.children = []

  }

  render() {
    const FACTORY = document.createElement('div')
    FACTORY.innerHTML = this.template

    let container = FACTORY.querySelector('[container]')
    for (let child of this.children) {
      container.appendChild(child.render())
    }
    return FACTORY.children.item(0)
  }
}