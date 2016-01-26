var myApp = angular.module('myApp',[]);

myApp.controller('GreetingController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
  myFunction();
}

function myFunction() {
  	alert("Hello, guest!");
  }

]);

