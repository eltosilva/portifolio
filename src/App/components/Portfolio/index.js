import Component from '../Component'
import './Portfolio.css'

class PropsPortfolio {
  /**@type {string} */ name
  /**@type {string} */ url
}

export default class Portfolio extends Component {

  /**
   * 
   * @param {{portfolio: PropsPortfolio[]}} props 
   * @param  {...Component} children 
   */
  constructor(props, ...children) {
    super(children)
    this.template = `<ul class="portfolio">
      ${props.portfolio.map(item => `<li class="portifolio-item"><a href="${item.url}">${item.name}</a></li>`).join('')}
    </ul>`
  }
}