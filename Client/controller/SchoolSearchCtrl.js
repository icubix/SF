var app = angular.module('sfApp.schoolSrchCtrl',['sfApp.scSearchFactory']);

app.controller('SchoolSearch',function($scope,schoolSearchFactory)
{
	//alert("helo");

   // $scope.GetSignIn = function () {
   // 	//alert($scope.form);
   //   registerFactory.SaveRegister($scope.form).success(function (resultData) {
   //          //$scope.success = resultData;          
   //      }).error(function (errorData) { });
  

    //};

     (function () {
  

   $scope.userID = $cookieStore.get('UserID');
   //alert(userId);
  	     })();

});
