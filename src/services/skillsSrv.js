import aiSvg from './../assets/img/sprite/AI-400H.svg'
import photoshopSvg from './../assets/img/sprite/photoshop-400H.svg'
import htmlSvg from './../assets/img/sprite/HTML5-400H.svg'
import cssSvg from './../assets/img/sprite/CSS3-400H.svg'
import scssSvg from './../assets/img/sprite/Sass-400H.svg'
import bootstrapSvg from './../assets/img/sprite/bootstrap-400H.svg'
import jsSvg from './../assets/img/sprite/JS-400H.svg'
import webpackSvg from './../assets/img/sprite/Webpack-400H.svg'
import gitSvg from './../assets/img/sprite/Git-400H.svg'
import angularSvg from './../assets/img/sprite/Angular-400H.svg'
import reactSvg from './../assets/img/sprite/React-400H.svg'
import gulpSvg from './../assets/img/sprite/Gulp-400H.svg'
import nodeSvg from './../assets/img/sprite/Node-400H.svg'
import mongoSvg from './../assets/img/sprite/MongoDB-400H.svg'

export default function() {
  var skills = [
    {
      name: 'Adobe Illustrator',
      class: 'AI',
      width: 'w1',
      svg: aiSvg,
    },
    {
      name: 'Adobe Photoshop',
      class: 'PS',
      width: 'w1',
      svg: photoshopSvg,
    },
    {
      name: 'HTML5',
      class: 'HTML5',
      width: 'w1',
      svg: htmlSvg,
    },
    {
      name: 'CSS3',
      class: 'CSS3',
      width: 'w1',
      svg: cssSvg,
    },
    {
      name: 'Sass',
      class: 'Sass',
      width: 'w1',
      svg: scssSvg,
    },
    {
      name: 'Bootstrap',
      class: 'Bootstrap',
      width: 'w1',
      svg: bootstrapSvg,
    },
    {
      name: 'JavaScript',
      class: 'JS',
      width: 'w1',
      svg: jsSvg,
    },
    {
      name: 'Webpack',
      class: 'Webpack',
      width: 'w1',
      svg: webpackSvg,
    },
    {
      name: 'Git',
      class: 'Git',
      width: 'w1',
      svg: gitSvg,
    },
    {
      name: 'Angular',
      class: 'Angular',
      width: 'w1',
      svg: angularSvg,
    },
    {
      name: 'React',
      class: 'React',
      width: 'w1',
      svg: reactSvg,
    },
    {
      name: 'Gulp',
      class: 'Gulp',
      width: 'w1',
      svg: gulpSvg,
    },
    {
      name: 'Node',
      class: 'Node',
      width: 'w1',
      svg: nodeSvg,
    },
    {
      name: 'Mongo DB',
      class: 'Mongo',
      width: 'w3',
      svg: mongoSvg,
    },
  ]

  this.getSkills = function() {
    return skills
  }
}
