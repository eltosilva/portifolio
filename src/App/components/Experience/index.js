import Component from '../Component';
import './Experience.css'

class PropsExperience {
  /**@type {string} */ name
  /**@type {string} */ period
  /**@type {string} */ description
}

export default class Experience extends Component {

  /**
   * @param {{experiences: PropsExperience[]}} props 
   * @param  {...Component} children 
   */
  constructor(props, ...children) {
    super(children)

    this.template = `<ul class="experience">
      ${props.experiences
        .map(experience => `<li>
          <h3 class="experience-name">${experience.name}</h3>
          <span class="experience-period">${experience.period}</span>
          <p class="experience-description">${experience.description}</p>
        </li>`).join('')}
    </ul>`
  }
}