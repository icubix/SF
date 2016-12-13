var app = angular.module('sfApp.slFactory',[]);

app.factory('schoollistFactory',function($http){
// GETSCHOOLS = FUNCTION(CALLBACKFN){
	//	$HTTP.GET('HTTP://LOCALHOST:3000').SUCCESS(FUNCTION(DATA)
	//	{
		//	CALLBACKFN(DATA);
		//});
//};
 var serviceurl = 'http://localhost:3000/'
return{

	SaveSchoolInfo: function (data) {
	 	
	 	//alert(data);
            return $http({
                url: serviceurl + 'schoolRoute/AddSchool',
                method: "POST",
              //  data: '=' + encodeURIComponent(JSON.stringify(data)),
               data:data,
            })
        },

        GetSchools : function(){
        
        	var url = serviceurl +'schoolRoute/getSchools';

            return $http.get(url);
        },

        GetSchl: function(data){
        	
        	// return $http({

        	//   url : serviceurl +'schoolRoute/getSchool' 
         //         method: "POST",
         //       data:data,
         //    //return $http.get(url);
         //    })

         var url = serviceurl +'schoolRoute/getSchools/' + data;

            return $http.get(url);
        },

};


});