/**
 * Created by kkc on 3/30/17.
 */

angular.module('myApp').service('fetchService', function ($http) {
    var data = [
        {"id":1, "name": "Porduct a", "price":1000, "quantity":20},
        {"id":2, "name":"Porduct a", "price":1000, "quantity":20},
        {"id":3, "name":"Porduct a", "price":1000, "quantity":20},
        {"id":4, "name":"Porduct a", "price":1000, "quantity":20},
        {"id":5, "name":"Porduct a", "price":1000, "quantity":20},
        {"id":6, "name":"Porduct a", "price":1000, "quantity":20},
        {"id":7, "name":"Porduct a", "price":1000, "quantity":20},
        {"id":8, "name":"Porduct a", "price":1000, "quantity":20}

    ];
    this.getData = function() {
        return data;
    }
    this.get= function (id) {
        console.log(id+ " from table")
        for(i in data){
            if(data[i].id==id){
                return i
            }else {
                return -1
            }
        }
    }
});

    // this.productItem={};
    // function all()
    // {
    //     return $http.get('product.json').then(function(response)
    //     {
    //        productItem = response.data;
    //         // return data to caller
    //         return response.data;
    //     });
    // }
    // return{
    //     all:all
    // }
    // all();
    // console.log(this.productItem+" list!!!!!!!!!!!!!!!!!!!")
    //
    // this.save = function (product) {
    //     if (product.id == null) {
    //         product.id = pid++;
    //         product.push(product);
    //     }
    //     else {
    //         // var products = new getTableData();
    //         console.log("inside save of serice");
    //         for (i in products) {
    //             if (products[i].id == product.id) {
    //                 products[i] = product;
    //                 console.log(products[i]);
    //             }
    //         }
    //     }
    // }
    //
    // this.get = function (id) {
    //     console.log("inside get method of fetch service!!!!!!!!!!!!!1");
    //     // // console.log(all()+" in get method !!!!!!!!!!");
    //     // for (i in productItem) {
    //     //     if (productItem[i].id == id) {
    //     //         return productItem[i];
    //     //         console.log("list value",productItem[i] +" required product id ");
    //     //     }
    //     // }
    // }
    // this.del = function (id) {
    //
    // }
    //
    //
    //




