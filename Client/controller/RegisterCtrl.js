var app = angular.module('sfApp.schoolRegister',['sfApp.regFactory']);

app.controller('register',function($scope,registerFactory)
{
	//alert("helo");

   $scope.GetSignIn = function () {
   	
   	//alert($scope.form);
     registerFactory.SaveRegister($scope.form).success(function (resultData) {
            //$scope.success = resultData;          
        }).error(function (errorData) { });
  

    };

});
