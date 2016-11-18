var app = angular.module('sfApp',['ngRoute','sfApp.schoolfinder','sfApp.schoolRegister']);
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
  .otherwise({redirectTo: '/'});
});


