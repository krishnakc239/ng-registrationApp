/**
 * Created by kkc on 3/30/17.
 */
angular.module('myApp').controller('loginController', function ($scope,$state,loginService) {

    $scope.formSubmit = function() {

        if(loginService.login($scope.username, $scope.password)) {
            $scope.loginClicked=false;
            // $scope.header = true;
            $state.transitionTo('home');
            $scope.userName=loginService.login();

        } else {
            $scope.error = "Incorrect username/password !";
        }
    };

});
