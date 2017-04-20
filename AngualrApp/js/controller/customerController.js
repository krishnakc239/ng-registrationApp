/**
 * Created by kkc on 4/11/17.
 */
angular.module('myApp').controller('customerController',function ($scope) {
        $scope.countries = [
            {

                name: "Nepal",
                district: ["Kaski", "Kathandu", "Lalitpur", "Palpa", "Jhapa", "Baglung"]
            },
            {
                name: "India",
                district: ["Mumbai", "New Delhi", "Goa", "Hydarbad", "Jaipur", "Srinagar"]
            }
        ];

    });

