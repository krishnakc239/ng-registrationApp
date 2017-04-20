/**
 * Created by kkc on 3/27/17.
 */
var myApp= angular.module('myApp',['ngMessages','ui.router','ngTable'])
     .run(function($rootScope) {
        $rootScope.loginClicked = true;

});

//routing
myApp.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('/login',{
        templateUrl :'view/login.html',
        url :'/login',
            controller:'loginController',
        })
        .state('home',{
        templateUrl :'view/home.html',
        url :'/home',
        controller:function ($scope) {
            $scope.title= "Home"

        }
    })
        .state('task', {
            templateUrl: 'view/task.html',
            url: '/task'
        })

        .state('home.gallery',{
            parent: 'home',
            templateUrl:'view/image.html',
            url:'/contact'
        })
     .state('about',{
        templateUrl :'view/about.html',
        url :'/about'
    })
    .state('product',{
        templateUrl :'view/product.html',
        url :'/product'
    })
    .state('contact',{
        templateUrl :'view/contact.html',
        url :'/contact'
    })
        .state('customer',{
        templateUrl :'view/registerForm.html',
        url :'/customer'
    })
        .state('array',{
            templateUrl :'view/array.html',
            url :'/array'
        })
    .state('logout',{
        templateUrl:'view/login.html',
        url :'/login',
        link:function ($scope) {
            $scope.loginClicked=true;
        }

    });
}]);




