import photo from '@/data/imgs/foto_de_rosto.jpeg'
import angular from '@/data/imgs/angular.svg'
import css3 from '@/data/imgs/css3.svg'
import docker from '@/data/imgs/docker.svg'
import github from '@/data/imgs/github.svg'
import html5 from '@/data/imgs/html5.svg'
import java from '@/data/imgs/java.svg'
import javascript from '@/data/imgs/javascript.svg'
import mysql from '@/data/imgs/mysql.svg'
import quarkus from '@/data/imgs/quarkus.svg'
import react from '@/data/imgs/react.svg'
import sass from '@/data/imgs/sass.svg'
import springBoot from '@/data/imgs/spring-boot.svg'
import typescript from '@/data/imgs/typescript.svg'

const images = { photo, angular, css3, docker, github, html5, java, javascript, mysql, quarkus, react, sass, springBoot, typescript }

export default class ImageLibary {
  static get(name) {
    return images[name]
  }
}