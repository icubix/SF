// var app = angular.module('sfApp.schoolListRegister',['sfApp.slFactory']);

// app.controller('schoolList',function($scope,schoollistFactory)
// {
// 	alert("sdfsdf");
// 	// alert("sdf");
//  // 	$scope.records = [
//  //        "",
//  //        "",
//  //        "",
//  //        "",
//  //        "",
//  //        "",
//  //        "",
//  //        "",
//  //        "",
//  //         "Brooks High School",
//  //          "Brooks High School",
//  //           "Brooks High School",
//  //    ]
  
// });
var app = angular.module('sfApp.schoolListRegister',[]);
//alert("1");
app.controller('SchoolList',function($scope)
{
	alert("helo");

   // $scope.GetSignIn = function () {
   	
   // 	//alert($scope.form);
   //   registerFactory.SaveRegister($scope.form).success(function (resultData) {
   //          //$scope.success = resultData;          
   //      }).error(function (errorData) { });
  

   //  };

   (function () {

$scope.data = [{
    schoolName: 'Anacostia Senior High School',
    info: '1601 16th Street Southeast[1] District of Columbia, DC 20020 United States'
}, {
    schoolName: 'John Carroll Catholic High School',
    info: '300 Lakeshore Pkwy, Birmingham, AL 35209, USA'
},
{
    schoolName: 'Ramsay High Schoo',
    info: '1800 13th Ave S, Birmingham, AL 35205, USA Phone:+1 205-231-7000'
},
{
    schoolName: 'Mountain Brook High School',
    info: '33650 Bethune Dr, Mountain Brook, AL 35223, USA'
},
{
    schoolName: 'Huntsville High School',
    info: '42304 Billie Watkins St SW, Huntsville, AL 35801, USA'
},
{
    schoolName: 'Paul Mitchell The School Birmingham',
    info: 'Centre at Riverchase Shopping Ctr, 1694 Montgomery Hwy #124, Hoover, AL 35126, USA'
},
{
    schoolName: 'Oxford High School',
    info: '1 Yellow Jacket Dr, Oxford, AL 36203, USA'
},
{
    schoolName: 'Central High School East Campus',
    info: '905 15th St, Tuscaloosa, AL 35401, USA'
},
{
    schoolName: 'Brooks High School',
    info: '4300 US-72, Killen, AL 35645, USA Phone:+1 256-757-2115'
},
{
    schoolName: 'Hoover High School',
    info: '1000 Buccaneer Dr, Hoover, AL 35244, USA'
},
{
    schoolName: 'Auburn High School',
    info: '405 S Dean Rd, Auburn, AL 36830, USA'
}]

	     })();




});
