
/*var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        $scope.message = "Hello Angular!";
      //  $scope.message = "Happy v'day"
    }); */ 

var myApp = angular
    .module("myModule", [])
    .controller("myController", function($scope){
        var employee = {
            firstName: 'uday',
            lastName: 'kumar',
            Gender: 'Male'
        };
            $scope.employee = employee;
    });