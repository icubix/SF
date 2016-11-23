
var app = angular.module('sfApp.logFactory',[]);
app.factory('loginFactory',function($http){
// var getSchools = function(callbackFn){
// 		$http.get('http://localhost:3000').success(function(data)
// 		{
// 			callbackFn(data);
// 		});
// };

return{
	// getschools: getSchools
	 SaveLogin: function (data) {
	 	alert("adf11111")
	 	//alert(data);
            return $http({
                url: 'HTTP://LOCALHOST:3000',
                method: "POST",
                data: '=' + encodeURIComponent(JSON.stringify(data)),
               
            })
        },

};


});