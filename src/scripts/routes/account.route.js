'use strict';

(function () {

    function accountRouter($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/');

        $stateProvider
            .state('char', {
                url: '/char',
                views: {
                    'header': {
                        templateUrl: 'views/account/_header.html',
                        controller: 'headerController'
                    },
                    'main': {
                        controller: 'charController',
                        templateUrl: 'views/account/char.html'
                    }
                },
                cache: false,
                title: 'CR Choose Char',
                loginRequired: false
            })
            .state('home', {
                url: '/',
                views: {
                    'header': {
                        templateUrl: 'views/account/_header.html',
                        controller: 'headerController'
                    },
                    'main': {
                        controller: 'homeController',
                        templateUrl: 'views/account/home.html'
                    }
                },
                cache: false,
                title: 'Code Ruckus',
                loginRequired: false
            });
    }

    app.config(['$stateProvider', '$urlRouterProvider', accountRouter]);

})();
