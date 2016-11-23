var app = angular.module('sfApp.schoolLogin',['sfApp.logFactory']);

app.controller('Login',function($scope,loginFactory)
{
	alert("helo1122");

  $scope.GetLogIn = function () {
   	//alert($scope.form);
   	alert($scope.form.Email);
     loginFactory.SaveLogin($scope.form).success(function (resultData) {
            //$scope.success = resultData;          
        }).error(function (errorData) { });
  

    };
});