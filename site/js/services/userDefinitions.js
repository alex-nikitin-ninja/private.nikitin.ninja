app.factory('$$userDefinitions', function($location, $timeout) {
    var userDefinitions = {
        details: false,
        isLoggedIn: false,
    };

    userDefinitions.login = function() {




        userDefinitions.details = {
            id: '',
            name: '',
        };
        localStorage.userDefinitionsDetails = JSON.stringify(userDefinitions.details);

        userDefinitions.init();
    };

    userDefinitions.logout = function() {
        delete localStorage.userDefinitionsDetails;
        $location.url('/login');
    };
    // userDefinitions.logout();

    userDefinitions.checkLocal = function() {
        if (void 0 !== localStorage.userDefinitionsDetails) {
            userDefinitions.details = JSON.parse(localStorage.userDefinitionsDetails);
            userDefinitions.isLoggedIn = true;
        }
    };

    userDefinitions.init = function() {
        userDefinitions.checkLocal();
        if (userDefinitions.isLoggedIn === true) {
            
            $location.url('/index');

        } else {
            $location.url('/login');
        }
    };
    userDefinitions.init();

    return userDefinitions;
});