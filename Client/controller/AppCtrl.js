var app = angular.module('sfApp.schoolfinder',['sfApp.SchoolService','sfApp.sfFactory']);

app.controller('finder',function($scope,schoolService)
{
	schoolService.getschools(function(data){
		$scope.users = data;
	})

})