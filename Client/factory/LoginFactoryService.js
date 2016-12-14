
var app = angular.module('sfApp.logFactory',['sfApp.myApp']);
app.factory('loginFactory', function($http,urls){
// var getSchools = function(callbackFn){
// 		$http.get('http://localhost:3000').success(function(data)
// 		{
// 			callbackFn(data);
// 		});
// };

//alert();
//alert(urls.apiUrl);
 //var serviceurl = 'http://localhost:3000/'

return{
	// getschools: getSchools
	 SaveLogin: function (data) {
	
	 	//alert(data);
            return $http({
                url: urls.apiUrl +'authRoute/validateLogin',
                method: "POST",
              //  data: '=' + encodeURIComponent(JSON.stringify(data)),
               data: data
            })
        },

};


});