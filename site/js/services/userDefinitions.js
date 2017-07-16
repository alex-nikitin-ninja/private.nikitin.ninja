app.factory('$$userDefinitions', function($location, $timeout) {
    // console.log('$$userDefinitions worked...');
	// console.log($location);
	
    var userDefinitions = {};
    
    userDefinitions.isLoggedIn = false;

    // $timeout(function(){
    //     userDefinitions.isLoggedIn = true;
    // }, 2500);


    userDefinitions.id = '';
    userDefinitions.name = '';

    userDefinitions.init = function() {
        // $location.url('/index');
    };
    userDefinitions.init();
	
    return userDefinitions;
});