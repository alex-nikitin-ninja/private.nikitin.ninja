app.controller('indexController', function($scope, $$userDefinitions) {
    $scope.message = 'This is indexController message';
    
    $scope.userDefinitions = $$userDefinitions;

    // console.log(userDefinitions.getName());
});