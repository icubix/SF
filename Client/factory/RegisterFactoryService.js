var app = angular.module('sfApp.regFactory',[]);
app.factory('registerFactory',function($http){
// GETSCHOOLS = FUNCTION(CALLBACKFN){
	//	$HTTP.GET('HTTP://LOCALHOST:3000').SUCCESS(FUNCTION(DATA)
	//	{
		//	CALLBACKFN(DATA);
		//});
//};
var serviceurl = 'http://localhost:3000/'
return{

	 SaveRegister: function (data) {
	 	alert("adf")
	 	//alert(data);
            return $http({
                url: serviceurl +'authRoute/register',
                method: "POST",
               // data: '=' + encodeURIComponent(JSON.stringify(data)),
               data: data,
               
            })
        },

        GetRoleDetails : function(){
        	var url = serviceurl +'authRoute/getRoles';

            return $http.get(url);
        },
};


});