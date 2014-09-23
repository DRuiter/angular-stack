'use strict';

angular.module('angularStackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('inbox', {
        url: '/inbox',
        templateUrl: 'app/account/inbox/inbox.html',
        controller: 'InboxCtrl'
      });
  });