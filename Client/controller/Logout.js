var app = angular.module('sfApp.schoolLogout',['sfApp.logFactory']);

app.controller('Logout',function($scope, $rootScope, $location,$cookieStore,loginFactory)
{
	alert('working');
	// $rootScope.UserID = '';
	// $rootScope.UserName = '';
	// $cookieStore.remove("UserID");
	// $cookieStore.remove("UserName");
 //    $location.path('/Login');

});