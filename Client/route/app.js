var app = angular.module('sfApp',['ngRoute','sfApp.schoolfinder','sfApp.schoolRegister','sfApp.schoolLogin', 'sfApp.schoolListRegister','sfApp.schoolInfoRegister','sfApp.addschoolctrl']);
app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl : 'views/school.html',
    controller: 'finder'
  })
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
  .otherwise({redirectTo: '/'});
});


