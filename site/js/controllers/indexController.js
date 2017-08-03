app.controller('indexController', function($scope, $$userDefinitions) {
    $scope.message = 'This is indexController message';
    
    $scope.userDefinitions = $$userDefinitions;

    // $scope.userDefinitions.logout();

    // console.log($scope.userDefinitions.getName());
});