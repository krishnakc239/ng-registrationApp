/**
 * Created by kkc on 4/12/17.
 */
angular.module('myApp').controller('testController', function($scope){
    // console.log("sdjhgagsdagsdjagsd");
    $scope.gender = ["Male", "Female", "N/A"];
    $scope.zones = [
        {
            "id": "1",
            "data": [
                {"zone_id": "1", "name": "Kathmandu", "id": "1"},
                {"zone_id": "1","name": "Lalitpur","id": "2"},
                {"zone_id": "1", "name": "Bhaktapur", "id": "3"},
                {"zone_id": "1", "name": "Kabhrepalanchowk","id": "4"
                }, {"zone_id": "1", "name": "Sindhupalchowk", "id": "5"},
                {"zone_id": "1","name": "Dhading","id": "6"},
                {"zone_id": "1", "name": "Rasuwa", "id": "7"},
                {"zone_id": "1", "name": "Nuwakot", "id": "8"}
            ],
            "display": "Bagmati"
        },
        {
            "id": "2",
            "data": [{"zone_id": "2", "name": "Rupandehi", "id": "9"},
                {"zone_id": "2","name": "Nawalparasi","id": "10"},
                {"zone_id": "2", "name": "Gulmi", "id": "11"},
                {"zone_id": "2","name": "Chandrauta", "id": "12"},
                {"zone_id": "2", "name": "Palpa", "id": "13"},
                {"zone_id": "2", "name": "Arghakhachi", "id": "14"}
            ],
            "display": "Lumbini"
        }];
    $scope.showMe = false;
    $scope.getDistrict = function () {
        // $scope.districts = $scope.country.district;
        $scope.showMe = true;

    }
});

