// STYLES
import './all.scss';

// IMAGES
import './assets/img/background-grid.png';

// CONFIG & RUN
import config from './appconfig.js';

// DIRECTIVES
import navigationDirective from './directives/navDirective/nav-directive.js';
import projectsContainer from './directives/codework-directive.js';
import logoDirective from './directives/logo-directive.js';
import skillsDirective from './directives/skills-directive.js';

// SERVICES
import navSrv from './services/navSrv.js';
import projectsSrv from './services/projectsSrv.js';
import skillsService from './services/skillsSrv.js';
import underConstructionService from './services/underconstruction.js';

angular.module('joeApp', [
	'ui.router'
])
	.config(config)
	.directive('navigationDirective', navigationDirective)
	.directive('projectsContainer', projectsContainer)
	.directive('logoDirective', logoDirective)
	.directive('skillsDirective', skillsDirective)
	.service('navSrv', navSrv)
	.service('projectsSrv', projectsSrv)
	.service('skillsService', skillsService)
	.service('underConstructionService', underConstructionService);
