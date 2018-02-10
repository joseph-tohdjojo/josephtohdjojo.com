import joeNav from './joe-nav'

export default function() {
  return {
    restrict: 'E',
    template: joeNav,
    scope: {},
    controller: [
      '$scope',
      '$rootScope',
      'underConstructionService',
      '$window',
      'navSrv',
      function($scope, $rootScope, underConstructionService, $window, navSrv) {
        $scope.navBtns = underConstructionService.views
        $scope.getWindowSize = function() {
          navSrv.getWindowSize($window.innerWidth)
        }
        angular.element($window).bind('resize', function() {
          $scope.getWindowSize()
          $scope.$digest()
        })

        $rootScope.$on('$stateChangeStart', function(
          event,
          toState,
          toParams,
          fromState,
          fromParams
        ) {
          $scope.stateName = toState.name
        })
      },
    ],
    link: function(scope, el, attr) {
      scope.$watch('stateName', function() {
        scope.getWindowSize()
        // angular.element(document.querySelectorAll('.nav-item')).css('display', 'none');
        el.css('height', '10vh')
        var name = scope.stateName
        var body = angular.element(document.querySelectorAll('body'))
        if (name === 'skills' || name === 'devwork') {
          angular
            .element(document.querySelectorAll('.bar'))
            .css('background-color', '#232323')
          body.removeClass('mainBg')
          body.addClass('contrastBg')
          el.removeClass('black-nav')
          el.addClass('white-nav')
        } else {
          angular
            .element(document.querySelectorAll('.bar'))
            .css('background-color', '#fff')
          body.removeClass('contrastBg')
          body.addClass('mainBg')
          el.removeClass('white-nav')
          el.addClass('black-nav')
        }
      })
      scope.toggleNav = function() {
        var display = angular
          .element(document.querySelectorAll('.nav-item'))
          .css('display')
        if (display === 'none') {
          angular
            .element(document.querySelectorAll('.nav-item'))
            .addClass('animated fadeIn')
          angular
            .element(document.querySelectorAll('.nav-item'))
            .css('display', 'list-item')
          el.css('height', '100vh')
        } else {
          angular
            .element(document.querySelectorAll('.nav-item'))
            .css('display', 'none')
          el.css('height', '10vh')
        }
      }
    },
  }
}
