var app = angular.module('sfApp.addSlFactory',[]);

app.factory('addSchoolFactory',function($http){
// GETSCHOOLS = FUNCTION(CALLBACKFN){
	//	$HTTP.GET('HTTP://LOCALHOST:3000').SUCCESS(FUNCTION(DATA)
	//	{
		//	CALLBACKFN(DATA);
		//});
//};
 var serviceurl = 'http://localhost:3000/'
return{

	SaveAddSchool: function (data) {
	 	alert("adf")
	 	//alert(data);
            return $http({
                url: serviceurl + 'schoolRoute/AddSchool',
                method: "POST",
              //  data: '=' + encodeURIComponent(JSON.stringify(data)),
               data:data,
            })
        },

};


});