app.factory('$$userDefinitions', function($timeout) {
	console.log('$$userDefinitions worked...');
	
    var userDefinitions = {};
    
    userDefinitions.isLoggedIn = false;

    // $timeout(function(){
    //     userDefinitions.isLoggedIn = true;
    // }, 2500);


    userDefinitions.id = '';
    userDefinitions.name = '';

    userDefinitions.init = function() {

    };
    userDefinitions.init();
	
    return userDefinitions;
});