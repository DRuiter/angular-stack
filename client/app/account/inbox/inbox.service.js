'use strict';

angular.module('angularStackApp')
  .factory('Inbox', function ($resource) {
  	return $resource('/api/inboxes/:id/:controller', {
      id: '@_id'
    },
    {
      message: {
        method: 'POST',
        params: {
          id: 'me',
          controller:'message'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      }
	  });
  });
