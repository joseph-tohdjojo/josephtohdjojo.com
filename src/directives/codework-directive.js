import projectTmpl from './../views/devwork/project-tmpl'

const codeWorkDirective = function() {
  return {
    restrict: 'E',
    template: projectTmpl,
    scope: {},
    controller: [
      '$scope',
      '$sce',
      'projecsSrv',
      function($scope, $sce, projectsSrv) {
        $scope.projects = projectsSrv.getProjects().map(function(item) {
          item.siteUrl = $sce.trustAsResourceUrl(item.siteUrl)
          return item
        })
      },
    ],
  }
}

export default codeWorkDirective
