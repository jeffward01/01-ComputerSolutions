var app = angular.module('computer',['ngRoute']).config(
    ['$routeProvider', function($routeProvider){
        $routeProvider.
            when('/main',{
            templateUrl: '../templates/main.html',
            controller: 'MainController'
        });
    }])

    .controller('MainController', [function(){
        console.log("This is the main controller");
        
        
    }]);