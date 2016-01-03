var app = angular.module('computer',['ngRoute']).config(
    ['$routeProvider', function($routeProvider){
        $routeProvider.
        
        //Main Screen
            when('/main',{
            templateUrl: '../templates/main.html',
            controller: 'MainController'
        }).
        //About Screen
            when('/about',{
            templateUrl: '../templates/about.html',
            controller: 'MainController'
        }).
        //Services Screen
            when('/services',{
            templateUrl: '../templates/services.html',
            controller: 'ServicesController'
        }).
        //Contact Screen
            when('/contact', {
            templateUrl: '../templates/contact.html',
            controller: 'ContactController'
        }).
        
        otherwise({redirectTo:'/main'})
    }])



    //Main Controller
    .controller('MainController', [ '$scope', function($scope){

        }])

    //Services Controller
    .controller('MainController', [ '$scope', function($scope){

        }])

    //Contact Controller
    .controller('MainController', [ '$scope', function($scope){

        }]);