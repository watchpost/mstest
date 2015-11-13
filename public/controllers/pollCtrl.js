app.controller('pollCtrl', ['$scope', '$routeParams', 'pollService', function ($scope, $routeParams, pollService) {

	$scope.poll = {
		title: "Loading...",
		options: []
	};

	$scope.loadPoll = function(pollName){
		pollService.Load(pollName, function(poll){
			$scope.processPoll(poll);
		});
	}

	$scope.vote = function(option){
		pollService.Vote($scope.poll._id, option.name, function(){
			$scope.poll.total++;
			option.votes++;
			$scope.processPoll($scope.poll);
		});
	}

	$scope.processPoll = function(poll){
		// sets the scope value, finds most voted, and calculates %
		$scope.poll = poll;

		var objMostVotes = null;

		angular.forEach(poll.options, function(option, key) {
			if(objMostVotes == null || option.votes > objMostVotes.votes){
				objMostVotes = option;
			}
			option.mostVotes = false;
			option.percent = Math.round(option.votes / poll.total * 100);
		});

		objMostVotes.mostVotes = true;
	}

	$scope.loadPoll($routeParams.id)

}]);