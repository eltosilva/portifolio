import Component from '../Component'
import './Main.css'

export default class Main extends Component {
  constructor(props, ...children) {
    super(children)
    this.template = `<main class="main-profile" container></main>`
  }
}