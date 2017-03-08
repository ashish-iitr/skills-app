angular.module('mySkills.route', ['ngRoute'])

/**
 * for difine route
 * @param  $routeProvider {[angular searvice]}
 */
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/skills', {
    templateUrl: 'app/skills/skills.html',
    controller: 'SkillsCtrl'
  });
}]);