angular.module('myApp').controller('registerController', function ($scope, userService) {
// console.log("sdjhgagsdagsdjagsd");
    $scope.editClicked = false;
    $scope.addUserClicked = true;
    $scope.editAddButton=true;
    $scope.userList = false;
    $scope.registerForm = true;
    $scope.zones = [
        {
            "id": "1",
            "data": [
                {
                    "zone_id": "1", "name": "Kathmandu", "id": "1"
                },
                {
                    "zone_id": "1", "name": "Lalitpur", "id": "2"
                },
                {
                    "zone_id": "1", "name": "Bhaktapur", "id": "3"
                },
                {
                    "zone_id": "1", "name": "Kabhrepalanchowk", "id": "4"
                },
                {
                    "zone_id": "1", "name": "Sindhupalchowk", "id": "5"
                },
                {
                    "zone_id": "1", "name": "Dhading", "id": "6"
                },
                {
                    "zone_id": "1", "name": "Rasuwa", "id": "7"
                },
                {
                    "zone_id": "1", "name": "Nuwakot", "id": "8"
                }
            ],

            "display": "Bagmati"
        },
        {
            "id": "2",
            "data": [
                {
                    "zone_id": "2", "name": "Rupandehi", "id": "9"
                },
                {
                    "zone_id": "2", "name": "Nawalparasi", "id": "10"
                },
                {
                    "zone_id": "2", "name": "Gulmi", "id": "11"
                },
                {
                    "zone_id": "2", "name": "Chandrauta", "id": "12"
                },
                {
                    "zone_id": "2", "name": "Palpa", "id": "13"
                },
                {
                    "zone_id": "2", "name": "Arghakhachi", "id": "14"
                }
            ],

            "display": "Lumbini"
        },
        {
            "id": "3",
            "data": [
                {
                    "zone_id": "3", "name": "Kaski", "id": "15"
                },
                {
                    "zone_id": "3", "name": "Syangja", "id": "16"
                },
                {
                    "zone_id": "3", "name": "Parbat", "id": "17"
                },
                {
                    "zone_id": "3", "name": "Gorkha", "id": "18"
                },
                {
                    "zone_id": "3", "name": "Baglung", "id": "19"
                },
                {
                    "zone_id": "3", "name": "Tanahu", "id": "20"
                }
            ],

            "display": "Gandaki"
        }

    ];

    init();

    function init() {
        $scope.users = userService.getUsers();

    }


    $scope.insertUser = function () {
        $scope.addUserClicked = false;
        $scope.userList = true;
        $scope.registerForm = false;

        var firstName = $scope.newUser.firstName;
        var lastName = $scope.newUser.lastName;
        var email = $scope.newUser.email;
        var dob = $scope.newUser.dob;
        var genderSelected = $scope.newUser.genderSelected;
        var zoneSelected = $scope.newUser.zoneSelected;
        var districtSelected = $scope.newUser.districtSelected;
        var tempZoneSelected = $scope.newUser.tempZoneSelected;
        var tempDistrictSelected = $scope.newUser.tempDistrictSelected;

        userService.insertUser(firstName, lastName,
            email, dob, genderSelected, zoneSelected, districtSelected,
            tempZoneSelected, tempDistrictSelected);
        userService.getUsers();
        $scope.newUser={};


    }
    $scope.edit = function (user) {
        $scope.editAddButton=false;
        $scope.editClicked=true;
        $scope.id=false;
        $scope.registerForm = true;

        // $scope.newUser = angular.copy(user);
        $scope.newUser.id=user.id;
        $scope.newUser.districtSelected=user.districtSelected;
        $scope.newUser.firstName=user.firstName;
        $scope.newUser.lastName=user.lastName;
        $scope.newUser.email=user.email;
        $scope.newUser.dob=user.dob;
        $scope.newUser.gender=user.gender;
        $scope.newUser.zoneSelected=user.zoneSelected;
        $scope.newUser.districtSelected=user.districtSelected;
        $scope.newUser.tempZoneSelected=user.tempZoneSelected;
        $scope.newUser.tempDistrictSelected=user.tempDistrictSelected;


        // $scope.newUser= user;

    }
    $scope.save= function () {
        for(i in $scope.users) {
            if ($scope.users[i].id == $scope.newUser.id) {
                console.log("id matched!!!!");
                $scope.users[i] = $scope.newUser;
            } else {
                console.log("id not matched!!!!");
            }
        }
        $scope.newUser={};
        $scope.registerForm=false
        // $scope.users[$scope.newUser.id]= $scope.newUser;


    }

    $scope.deleteUser = function (id) {

        userService.deleteUser(id);
    }


    $scope.addMoreUser = function () {
        $scope.registerForm = true;
        $scope.userList = false;
        $scope.addUserClicked = true;
        $scope.editAddButton=true;
        $scope.editClicked=false;
        $scope.id=false;

    }
});
