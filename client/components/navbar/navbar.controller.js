'use strict';

angular.module('angularStackApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.show = function (item){
      switch(item.show){
        case 'user':
          return $scope.isLoggedIn();
        break;

        case 'admin':
          return $scope.isAdmin();
        break;

        default:
          return true;
      }
    };

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
