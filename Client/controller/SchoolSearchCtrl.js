var app = angular.module('sfApp.schoolSrchCtrl',['sfApp.scSearchFactory']);

app.controller('SchoolSearch',function($scope,$rootScope, $location,$cookieStore,schoolSearchFactory)
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
     $rootScope.disPage = false;
     
     if($scope.UserID == undefined )
     {
     
             // $cookieStore.put("Search", "SearchPage");
              //$rootScope.Search = $cookieStore.get("Search");
              $rootScope.UserID = '';
              $rootScope.disPage = true;
     }
     // else
     // {
     //     //$cookieStore.remove("Search");
     //      $rootScope.disPage = false;
     // }
   //alert(userId);
  	     })();

});
