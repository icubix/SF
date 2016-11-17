var app = angular.module('sfApp.sfFactory',[]);
app.factory('schoolService',function($http){
var getSchools = function(callbackFn){
		$http.get('http://localhost:3000').success(function(data)
		{
			callbackFn(data);
		});
};

return{
	getschools: getSchools
};


});