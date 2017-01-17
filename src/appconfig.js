import homeHtml from './views/home/home-tmpl.html';
import aboutHtml from './views/about/about-tmpl.html';
import devworkHtml from './views/devwork/devwork-tmpl.html';
import designworkHtml from './views/designwork/designwork-tmpl.html';
import skillsHtml from './views/skills/skills-tmpl.html';
import contactHtml from './views/contact/contact-tmpl.html';

config.$inject = [
	'$stateProvider',
	'$urlRouterProvider',
	'$compileProvider'
];


export default function config ($stateProvider, $urlRouterProvider, $compileProvider) {

	$compileProvider.debugInfoEnabled( false );

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			template: homeHtml
		})
		.state('about', {
			url: '/about',
			template: aboutHtml
		})
		.state('devwork', {
			url: '/devwork',
			template: devworkHtml
		})
		.state('designwork', {
			url: '/designwork',
			template: designworkHtml
		})
		.state('skills', {
			url: '/skills',
			template: skillsHtml
		})
		.state('contact', {
			url: '/contact',
			template: contactHtml
		});

}
