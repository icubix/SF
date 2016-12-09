var app = angular.module('sfApp.schoolRegister',['sfApp.regFactory']);

app.controller('register',function($scope,registerFactory)
{
	//alert("helo");

   $scope.GetSignIn = function () {
   	alert($scope.myForm.RoleID);
    $scope.myForm.PersonTypeID=1;
   	$scope.myForm.isActive = 1;
    $scope.myForm.RoleID = 3;
     registerFactory.SaveRegister($scope.myForm).success(function (resultData) {
            //$scope.success = resultData; 
            alert(resultData.insertId);   
            console.log(resultData.insertId);
            return resultData;      
        }).error(function (errorData) { 
        	console.log(errorData);
        });
  

    };

    $scope.GetRoles = function () {
     // alert("22");
        registerFactory.GetRoleDetails().success(function (resultData) {
          //alert("11");
            $scope.RoleListData = resultData;
        }).error(function (errorData) { });
    };


(function () {
   $scope.GetRoles();

         })();

});
