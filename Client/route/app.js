var app = angular.module('sfApp',['ngRoute','sfApp.schoolfinder']);
app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl : 'views/school.html',
    controller: 'finder'
  })
  .otherwise({redirectTo: '/'});
});


