import './all.scss'

// CONFIG & RUN
import config from './appconfig'

// DIRECTIVES
import navigationDirective from './directives/navDirective/nav-directive'
import projectsContainer from './directives/codework-directive'
import logoDirective from './directives/logo-directive'
import skillsDirective from './directives/skills-directive.js'

// SERVICES
import navSrv from './services/navSrv'
import projectsSrv from './services/projectsSrv'
import skillsService from './services/skillsSrv'
import underConstructionService from './services/underconstruction'

angular
  .module('joeApp', ['ui.router'])
  .config(config)
  .directive('navigationDirective', navigationDirective)
  .directive('projectsContainer', projectsContainer)
  .directive('logoDirective', logoDirective)
  .directive('skillsDirective', skillsDirective)
  .service('navSrv', navSrv)
  .service('projectsSrv', projectsSrv)
  .service('skillsService', skillsService)
  .service('underConstructionService', underConstructionService)

console.log(`
Made by:
███╗   ███╗██████╗    ██╗  ██╗ █████╗ ███╗   ███╗██████╗ ██╗   ██╗██████╗  ██████╗ ███████╗██████╗
████╗ ████║██╔══██╗   ██║  ██║██╔══██╗████╗ ████║██╔══██╗██║   ██║██╔══██╗██╔════╝ ██╔════╝██╔══██╗
██╔████╔██║██████╔╝   ███████║███████║██╔████╔██║██████╔╝██║   ██║██████╔╝██║  ███╗█████╗  ██████╔╝
██║╚██╔╝██║██╔══██╗   ██╔══██║██╔══██║██║╚██╔╝██║██╔══██╗██║   ██║██╔══██╗██║   ██║██╔══╝  ██╔══██╗
██║ ╚═╝ ██║██║  ██║██╗██║  ██║██║  ██║██║ ╚═╝ ██║██████╔╝╚██████╔╝██║  ██║╚██████╔╝███████╗██║  ██║
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═════╝  ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝
`)
console.log(`

Last updated:
${new Date('February 10 2015')}
`)
