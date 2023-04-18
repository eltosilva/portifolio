import ImageLibary from '@/App/services/ImageLibrary'
import './Header.css'
import Component from '../Component'

export default class Header extends Component{
  constructor(props) {
    super()

    this.template = `<header class="header-profile">
      <div class="header-left">
        <img src=${ImageLibary.get(props.photo)}>
      </div>
      <div class="header-right">
        <h1>${props.name}</h1>
        <h2>${props.job}</h2>
        <p>${props.phone}</p>
        <p>${props.email}</p>
        <p>${props.location}</p>
      </div>
    </header>`
  }
}