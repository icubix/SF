
var app = angular.module('sfApp.schoolListRegister',['sfApp.slFactory','ngCookies']);
//alert("1");
app.controller('SchoolList',function($scope, $rootScope,$cookieStore, schoollistFactory)
{
	
// $cookies.testCookie = 'I\'m a test cookie';
//   var testCookie = $cookies.testCookie;
//     $scope.name = testCookie;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
      $scope.$apply(function(){
        $scope.position = position;
        $scope.schoolForm.Longitude = position.coords.latitude; 
        $scope.schoolForm.Latitude = position.coords.longitude;
      });
    });
  }

   // $scope.GetSignIn = function () {
   	
   // 	//alert($scope.form);
   //   registerFactory.SaveRegister($scope.form).success(function (resultData) {
   //          //$scope.success = resultData;          
   //      }).error(function (errorData) { });
  

   //  };
 // $scope.longitude = 0;
  //$scope.latitude =0;
 // var mysrclat= 0; var mysrclong = 0;
// function getdata(position)
// {
// 	$scope.longitude = position.coords.latitude; 
//     $scope.latitude = position.coords.longitude;
//     $scope.getdata1(position);
// };
 
//     $scope.getdata1 = function(position){
     
// 	$scope.longitude = position.coords.latitude; 
//     $scope.latitude = position.coords.longitude;
//     //alert($scope.latitude)
//     };


//   $scope.locate = function($scope) {
  	
//     if (navigator.geolocation) {
//  //var test = 0;
//     navigator.geolocation.getCurrentPosition(function (position) {
//             //test = position;
//                // mysrclat = position.coords.latitude; 
//                 //mysrclong = position.coords.longitude;
//               //  // alert(mysrclat);
//                 // alert(mysrclong)  ;  
//            //alert(test);
       
// 		getdata(position);
//            //  $scope.longitude = mysrclat;

//       //       $scope.$apply(function(){
// 	     //    $scope.position = position;
// 	     //    alert($scope.position);
// 	     // });
                
              
//         });
        
    
//                  //$scope.longitude =1;
//     }
     
     



//         };
   

  $scope.SaveSchoolInfo = function () {
    //alert("1")
    $scope.schoolForm.ClassGroups = 1;
     $scope.schoolForm.Description = "1sdm";
     schoollistFactory.SaveSchoolInfo($scope.schoolForm).success(function (resultData) {
            //$scope.success = resultData;    
            return resultData;      
        }).error(function (errorData) { 
          console.log(errorData);
        });
  

    };


$scope.editDisplay=false; 
$scope.viewDisplay=false;

$scope.EditSchool=function(resultData) {
alert(resultData.InstituteID);
           // schoollistFactory.GetSchl(res).success(function (resultData) {
            //$scope.data = resultData;

            
             $scope.schoolForm.InstituteName = resultData.InstituteName;
             $scope.schoolForm.PhoneNumber =resultData.PhoneNumber;
             $scope.schoolForm.EmailAddress =resultData.EmailAddress;
             $scope.schoolForm.Website=resultData.Website;
             $scope.schoolForm.NoOfStudents=resultData.NoOfStudents;
             $scope.schoolForm.NoOfTeachers=resultData.NoOfTeachers;
             $scope.schoolForm.SchoolChildrenRatio=resultData.SchoolChildrenRatio;
             $scope.schoolForm.Latitude=resultData.Latitude;
             $scope.schoolForm.Longitude=resultData.Longitude;
             $scope.schoolForm.Street1=resultData.Street1;
             $scope.schoolForm.Street2=resultData.Street2;
             $scope.schoolForm.City=resultData.City;
             $scope.schoolForm.ZipCode=resultData.ZipCode;
             $scope.schoolForm.State=resultData.State;

            $scope.editDisplay=true;
            $scope.viewDisplay=false;
            $scope.listDisplay=false;
        //}).error(function (errorData) { });

};

// $scope.ViewSchool=function(){

// $scope.editDisplay=false;
// $scope.viewDisplay=true;
// $scope.listDisplay=false;

// };

$scope.cancelSchool =function() {
$scope.editDisplay=false;
$scope.viewDisplay=false;
$scope.listDisplay=true;
};

   $scope.schoolListView = function(){
     schoollistFactory.GetSchools().success(function (resultData) {
          //alert("11");
            $scope.data = resultData;
          //  console.log( $scope.data)
            // console.log(resultData);
            //  $scope.schoolForm.InstituteName = resultData.InstituteName;
            //  $scope.schoolForm.PhoneNumber =resultData.PhoneNumber;
            //  $scope.schoolForm.EmailAddress =resultData.EmailAddress;
            //  $scope.schoolForm.Website=resultData.Website;
            //  $scope.schoolForm.NoOfStudents=resultData.NoOfStudents;
            //  $scope.schoolForm.NoOfTeachers=resultData.NoOfTeachers;
            //  $scope.schoolForm.SchoolChildrenRatio=resultData.SchoolChildrenRatio;
            //  $scope.schoolForm.Latitude=resultData.Latitude;
            //  $scope.schoolForm.Longitude=resultData.Longitude;
            //  $scope.schoolForm.Street1=resultData.Street1;
            //  $scope.schoolForm.Street2=resultData.Street2;
            //  $scope.schoolForm.City=resultData.City;
            //  $scope.schoolForm.ZipCode=resultData.ZipCode;
            //  $scope.schoolForm.State=resultData.State;

            $scope.editDisplay=false;
            $scope.viewDisplay=false;
            $scope.listDisplay=true;
        }).error(function (errorData) { });

       };


       $scope.ViewSchool = function(resultData){


           //schoollistFactory.GetSchl(instituteID).success(function (resultData) {
          //alert("11");
            //$scope.data = resultData;
            //console.log( $scope.data)
             $scope.schoolForm.InstituteName = resultData.InstituteName;
             $scope.schoolForm.PhoneNumber =resultData.PhoneNumber;
             $scope.schoolForm.EmailAddress =resultData.EmailAddress;
             $scope.schoolForm.Website=resultData.Website;
             $scope.schoolForm.NoOfStudents=resultData.NoOfStudents;
             $scope.schoolForm.NoOfTeachers=resultData.NoOfTeachers;
             $scope.schoolForm.SchoolChildrenRatio=resultData.SchoolChildrenRatio;
             $scope.schoolForm.Latitude=resultData.Latitude;
             $scope.schoolForm.Longitude=resultData.Longitude;
             $scope.schoolForm.Street1=resultData.Street1;
             $scope.schoolForm.Street2=resultData.Street2;
             $scope.schoolForm.City=resultData.City;
             $scope.schoolForm.ZipCode=resultData.ZipCode;
             $scope.schoolForm.State=resultData.State;

            $scope.editDisplay=false;
            $scope.viewDisplay=true;
            $scope.listDisplay=false;
        //}).error(function (errorData) { });

       };

       //};
// $scope.data = [{
//     schoolName: 'Anacostia Senior High School',
//     info: '1601 16th Street Southeast[1] District of Columbia, DC 20020 United States'
// }, {
//     schoolName: 'John Carroll Catholic High School',
//     info: '300 Lakeshore Pkwy, Birmingham, AL 35209, USA'
// },
// {
//     schoolName: 'Ramsay High Schoo',
//     info: '1800 13th Ave S, Birmingham, AL 35205, USA Phone:+1 205-231-7000'
// },
// {
//     schoolName: 'Mountain Brook High School',
//     info: '33650 Bethune Dr, Mountain Brook, AL 35223, USA'
// },
// {
//     schoolName: 'Huntsville High School',
//     info: '42304 Billie Watkins St SW, Huntsville, AL 35801, USA'
// },
// {
//     schoolName: 'Paul Mitchell The School Birmingham',
//     info: 'Centre at Riverchase Shopping Ctr, 1694 Montgomery Hwy #124, Hoover, AL 35126, USA'
// },
// {
//     schoolName: 'Oxford High School',
//     info: '1 Yellow Jacket Dr, Oxford, AL 36203, USA'
// },
// {
//     schoolName: 'Central High School East Campus',
//     info: '905 15th St, Tuscaloosa, AL 35401, USA'
// },
// {
//     schoolName: 'Brooks High School',
//     info: '4300 US-72, Killen, AL 35645, USA Phone:+1 256-757-2115'
// },
// {
//     schoolName: 'Hoover High School',
//     info: '1000 Buccaneer Dr, Hoover, AL 35244, USA'
// },
// {
//     schoolName: 'Auburn High School',
//     info: '405 S Dean Rd, Auburn, AL 36830, USA'
// }]

   	 


   (function () {
   $scope.listDisplay=true;
   $scope.schoolListView();

   $scope.userId = $cookieStore.get('UserId');
   //alert(userId);
  	     })();




});
