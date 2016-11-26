'use strict';

(function () {

    function accountRouter($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/');

        $stateProvider
            .state('battle', {
              url: '/battle',
              views: {
                'header': {
                  templateUrl: 'views/account/header.html',
                  controller: 'headerController'
                },
                'main': {
                  controller: 'battleController',
                  templateUrl: 'views/account/battle.html'
                }
              },
              title: 'Code Ruckus BATTLE!',
            })
            .state('village', {
              url: '/village',
              views: {
                'header': {
                  templateUrl: 'views/account/header.html',
                  controller: 'headerController'
                },
                'main': {
                  controller: 'villageController',
                  templateUrl: 'views/account/village.html'
                }
              },
              title: 'Code Ruckus Village',
            })
            .state('stats', {
              url: '/stats',
              views: {
                'header': {
                  templateUrl: 'views/account/header.html',
                  controller: 'headerController'
                },
                'main': {
                  controller: 'statsController',
                  templateUrl: 'views/account/stats.html'
                }
              },
              title: 'Character Basic Stats',
            })
            .state('edit', {
              url: '/edit',
              views: {
                'header': {
                  templateUrl: 'views/account/header.html',
                  controller: 'headerController'
                },
                'main': {
                  controller: 'editController',
                  templateUrl: 'views/account/edit.html'
                }
              },
              params: {
                chartype: null,
                subclass: null,
                name: null,
                hiddenParam: 'YES'
              },
              title: 'Character Edit Stats',
            })
            .state('char', {
                url: '/char',
                views: {
                    'header': {
                        templateUrl: 'views/account/header.html',
                        controller: 'headerController'
                    },
                    'main': {
                        controller: 'charController',
                        templateUrl: 'views/account/char.html',
                        params: { selectedChar: null }
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
                        templateUrl: 'views/account/header.html',
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
