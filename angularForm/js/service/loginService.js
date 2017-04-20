/**
 * Created by kkc on 4/3/17.
 */
angular.module('myApp').service('loginService', function () {
    var admin = 'abcd';
    var pass = '123';
    var isAuthenticated = false;

    return {
        login : function(username, password) {

            isAuthenticated = username === admin && password === pass;
            return isAuthenticated;
        },
        isAuthenticated : function() {
            return isAuthenticated;
        }
    };
    return{
        login:function (username) {
            return username
        }
    }

});

