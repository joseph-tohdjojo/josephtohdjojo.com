import './../assets/img/sprite/AI-400h.svg';
import './../assets/img/sprite/photoshop-400H.svg';
import './../assets/img/sprite/HTML5-400H.svg';
import './../assets/img/sprite/CSS3-400H.svg';
import './../assets/img/sprite/Sass-400H.svg';
import './../assets/img/sprite/bootstrap-400H.svg';
import './../assets/img/sprite/JS-400H.svg';
import './../assets/img/sprite/Webpack-400H.svg';
import './../assets/img/sprite/Git-400H.svg';
import './../assets/img/sprite/Angular-400H.svg';
import './../assets/img/sprite/React-400H.svg';
import './../assets/img/sprite/Gulp-400H.svg';
import './../assets/img/sprite/Node-400H.svg';
import './../assets/img/sprite/MongoDB-400H.svg';

export default function() {

	var skills = [
		{
			name: 'Adobe Illustrator',
			class: 'AI',
			width: 'w1',
			svg: 'bundle/assets/AI-400h.svg'
		},
		{
			name: 'Adobe Photoshop',
			class: 'PS',
			width: 'w1',
			svg: 'bundle/assets/photoshop-400H.svg'
		},
		{
			name: 'HTML5',
			class: 'HTML5',
			width: 'w1',
			svg: 'bundle/assets/HTML5-400H.svg'
		},
		{
			name: 'CSS3',
			class: 'CSS3',
			width: 'w1',
			svg: 'bundle/assets/CSS3-400H.svg'
		},
		{
			name: 'Sass',
			class: 'Sass',
			width: 'w1',
			svg: 'bundle/assets/Sass-400H.svg'
		},
		{
			name: 'Bootstrap',
			class: 'Bootstrap',
			width: 'w1',
			svg: 'bundle/assets/bootstrap-400H.svg'
		},
		{
			name: 'JavaScript',
			class: 'JS',
			width: 'w1',
			svg: 'bundle/assets/JS-400H.svg'
		},
		{
			name: 'Webpack',
			class: 'Webpack',
			width: 'w1',
			svg: 'bundle/assets/Webpack-400H.svg'
		},
		{
			name: 'Git',
			class: 'Git',
			width: 'w1',
			svg: 'bundle/assets/Git-400H.svg'
		},
		{
			name: 'Angular',
			class: 'Angular',
			width: 'w1',
			svg: 'bundle/assets/Angular-400H.svg'
		},
		{
			name: 'React',
			class: 'React',
			width: 'w1',
			svg: 'bundle/assets/React-400H.svg'
		},
		{
			name: 'Gulp',
			class: 'Gulp',
			width: 'w1',
			svg: 'bundle/assets/Gulp-400H.svg'
		},
		{
			name: 'Node',
			class: 'Node',
			width: 'w1',
			svg: 'bundle/assets/Node-400H.svg'
		},
		{
			name: 'Mongo DB',
			class: 'Mongo',
			width: 'w3',
			svg: 'bundle/assets/MongoDB-400H.svg'
		}
	]

	this.getSkills = function() {
		return skills;
	}

}
