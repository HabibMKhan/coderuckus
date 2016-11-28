'use strict';

(function () {

    function villageController($scope, $stateParams) {
        $scope.start = function () {
          $scope.userName = sessionStorage.name;
          $scope.chartype = sessionStorage.chartype;
          $scope.subtype = sessionStorage.subclass;

          $scope.selectedMove = '';
          if ((sessionStorage.power !== undefined) &&
          (sessionStorage.toughness !== undefined) &&
          (sessionStorage.accuracy !== undefined) &&
          (sessionStorage.evasion !== undefined)) {
            $scope.power = sessionStorage.power;
            $scope.toughness = sessionStorage.toughness;
            $scope.accuracy = sessionStorage.accuracy;
            $scope.evasion = sessionStorage.evasion;
          }

          if (sessionStorage.move3 !== undefined) {
            $scope.selectedMove = sessionStorage.move3;
          }

          $scope.imgUrl = '../../img/characters/'+ $scope.chartype + '.svg';
          $scope.enemies = [
            {name: 'orc', toughness: 5, power: 5, accuracy: 5, evasion: 5},
            {name: 'centaur2', toughness: 5, power: 5, accuracy: 5, evasion: 5},
            {name: 'robot', toughness: 5, power: 5, accuracy: 5, evasion: 5},
            {name: 'spaceArmor', toughness: 5, power: 5, accuracy: 5, evasion: 5},
            {name: 'stoneGiant', toughness: 5, power: 5, accuracy: 5, evasion: 5}
          ]

          $scope.enemyList = ['orc', 'centaur2', 'robot', 'spaceArmor', 'stoneGiant'];
          $scope.enemyHide = ['','','','',''];

          $scope.enemiesDefeated = [];
          $scope.enemiesLostTo = [];


          for (var i = 0; i < $scope.enemyList.length; i++) {
            var key = $scope.enemyList[i];
            var val = sessionStorage.getItem(key);
            console.log('val', val);
            if (val === 'Lost to this one') {
              $scope.enemiesLostTo.push($scope.enemyList[i]);
            }
            if (val === 'Defeated this one') {
              $scope.enemiesDefeated.push($scope.enemyList[i]);
            }
          }

          for (var i = 0; i < $scope.enemiesDefeated.length; i++) {
            for (var j = 0; j < $scope.enemyList.length; j++) {
              if ($scope.enemiesDefeated[i] === $scope.enemyList[j]) {
                console.log('Yoyo', $scope.enemyList[j]);
                $scope.enemyHide[j] = 'Hide';
                console.log('enemyHide[j] ', $scope.enemyHide[j]);
              }
            }
          }

          if ($scope.enemiesDefeated.length === $scope.enemies.length) {
            $scope.winCondition = true;
          }

          $scope.enemySet = (e) => {
            console.log('e', e);
            if (e.name !== undefined) {
              sessionStorage.enemyName = e.name;
            }
            console.log('e 2', e);
            console.log('sessionStorage.enemyName', sessionStorage.enemyName)
          };

          $scope.resetGame = () => {
            sessionStorage.chartype = '';
            sessionStorage.power = 1;
            sessionStorage.toughness = 1;
            sessionStorage.accuracy = 1;
            sessionStorage.evasion = 1;
            sessionStorage.chartype = 'defaultChartype';
            sessionStorage.subclass = 'defaultSubclass';
            sessionStorage.move3 = '';
            sessionStorage.move3index = '';
            sessionStorage.enemiesDefeated = [];
            sessionStorage.enemiesLostTo = [];
            sessionStorage.enemyName = '';
            sessionStorage.centaur2 = '';
            sessionStorage.orc = '';
            sessionStorage.robot = '';
            sessionStorage.spaceArmor = '';
            sessionStorage.stoneGiant = '';

            console.log('sessionStorage', sessionStorage);
          }
        };
        $scope.start();

    }

    app.controller('villageController', ['$scope', '$stateParams', villageController]);

})();
