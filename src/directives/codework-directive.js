import projectHtml from './../views/devwork/project-tmpl.html';

export default function() {
	return {
		restrict: 'E',
		template: projectHtml,
		scope: {},
		controller: function($scope, $sce, projectsSrv) {
			$scope.projects = projectsSrv.getProjects().map(function(item) {
				item.siteUrl = $sce.trustAsResourceUrl(item.siteUrl.toString());
				return item;
			});
		}
	};
};
