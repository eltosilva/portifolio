import ImageLibary from '@/App/services/ImageLibrary'
import Component from '../Component'
import './Skill.css'

class HardSkill {
  /**@type {string} */ name
  /**@type {string} */ logo
}

class PropsSkill {
  /**@type {HardSkill[]} */ hardSkills
  /**@type {string[]} */ softSkills
}

export default class Skill extends Component {

  /**
   * @param {PropsSkill} props
   * @param {Component[]} children
   */
  constructor(props, ...children) {
    super(children)

    this.template = `<div class="skills">
      <div class="hard-skill">
        ${hardSkillsElements(props.hardSkills)}
      </div>
      <ul class="soft-skill">
        ${props.softSkills.map(skill => `<li>${skill}</li>`).join('')}
      </ul>
    </div>`
  }
}

/**
 * @param {HardSkill[]} hardSkills 
 */
function hardSkillsElements(hardSkills) {
  return hardSkills.map(skill => `<img src="${ImageLibary.get(skill.logo)}" alt="${skill.name}" >`).join('')
}