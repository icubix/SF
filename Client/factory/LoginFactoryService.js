
var app = angular.module('sfApp.logFactory',[]);
app.factory('loginFactory',function($http){
// var getSchools = function(callbackFn){
// 		$http.get('http://localhost:3000').success(function(data)
// 		{
// 			callbackFn(data);
// 		});
// };
 var serviceurl = 'http://localhost:3000/'
return{
	// getschools: getSchools
	 SaveLogin: function (data) {
	
	 	//alert(data);
            return $http({
                url: serviceurl +'authRoute/validateLogin',
                method: "POST",
              //  data: '=' + encodeURIComponent(JSON.stringify(data)),
               data: data
            })
        },

};


});