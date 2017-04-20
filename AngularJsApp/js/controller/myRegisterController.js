/**
 * Created by kkc on 4/10/17.
 */
angular.module('myApp').controller('registerController',function ($scope) {
    $scope.address = [
        {
            "countryName":"Nepal",
            "zone":[
                {
                    "Name":"Gandaki",
                    "District":[
                        {
                            "Name":"Kaski",
                            "ID":1
                        },
                        {
                            "Name":"Lamjung",
                            "ID":2
                        },
                        {
                            "Name":"Syanja",
                            "ID":3
                        }
                    ]
                },
                {
                    "Name":"Dhaulagiri",
                    "District":[
                        {
                            "Name":"Manang",
                            "ID":1
                        },
                        {
                            "Name":"Baglung",
                            "ID":2
                        },
                        {
                            "Name":"Mustang",
                            "ID":3
                        }
                    ]
                }
            ]
        },
        {
            "countryName":"India",
            "zone":[
                {
                    "Name":"Panjab",
                    "District":[
                        {
                            "Name":"Rajpur",
                            "ID":1
                        },
                        {
                            "Name":"Kanpur",
                            "ID":2
                        },
                        {
                            "Name":"Jitpur",
                            "ID":3
                        }
                    ]
                },
                {
                    "Name":"Maharastra",
                    "District":[
                        {
                            "Name":"Jaypur",
                            "ID":1
                        },
                        {
                            "Name":"Srinagar",
                            "ID":2
                        },
                        {
                            "Name":"Nagpur",
                            "ID":3
                        }
                    ]
                }
            ]
        }
    ];

    $scope.userTable= function (user) {
        $scope.users=[];
        $scope.showUser= true;
        $scope.users=user;
        $scope.firsName=$scope.users.firsName;
        console.log($scope.users.country)
        console.log($scope.users.zone.Name)
        console.log($scope.users.firstName)
        console.log($scope.users.email)
        console.log($scope.users.date)
        console.log($scope.users.gender)


    }
});


