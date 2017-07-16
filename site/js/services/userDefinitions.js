app.factory('userDefinitions', function() {
	console.log('userDefinitions worked...');
	
    var userDefinitions = {};

    userDefinitions.isLoggedIn = false;

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