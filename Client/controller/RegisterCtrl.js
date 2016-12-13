var app = angular.module('sfApp.schoolRegister',['sfApp.regFactory']);

app.controller('register',function($scope,registerFactory)
{
	//alert("helo");
// req.body.FirstName + "','" +
//         req.body.LastName + "','" +
//         req.body.EmailAddress + "','" +
//         req.body.MobileNumber +"'," +
//         req.body.PersonTypeID +","+
//         req.body.isActive +");";
   $scope.GetSignIn = function () {
   
    $scope.myForm.PersonTypeID=1;
   	$scope.myForm.isActive = 1;
    //$scope.myForm.RoleID = 3;
     registerFactory.SaveRegister($scope.myForm).success(function (resultData) {
            //$scope.success = resultData; 
            return resultData;      
        }).error(function (errorData) { 
        	console.log(errorData);
        });
  

    };

    $scope.GetRoles = function () {
  
        registerFactory.GetRoleDetails().success(function (resultData) {
          
            $scope.RoleListData = resultData;
        }).error(function (errorData) { });
    };


(function () {
   $scope.GetRoles();

         })();

});
