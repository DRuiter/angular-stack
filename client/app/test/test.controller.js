'use strict';

angular.module('angularStackApp')
  .controller('TestCtrl', function ($scope, Conversation, socket) {
  	var cid = '541f572b7775290c25865612';
  	document.getElementById('cid').value = cid;

  	Conversation
  		.get({id: cid})
  		.$promise
  		.then(function (res){
  			$scope.conversation = [res];
  			socket.syncUpdates('conversation', $scope.conversation);
  		}, function (err){
  			console.log(err);
  		})

  	$scope.$on('$destroy', function (){
  		socket.unsyncUpdates('conversation');
  	})

  	angular.element(document.getElementById('send')).on('click', sendMessage);
  	angular.element(document.getElementById('mute')).on('click', muteMessage);
  	angular.element(document.getElementById('addban')).on('click', addBan);
  	angular.element(document.getElementById('removeban')).on('click', removeBan);
  	angular.element(document.getElementById('addmod')).on('click', addMod);
  	angular.element(document.getElementById('removemod')).on('click', removeMod);

  	function muteMessage(){
  		Conversation.muteMessage({
  			id: document.getElementById('cid').value,
  			messageID: document.getElementById('cm').value
  		});
  	}

  	function removeBan(){
  		Conversation.removeBan({
  			id: document.getElementById('cid').value,
  			banID: document.getElementById('cm').value
  		})
  	}

  	function addBan(){
  		Conversation.addBan({
  			id: document.getElementById('cid').value,
  			banID: document.getElementById('cm').value
  		})
  	}

  	function addMod(){
  		Conversation.addMod({
  			id: document.getElementById('cid').value,
  			moderatorID: document.getElementById('cm').value
  		})
  	}

  	function removeMod(){
  		Conversation.removeMod({
  			id: document.getElementById('cid').value,
  			moderatorID: document.getElementById('cm').value
  		})
  	}

  	function sendMessage(){
  		Conversation.addMessage({
  			id: document.getElementById('cid').value, 
  			message: {
  				text: document.getElementById('cm').value
  			}
  		})
  	}
  });
