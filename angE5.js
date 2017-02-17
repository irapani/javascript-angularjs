var myApp = angular
    .module("myModule",[])
    .controller("myController",function($scope){
        var employee = {
            firstName: "uday",
            lastName: "kumar",
            Gender:"Male"
        };
            $scope.employee = employee;
    });
/*myApp.controller("myController",function($scope){
    var employee = {
        firstName:"uday",
        lastName: "kumar",
        Gender: "Male"
    };
        $scope.employee = employee;
});*/

    