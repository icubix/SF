var app = angular.module('sfApp.schoolLogin',['sfApp.logFactory']);

app.controller('Login',function($scope, $rootScope,  $cookieStore,loginFactory)
{
	

  $scope.GetLogIn = function () {
   	//alert($scope.form);
  // 	alert($scope.form.UserName);
     loginFactory.SaveLogin($scope.form).success(function (resultData) {
       var UserID ="";
      angular.forEach(resultData, function(value, index) {
      // console.log(key + ': ' + value);
      UserID =value.UserID;
        });

     	
            if(resultData.length > 0)  
            {
              $cookieStore.put("UserId", UserID);
            	location.href = 'http://localhost:8888/SF/Client/#/SchoolList'
            } 
            else
            {
             
               $scope.message = "Invalid User name/ Password";
            }      
        }).error(function (errorData) { });
  

    };
});