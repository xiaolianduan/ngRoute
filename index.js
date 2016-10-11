        var mymodule=angular.module("myapp",["ngRoute"])
        mymodule.controller("ctrl",["$scope",function($scope){
            console.log("1")
        }]).config(["$routeProvider",function($route){
            $route.when("/",{
                templateUrl:"tpl/index.html"
            }).when("/home",{
                templateUrl:"tpl/home.html"
            }).when("/list/:id",{
                templateUrl:"tpl/list.html",
                controller:"list"
            }).otherwise("/")
        }]).controller("list",["$scope","$http","$routeParams",function($scope,$http,$routeParams){
            $scope.arr=[];
            console.log($routeParams.id)
            $http.get("php/data.php?id="+$routeParams.id).success(function(e){
                $scope.arr=e;
                console.log($scope.arr)
            })
        }])


// var mymodule=angular.module("myapp",["ngRoute"],["$routeProvider",function ($routeProvider) {
//     $routeProvider.when("/",{
//         templateUrl:"tpl/index.html"
//     }).when("/home",{
//         templateUrl:"tpl/home.html"
//     }).when("/list",{
//         templateUrl:"tpl/list.html"
//     }).otherwise("/")
// }])
// mymodule.controller("ctrl",["$scope",function($scope){
//     console.log("1")
// }])