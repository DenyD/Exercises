app.controller("myCtrl", function($scope) {
    $scope.firstName = "Daniel";
    $scope.changeName = function() {
        $scope.firstName = "Set Name";}
    $scope.lastName = "S";
    $scope.count = 3;
    $scope.quantity = 1;
    $scope.price =5;
    $scope.items = [{ name:'shoes', cost:15},
    { name:'t-shirt', cost:5},
    { name: 'cap', cost:5}]
});