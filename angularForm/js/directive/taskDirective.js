/**
 * Created by kkc on 4/20/17.
 */
angular.module('myApp').directive('taskDirective',function () {
    return{
        restrict:'EA',
        templateUrl:'view/task.html',
        controller:'taskController'

    }
})
