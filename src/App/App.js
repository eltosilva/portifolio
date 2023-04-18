import Header from './components/Header'
import Main from './components/Main'
import Section from './components/Section'
import Skill from './components/Skill'
import Portfolio from './components/Portfolio'

import './App.css'
import Experience from './components/Experience'
import List from './components/List'

export default class App {

  /**
   * @param {*} props 
   * @param {HTMLElement} container 
   */
  constructor(props, container){
    this.render = function() {
      let children = [
        new Header(props),
        new Main(
          props,
          new Section({key: 'skills', title: 'Skills'}, new Skill(props.skills)),
          new Section({key: 'portfolio', title: 'Portifólio'}, new Portfolio(props)),
          new Section({key: 'experiences', title: 'Experiência Profissional'}, new Experience(props)),
          new Section({key: 'languages', title: 'Idiomas'}, new List(props))
        )
      ]

      for(let child of children) 
        container.appendChild(child.render())
    }
  }

}