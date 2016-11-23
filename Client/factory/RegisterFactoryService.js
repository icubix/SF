var app = angular.module('sfApp.regFactory',[]);
app.factory('registerFactory',function($http){
// GETSCHOOLS = FUNCTION(CALLBACKFN){
	//	$HTTP.GET('HTTP://LOCALHOST:3000').SUCCESS(FUNCTION(DATA)
	//	{
		//	CALLBACKFN(DATA);
		//});
//};

return{

	 SaveRegister: function (data) {
	 	alert("adf")
	 	//alert(data);
            return $http({
                url: 'HTTP://LOCALHOST:3000',
                method: "POST",
                data: '=' + encodeURIComponent(JSON.stringify(data)),
               
            })
        },

};


});