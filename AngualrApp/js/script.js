/**
 * Created by kkc on 3/27/17.
 */
 angular.module('myApp',['ngMessages','ui.router','ngTable'])
     .run(function($rootScope) {
        $rootScope.loginClicked = true;

})

//routing
.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('/login',{
        templateUrl :'view/login.html',
        url :'/login',
            // controller:'loginController',
        })
        .state('home',{
        templateUrl :'view/home.html',
        url :'/home',
        controller:function ($scope) {
            $scope.title= "Home"

        }
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
        .state('register',{
            templateUrl:'view/register.html',
            url:'/register',
            controller:'registerController'
        })
    .state('contact',{
        templateUrl :'view/contact.html',
        url :'/contact'
    })
        .state('customer',{
            templateUrl :'view/customerForm.html',
            url :'/customer'
        })
    .state('logout',{
        templateUrl:'view/login.html',
        url :'/login',
        link:function ($scope) {
            $scope.loginClicked=true;
        }

    });
}]);




