app.controller('loginController', function($scope, $$userDefinitions) {
    $scope.message = 'This is loginController message';
    $scope.userDefinitions = $$userDefinitions;
    $scope.userDefinitions.init();
});