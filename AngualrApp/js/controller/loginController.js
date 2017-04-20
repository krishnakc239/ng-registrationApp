/**
 * Created by kkc on 3/30/17.
 */
angular.module('myApp').controller('loginController', function ($scope,$state,loginService) {
    // $scope.header = false;
    $scope.formSubmit = function() {
        $scope.loginClicked=false;
        // $scope.header = true;

        if(loginService.login($scope.username, $scope.password)) {
            $state.transitionTo('home');
            $scope.userName=loginService.login();

        } else {
            $scope.error = "Incorrect username/password !";
        }
    };

});
