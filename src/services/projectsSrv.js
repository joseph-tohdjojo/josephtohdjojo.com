import pulpImg from './images/pulp.jpg'
import yenteImg from './images/yente.jpg'
import portfolioImg from './images/portfolio.jpg'
import quoteImg from './images/quote.jpg'

export default function() {
  var projects = [
    {
      title: 'PULP TALENT',
      desc: 'A work in progress',
      img: pulpImg,
      siteUrl: 'https://pulptalentagency.herokuapp.com/',
      github: 'https://github.com/Pulp-Talent-Agency/Pulp',
    },
    {
      title: 'YENTE',
      desc:
        'This is a personal project that I built during my time at DevMountain Coding Bootcamp in Provo, UT. For this project, I decided to clone www.cargocollective.com. I was awarded "Best Overall Web App" and this project is now featured on DevMountain\'s website (www.devmounta.in/students).',
      img: yenteImg,
      siteUrl: 'http://107.170.210.151',
      github: 'https://github.com/joseph-tohdjojo/Yente',
    },
    {
      title: 'MY PORTFOLIO PAGE',
      desc: 'This is my portfolio site and my first AngularJS project.',
      img: portfolioImg,
      siteUrl: 'https://www.josephtohdjojo.com/',
      github: 'https://github.com/joseph-tohdjojo/josephtohdjojo.com',
    },
    {
      title: 'Random Donald Trump Quote Generator',
      desc: 'Pretty self-explanatory.',
      img: quoteImg,
      siteUrl: 'https://s.codepen.io/mrhamburger/debug/eNwxxw',
      github: 'https://s.codepen.io/mrhamburger/debug/eNwxxw',
    },
  ]

  this.getProjects = function() {
    return projects
  }
}
