const skillsSrv = function() {
  return {
    restrict: 'E',
    template: `
      <div class="{{skill.class}} {{skill.width}}" ng-repeat="skill in skills">
        <img ng-src="{{skill.svg}}" alt="{{skill.name}}"/>
      </div>
    `,
    scope: {},
    controller: function($scope, skillsService) {
      $scope.skills = skillsService.getSkills()
    },
  }
}

export default skillsSrv
