var app = angular.module('sfApp',['ngRoute','sfApp.schoolfinder','sfApp.schoolRegister','sfApp.schoolLogin', 'sfApp.schoolListRegister','sfApp.schoolInfoRegister','sfApp.addschoolctrl']);
app.config(function($routeProvider) {
  $routeProvider
  .when('/Register',{
  	templateUrl:'views/register.html',
  	controller:'register'
  })
  .when('/Login',{
  	templateUrl:'views/Login.html',
  	controller:'Login'
  })
  .when('/SchoolList',{
    templateUrl:'views/SchoolList.html',
    controller:'SchoolList'
  })
  .when('/SchoolInfo',{
    templateUrl:'views/SchoolInfo.html',
    controller:'SchoolInfo'
  })
   .when('/AddSchool',{
    templateUrl:'views/AddSchool.html',
    controller:'AddSchool'
  })
   .when('/',{
    templateUrl:'views/SchoolSearch.html',
    controller:'SchoolSearch'
   })
  .otherwise({redirectTo: '/'});
});


