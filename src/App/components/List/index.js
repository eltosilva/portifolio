import Component from '../Component';
import './List.css'

export default class List extends Component {

  /**
   * @param {{languages: string[]}} props 
   * @param  {...Component} children 
   */
  constructor(props, ...children) {
    super(children)

    this.template = `<ul class="languages">${props.languages.map(language => `<li>${language}</li>`).join('')}</ul>`
  }
}