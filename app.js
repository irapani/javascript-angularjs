// declare app module
var app = angular.module('app', ['wj']);

// app controller provides data
app.controller('appCtrl', function appCtrl($scope) {

    // generate some random data
    var Number = '92632,61616'.split(','),
        data = [];
    for (var i = 0; i <= 40; i++) {
        var o = new Object("This is it","Just do it");
        data.push({
            
            sno: i,
            Number: Number[i % Number.length],
            date: new Date(2014, i % 12, i % 28),
            text: o.toString(),
            Alpha: parseInt('0e0', 16)
        });
    }

    // add data array to scope
    $scope.data = data;
});
    