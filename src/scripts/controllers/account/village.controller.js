'use strict';

(function () {

    function villageController($scope, $stateParams, $state) {
        $scope.start = function () {

          if (sessionStorage.chartype === undefined) {
            $state.go('char');
          } else if (sessionStorage.name === undefined) {
            $state.go('stats');
          } else if (sessionStorage.power === undefined) {
            $state.go('edit');
          }

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

            //2.0 sessionStorage vars
            sessionStorage.move1customName = '';
            sessionStorage.move1damageBoost = '';
            sessionStorage.move1hitChanceBoost = '';
            sessionStorage.move1pointsForPowerUp = '';
            sessionStorage.move1typeForPowerUp = '';
            sessionStorage.move1customName = '';

            sessionStorage.move2customName = '';
            sessionStorage.move2damageBoost = '';
            sessionStorage.move2hitChanceBoost = '';
            sessionStorage.move2pointsForPowerUp = '';
            sessionStorage.move2typeForPowerUp = '';
            sessionStorage.move2customName = '';

            sessionStorage.move3customName = '';
            sessionStorage.move3damageBoost = '';
            sessionStorage.move3hitChanceBoost = '';
            sessionStorage.move3pointsForPowerUp = '';
            sessionStorage.move3typeForPowerUp = '';
            sessionStorage.move3customName = '';

            console.log('sessionStorage', sessionStorage);
          }


          // MOVES Section
            $scope.maxPoints = 5;
            $scope.move1 = {};
            $scope.move2 = {};
            $scope.move3 = {};
            $scope.moves = [];

            $scope.move1.name = sessionStorage.move1Name || 'Move 1';
            $scope.move1.damage = sessionStorage.move1Damage || 0;
            $scope.move1.accuracy = sessionStorage.move1Accuracy || 0;
            $scope.move1.powerUp = sessionStorage.move1PowerUp || "p0";

            $scope.move2.name = sessionStorage.move2Name || 'Move 2';
            $scope.move2.damage = sessionStorage.move2Damage || 0;
            $scope.move2.accuracy = sessionStorage.move2Accuracy || 0;
            $scope.move2.powerUp = sessionStorage.move2PowerUp || "p0";

            $scope.move3.name = sessionStorage.move3Name || 'Move 3';
            $scope.move3.damage = sessionStorage.move3Damage || 0;
            $scope.move3.accuracy = sessionStorage.move3Accuracy || 0;
            $scope.move3.powerUp = sessionStorage.move3PowerUp || "p0";

            $scope.moves.push($scope.move1);
            $scope.moves.push($scope.move2);
            $scope.moves.push($scope.move3);

            $scope.moveSelected = undefined;

          //STAT PRECHECK
          //STAT PRECHECK
          $scope.statPrecheck = () => {
            if (sessionStorage.toughness) {
              $scope.toughness = parseInt(sessionStorage.toughness);
            } else {
              $scope.toughness = 0;
            }
            if (sessionStorage.power) {
              $scope.power = parseInt(sessionStorage.power);
            } else {
              $scope.power = 0;
            }
            if (sessionStorage.evasion) {
              $scope.evasion = parseInt(sessionStorage.evasion);
            } else {
              $scope.evasion = 0;
            }
            if (sessionStorage.accuracy) {
              $scope.accuracy = parseInt(sessionStorage.accuracy);
            } else {
              $scope.accuracy = 0;
            }

            $scope.strength = $scope.maxPoints - $scope.power - $scope.toughness;
            $scope.speed = $scope.maxPoints - $scope.accuracy - $scope.evasion;
            console.log('$scope.maxPoints: typeof, value - ', typeof $scope.maxPoints, $scope.maxPoints);
            console.log('$scope.power: typeof, value - ', typeof $scope.power, $scope.power);
            console.log('$scope.toughness: typeof, value - ', typeof $scope.toughness, $scope.toughness);
            console.log('$scope.speed in STATPRECHECK', $scope.speed);
            console.log('$scope.strength in STATPRECHECK', $scope.strength);

            // TYPE ADJUSTMENTS
            if (sessionStorage.chartype === 'viking') {
              $scope.power +=1;
              $scope.evasion += 2;
              $scope.toughness += 2;
              $scope.accuracy += 2;
            } else if (sessionStorage.chartype === 'blackMage') {
              $scope.power += 3;
              $scope.evasion += 1;
              $scope.toughness += 1;
              $scope.accuracy += 1;
            } else if (sessionStorage.chartype === 'centaur') {
              $scope.toughness += 2;
              $scope.power +=2;
              $scope.evasion += 1;
              $scope.accuracy += 1;
            } else if (sessionStorage.chartype === 'dwarfWarrior') {
              $scope.toughness += 3;
              $scope.power +=1;
              $scope.evasion += 1;
              $scope.accuracy += 1;
            } else if (sessionStorage.chartype === 'elvenArcher') {
              $scope.toughness += 1;
              $scope.power +=2;
              $scope.evasion += 1;
              $scope.accuracy += 3;
            } else if (sessionStorage.chartype === 'wizard') {
              $scope.toughness += 1;
              $scope.power +=1;
              $scope.evasion += 3;
              $scope.accuracy += 2;
            }

          }
          $scope.statPrecheck();
          //MOVE PRECHECK
          $scope.charMoves = [{},{},{}]; //TODO: check sessionStorage if these are set
          let sessionMoveToBeSaved = {}
          let sessionDamageBoost = 0;
          let sessionHitChanceBoost = 0;
          let sessionPointsForPowerUp = 0;
          let sessionTypeForPowerUp = 0;
          $scope.movePrecheck = () => {
            console.log('performing move Precheck');
            if ((sessionStorage.move1customName) && (sessionStorage.move1customName !== '')) {
              sessionDamageBoost = parseInt(sessionStorage.move1damageBoost) || 0;
              sessionHitChanceBoost = parseInt(sessionStorage.move1hitChanceBoost) || 0;
              sessionPointsForPowerUp = parseInt(sessionStorage.move1pointsForPowerUp) || 0;
              sessionTypeForPowerUp = sessionStorage.move1typeForPowerUp || 'unset';
              sessionMoveToBeSaved = {
                damageBoost: sessionDamageBoost,
                hitChanceBoost: sessionHitChanceBoost,
                pointsForPowerUp: sessionPointsForPowerUp,
                typeForPowerUp: sessionTypeForPowerUp,
                customName: sessionStorage.move1customName
              };
              $scope.moves[0].damageBoost = sessionDamageBoost;
              $scope.moves[0].hitChanceBoost = sessionHitChanceBoost;
              $scope.moves[0].pointsForPowerUp = sessionPointsForPowerUp;
              $scope.moves[0].typeForPowerUp = sessionTypeForPowerUp;
              $scope.moves[0].customName = sessionStorage.move1customName;
              console.log('sessionMoveToBeSaved 1', sessionMoveToBeSaved);
              $scope.charMoves[0] = sessionMoveToBeSaved;
            }

            if (sessionStorage.move2customName) {
              sessionDamageBoost = parseInt(sessionStorage.move2damageBoost) || 0;
              sessionHitChanceBoost = parseInt(sessionStorage.move2hitChanceBoost) || 0;
              sessionPointsForPowerUp = parseInt(sessionStorage.move2pointsForPowerUp) || 0;
              sessionTypeForPowerUp = sessionStorage.move2typeForPowerUp || 'unset';
              sessionMoveToBeSaved = {
                damageBoost: sessionDamageBoost,
                hitChanceBoost: sessionHitChanceBoost,
                pointsForPowerUp: sessionPointsForPowerUp,
                typeForPowerUp: sessionTypeForPowerUp,
                customName: sessionStorage.move2customName
              };
              $scope.moves[1].damageBoost = sessionDamageBoost;
              $scope.moves[1].hitChanceBoost = sessionHitChanceBoost;
              $scope.moves[1].pointsForPowerUp = sessionPointsForPowerUp;
              $scope.moves[1].typeForPowerUp = sessionTypeForPowerUp;
              $scope.moves[1].customName = sessionStorage.move2customName;
              console.log('sessionMoveToBeSaved 2', sessionMoveToBeSaved);
              $scope.charMoves[1] = sessionMoveToBeSaved;
            }

            if (sessionStorage.move3customName) {
              sessionDamageBoost = parseInt(sessionStorage.move3damageBoost) || 0;
              sessionHitChanceBoost = parseInt(sessionStorage.move3hitChanceBoost) || 0;
              sessionPointsForPowerUp = parseInt(sessionStorage.move3pointsForPowerUp) || 0;
              sessionTypeForPowerUp = sessionStorage.move3typeForPowerUp || 'unset';
              sessionMoveToBeSaved = {
                damageBoost: sessionDamageBoost,
                hitChanceBoost: sessionHitChanceBoost,
                pointsForPowerUp: sessionPointsForPowerUp,
                typeForPowerUp: sessionTypeForPowerUp,
                customName: sessionStorage.move3customName
              };
              $scope.moves[2].damageBoost = sessionDamageBoost;
              $scope.moves[2].hitChanceBoost = sessionHitChanceBoost;
              $scope.moves[2].pointsForPowerUp = sessionPointsForPowerUp;
              $scope.moves[2].typeForPowerUp = sessionTypeForPowerUp;
              $scope.moves[2].customName = sessionStorage.move3customName;
              console.log('sessionMoveToBeSaved 3', sessionMoveToBeSaved);
              $scope.charMoves[2] = sessionMoveToBeSaved;
            }
            console.log('ending move Precheck');
            console.log('charMoves', $scope.charMoves);
            console.log('charMoves[0]', $scope.charMoves[0]);
            console.log('charMoves[1]', $scope.charMoves[1]);
            console.log('charMoves[2]', $scope.charMoves[2]);
          };
          $scope.movePrecheck();
          if (($scope.power + $scope.toughness) === $scope.maxPoints) {
            $scope.strength = 0;
          }
          if (($scope.evasion + $scope.accuracy) === $scope.maxPoints) {
            $scope.speed = 0;
          }
          console.log('$scope.power after prechecks', $scope.power);
          console.log('$scope.toughness after prechecks', $scope.toughness);

          console.log('charMoves.length after prechecks', $scope.charMoves.length);
          console.log('$scope.speed after prechecks', $scope.speed);
          console.log('$scope.strength after prechecks', $scope.strength);


        };

        // SHOW TIPS FUNCTIONALITY
        $scope.showTips = true;
        $scope.showTipsText = 'Hide Tips';
        if (sessionStorage.showTips !== undefined) {
          if (sessionStorage.showTips === 'false') {
            $scope.showTips = false;
            $scope.showTipsText = 'Show Tips';
          } else {
            $scope.showTips = true;
            $scope.showTipsText = 'Hide Tips';
          }
        } else {
          sessionStorage.showTips = true;
          $scope.showTips = true;
          $scope.showTipsText = 'Hide Tips';
        }

        $scope.toggleShowTips = () => {
          if ($scope.showTips === false) {
            sessionStorage.showTips = true;
            $scope.showTips = true;
            $scope.showTipsText = 'Hide Tips';
          } else {
            sessionStorage.showTips = false;
            $scope.showTips = false;
            $scope.showTipsText = 'Show Tips';
          }
        }


        //HELP code
        $scope.help = false; // BOOLEAN: Am I getting helped right now?
        $scope.conceptCount = 4;
        $scope.toggleHelpText = "Explain this JS code";
        $scope.toggleHelp = () => {
          if (!$scope.help) {
            console.log("$scope.help", $scope.help);
              $scope.help = true;
              $scope.toggleHelpText = "Okay, I get it";
          } else {
            console.log("$scope.help", $scope.help);
            $scope.help = false;
            $scope.toggleHelpText = "Explain this JS code";
          }
        }
        $scope.toggleHelpFalse = "Explain this JS code"
        $scope.toggleHelpTrue = "Okay, I get it"

        $scope.start();

    }

    app.controller('villageController', ['$scope', '$stateParams', '$state', villageController]);

})();
