app.factory('$$userDefinitions', function($timeout) {
	console.log('$$userDefinitions worked...');
	
    var userDefinitions = {};
    
    userDefinitions.isLoggedIn = false;

    $timeout(function(){
        userDefinitions.isLoggedIn = true;
    }, 2500);


    userDefinitions.id = '';
    userDefinitions.name = '';

    // userDefinitions.init = function() {
    // });
	
    // userDefinitions.getName = function() {
    //     console.log('userDefinitions.getName worked...');
    //     return userDefinitions.name;
    // }

    return userDefinitions;
});