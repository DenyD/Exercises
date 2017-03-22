app.controller("personCtrl", function($scope) {
    $scope.firstName = "Daniel";
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    };
    $scope.lastName = "Siwy";
});