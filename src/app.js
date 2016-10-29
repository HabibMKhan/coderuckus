'use strict';

var appModules = [
            'ngAnimate',
            'ui.bootstrap',
            'ui.router'];

var app = angular.module('myApp', appModules);

function run($rootScope, $state, userService) {
  $state.go('home');
}

app.run(['$rootScope', '$state', 'userService', run]);   
