import homeHtml from './views/home/home-tmpl'
import aboutHtml from './views/about/about-tmpl'
import devworkHtml from './views/devwork/devwork-tmpl'
import designworkHtml from './views/designwork/designwork-tmpl'
import skillsHtml from './views/skills/skills-tmpl'
import contactHtml from './views/contact/contact-tmpl'

const config = ($stateProvider, $urlRouterProvider, $compileProvider) => {
  $compileProvider.debugInfoEnabled(false)

  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('home', {
      url: '/',
      template: homeHtml,
    })
    .state('about', {
      url: '/about',
      template: aboutHtml,
    })
    .state('devwork', {
      url: '/devwork',
      template: devworkHtml,
    })
    .state('designwork', {
      url: '/designwork',
      template: designworkHtml,
    })
    .state('skills', {
      url: '/skills',
      template: skillsHtml,
    })
    .state('contact', {
      url: '/contact',
      template: contactHtml,
    })
}

config.$inject = ['$stateProvider', '$urlRouterProvider', '$compileProvider']

export default config
