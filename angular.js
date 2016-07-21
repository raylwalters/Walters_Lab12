var app = angular.module("toDo",[]);

app.controller("list", function($scope){
	$scope.chores = ["cut grass", "feed dog", "go shopping"];
	$scope.addChore = function(){
		$scope.chores.push($scope.chore);
		$scope.chore= " ";
	}




});