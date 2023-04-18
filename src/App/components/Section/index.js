import Component from '../Component'
import './Section.css'

export default class Section extends Component{
  constructor(props, ...children){
    super(children)

    this.template = `<section class="section-collapse">
      <input type="checkbox" class="section-trigger" id="${props.key}">
      <label for="${props.key}" class="section-title">${props.title}</label>
      <div class="section-body" container></div>
    </section>`
  }
}