export default function() {

	var projects = [
		{
			title: 'PULP TALENT',
			desc: 'A work in progress',
			siteUrl: 'https://pulptalentagency.herokuapp.com/',
			github: 'https://github.com/Pulp-Talent-Agency/Pulp'
		},
		{
			title: 'YENTE',
			desc: 'This is a personal project that I built during my time at DevMountain Coding Bootcamp in Provo, UT. I was awarded "Best Overall Web App" and this project is now featured on DevMountain\'s website (www.devmounta.in/students).',
			siteUrl: 'http://107.170.210.151/',
			github: 'https://github.com/joseph-tohdjojo/Yente'
		},
		{
			title: 'MY PORTFOLIO PAGE',
			desc: 'This is my portfolio site. Check out the preview. The preview itself is a full functioning website. No <img> tags here. HIRE ME!',
			siteUrl: 'http://joseph-tohdjojo.github.io/',
			github: 'https://github.com/joseph-tohdjojo/joseph-tohdjojo.github.io'
		},
		{
			title: 'Random Donald Trump Quote Generator',
			desc: 'Pretty self-explanatory.',
			siteUrl: 'http://s.codepen.io/mrhamburger/debug/eNwxxw',
			github: 'http://s.codepen.io/mrhamburger/debug/eNwxxw'
		}
	];

	this.getProjects = function() {
		return projects;
	};

}
