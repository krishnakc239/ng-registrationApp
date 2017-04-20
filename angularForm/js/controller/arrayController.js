/**
 * Created by kkc on 4/12/17.
 */
angular.module('myApp').controller('arrayController', function ($scope) {
    $scope.p1=["Name","Address","Phone","a","b","Display Name","Class","Attendance","Level","Parent's Name","Location","Status","Paid","Total","RollNo","Section","School"];
    $scope.p2=["School","Name","Class","RollNo","Color","DOB","Address","Username","Section"];
    $scope.p3=["Total","Paid","Phone","Display Name","Nationality"];


    $scope.firstMatched=[];
    $scope.nonMatched=[];
    $scope.lastMatched=[];
    $scope.final=[];
    var index;
    $scope.sort= function () {
    //check match from p1 to p2 and store to firstMatched array in order of first priority i.e p2
        for (var i in $scope.p2) {
            for (var j in $scope.p1) {
                if ($scope.p1[j] == $scope.p2[i]) {
                    $scope.firstMatched.push($scope.p1[j]);
                    $scope.final.push($scope.p1[j]);// push the matched vlaues to final array
                   }
            }


        };
        //check match from p1 to p3 and store to lastMatched array
         for (var i in $scope.p3) {
            for (var j in $scope.p1) {
                if ($scope.p1[j] == $scope.p3[i]) {
                    $scope.lastMatched.push($scope.p1[j]);

                }
            }
        };
        //check non matched values from p1 to p2 and store to nonMatched array
        for(var i in $scope.p1){
            var found = false;
            for(var j in $scope.p2){
                if($scope.p1[i] == $scope.p2[j]){
                    found = true;
                    break;
                }
            }
            if(found == false){
                $scope.nonMatched.push($scope.p1[i]);
            }
        };
        //check non matched values from nonMatched array to p3 to find non matched vlaues to p2 and p3 again store to nonMatched array

        for (var i=0; i<$scope.p3.length; i++) {
            index = $scope.nonMatched.indexOf($scope.p3[i]);
            if (index > -1) {
                $scope.nonMatched.splice(index, 1);
            }
        }
        //push the non matched values too to final array
        $scope.final.push($scope.nonMatched);

        //reorder the lastMatched array in reverse order as required
        for (var k=$scope.lastMatched.length-1;k>=0;k--){
            $scope.final.push($scope.lastMatched[k]);
        };

        console.log($scope.p1+" ==original array")
        console.log($scope.p2+" ==first Priority array")
        console.log($scope.p3+" ==Second priority array")
        console.log($scope.firstMatched+" ==firstMatched array i.e values matched from original array to first priority array")
        console.log($scope.lastMatched+" ==lastMatched array i.e values matched from original array to second priority  array")
        console.log($scope.nonMatched+" == nonMatched array i.e unique values not matching to both priorities")
        console.log($scope.final+" ==final array as required in order of first priority+unique values+ last priorities")
    }


})
