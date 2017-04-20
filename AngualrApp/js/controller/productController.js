/**
 * Created by kkc on 3/30/17.
 */
angular.module('myApp')
    .controller('productController', function ($scope, $http,$filter, ngTableParams, fetchService){
        $scope.addproduct=false;
        $scope.tableData={};
        $scope.tableData = fetchService.getData();

        $scope.productTable = new ngTableParams({
            page: 1, //show first page
            count: 5 //count per page

        },
        {
            total: $scope.tableData.length,

            getData: function ($defer,params) {
                    //for pagination
                $scope.data = $scope.tableData.slice((params.page() - 1) * params.count(), params.page() * params.count());
                $defer.resolve($scope.data);

            }

        });

        $scope.edit = function (id) {
            for(i in $scope.tableData){
                if($scope.tableData[i].id==id){
                    console.log($scope.tableData[i]+" matched!!!!!!!!")
                    $scope.product= angular.copy($scope.tableData[i]);
                }
            }
        }
        $scope.save= function (product) {
            console.log(product+" id to be saved!!!")
            console.log(product.id+" scope id ")
            for(i in $scope.tableData){
                if($scope.tableData[i].id==product.id){
                    console.log($scope.tableData[i].id+" data going to be saved")
                    $scope.tableData[i].id=product.id;
                    console.log(product.id+" id to besaved")
                    $scope.tableData[i].name=product.name;
                    $scope.tableData[i].price=product.price;
                    $scope.tableData[i].quantity=product.quantity;
                    $scope.product={};

                }
                $scope.product={};
            }
            $scope.product={};
        }
        $scope.add=function (product) {
            $scope.tableData.push(product);
            $scope.product={};

            console.log("product added!!!!!!!!!")


        }
        $scope.delete = function(id) {
        for(i in $scope.tableData){
            if($scope.tableData[i].id==id){
                if(confirm("Are you sure to delete??")){
                    $scope.tableData.splice(i,1);
                    console.log(i+"deleted !!!!!!")
                    $scope.productTable.reload();
                }

            }
        }

        }

        $scope.addProduct=function () {
                $scope.addproduct=true;
            }

    });

