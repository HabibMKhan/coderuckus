'use strict';

(function () {
    function editController($scope, $stateParams, $state) {
        // EDITCONTROLLER VARIABLES INITIALIZED
        $scope.strength = 5;
        $scope.speed = 5;
        $scope.maxPoints = 5;
        $scope.conceptCount = 4;

        // completeCheck() is called in $scope.start()
        $scope.completeCheck = () => {
          if (($scope.strength === 0) && ($scope.speed === 0)) {
            if ($scope.charMoves.length === 3) {
              console.log('$scope.charMoves.length', $scope.charMoves.length);
              console.log('validation actually passed!');
              console.log('$scope.charMoves', $scope.charMoves);
              let shouldFailCheck = false;
              for (var i = 0; i < 3; i++) {
                if(($scope.charMoves[i] === undefined) || ($scope.charMoves[i].customName === undefined)) {
                  shouldFailCheck = true;
                  $scope.editCompleted = false;
                }
              }
              if (!shouldFailCheck) {
                console.log('Yo we passed the check!');
                $scope.editCompleted = true;
              }
            } else {
              console.log('validation failed inner');
              console.log('$scope.charMoves', $scope.charMoves);
              $scope.editCompleted = false;
              return false;
            }
          } else {
            console.log('validation failed outer');
            console.log('$scope.charMoves', $scope.charMoves);
            console.log('$scope.charMoves.length', $scope.charMoves.length);
            console.log('$scope.strength', $scope.strength);
            console.log('$scope.strength', $scope.speed);
            $scope.editCompleted = false;
            return false;
          }
          return false;
        }

        $scope.start = function () {
          console.log('moves', $scope.moves);

          $scope.userName = sessionStorage.name;
          $scope.chartype = sessionStorage.chartype;
          $scope.subtype = sessionStorage.subclass;
          $scope.toggle = 'Edit Moves';
          $scope.editTitle = 'Edit your Character\'s Stats';
          $scope.abilityCount = 1;
          $scope.moveCount = 2;
          $scope.imgUrl = '../../img/characters/'+ $scope.chartype + '.svg';

          if (!sessionStorage.level || sessionStorage.level < 1) {
            sessionStorage.level = 1;
            sessionStorage.abilityCount = 1;
          }

          console.log($scope.toughness);
          // if ($scope.toughness === undefined ) {
          //   $scope.toughness = 0;
          // }
          $scope.strength = sessionStorage.level * 5;
          $scope.speed = sessionStorage.level * 5;
          $scope.maxstat = sessionStorage.level * 5;
          $scope.maxPoints = sessionStorage.level * 5;
          sessionStorage.maxPoints = sessionStorage.level * 5;
          sessionStorage.maxstat = sessionStorage.level * 5;

          console.log('$scope.speed after INITIAL', $scope.speed);
          console.log('$scope.strength after INITIAL', $scope.strength);

          if (sessionStorage.chartype === undefined) {
            $state.go('char');
          } else if (sessionStorage.name === undefined) {
            $state.go('stats');
          } else if (sessionStorage.power === undefined) {
            $state.go('edit');
          }

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
          if (($scope.power + $scope.toughness) < $scope.maxPoints) {
            $scope.strength = 0;
          }
          if (($scope.evasion + $scope.accuracy) < $scope.maxPoints) {
            $scope.speed = 0;
          }
          console.log('$scope.power after prechecks', $scope.power);
          console.log('$scope.toughness after prechecks', $scope.toughness);

          console.log('charMoves.length after prechecks', $scope.charMoves.length);
          console.log('$scope.speed after prechecks', $scope.speed);
          console.log('$scope.strength after prechecks', $scope.strength);
          $scope.completeCheck();
        };
        $scope.start();

        // MOVE SECTION variables initialized

        $scope.statTypes = ['toughness','power','accuracy','evasion','unset'];

        $scope.moveCompleted = [false, false, false];
        $scope.movePoints = [5, 5, 5];
        $scope.movePointsRem = [5, 5, 5];
        $scope.pointsForPowerUp = [0, 0, 0];

        // $scope.moveSelected - triggered when a move is selected for configuration
        $scope.moveSelected = (index, name) => {
          console.log('index', index);
          if (index === 0) {
            $scope.selectedMove = name || 'Move 1';
            $scope.moveIndex = 0;
          } else if (index === 1) {
            $scope.selectedMove = name || 'Move 2';
            $scope.moveIndex = 1;
          } else if (index === 2) {
            $scope.selectedMove = name || 'Move 3';
            $scope.moveIndex = 2;
          } else {
            $scope.selectedMove = undefined;
            $scope.moveIndex = NaN;
          }
        }

        // $scope.moveChange(moveIndex) called each time a move is configured
        $scope.moveChange = (moveIndex) => {
          if ($scope.moves[moveIndex].damageBoost > 5) {
            $scope.moves[moveIndex].damageBoost = 5;
            console.log('$scope.moves[moveIndex].damageBoost = ?: ', $scope.moves[moveIndex].damageBoost)
          } else if ($scope.moves[moveIndex].hitChanceBoost > 5) {
            $scope.moves[moveIndex].hitChanceBoost = 5;
            console.log('$scope.moves[moveIndex].hitChanceBoost = ?: ', $scope.moves[moveIndex].hitChanceBoost)
          } else if ($scope.moves[moveIndex].powerUpBoost > 2) {
            $scope.moves[moveIndex].powerUpBoost = 2;
            console.log('$scope.moves[moveIndex].powerUpBoost = ?: ', $scope.moves[moveIndex].powerUpBoost)
          }
          console.log('yo');
          console.log('moveIndex', moveIndex);
          console.log('movePointsRem', $scope.movePointsRem);
          // console.log('$scope.moves[moveIndex].damageBoost', $scope.moves[moveIndex].damageBoost);

          // return BOOLEAN
          // based on whether or not all stat points are used
          if ($scope.moves[moveIndex].powerUpBoost >= 0) {
            $scope.pointsForPowerUp[moveIndex] = $scope.moves[moveIndex].powerUpBoost;
            if (($scope.moves[moveIndex].damageBoost === undefined) && ($scope.moves[moveIndex].hitChanceBoost === undefined)) {
              $scope.movePointsRem[moveIndex] = $scope.movePoints[moveIndex] - ($scope.pointsForPowerUp[moveIndex] * 2);
            }
          }
          if (($scope.moves[moveIndex].damageBoost >= 0) && ($scope.moves[moveIndex].hitChanceBoost >= 0)) {
            $scope.movePointsRem[moveIndex] = $scope.movePoints[moveIndex] - $scope.moves[moveIndex].damageBoost - $scope.moves[moveIndex].hitChanceBoost - ($scope.pointsForPowerUp[moveIndex] * 2);
          } else if ($scope.moves[moveIndex].damageBoost >= 0) {
            $scope.movePointsRem[moveIndex] = $scope.movePoints[moveIndex] - $scope.moves[moveIndex].damageBoost - ($scope.pointsForPowerUp[moveIndex] * 2);
          } else if ($scope.moves[moveIndex].hitChanceBoost >= 0) {
            $scope.movePointsRem[moveIndex] = $scope.movePoints[moveIndex] - $scope.moves[moveIndex].hitChanceBoost - ($scope.pointsForPowerUp[moveIndex] * 2);
          }
          if ($scope.movePointsRem[moveIndex] === 0) {
            if ($scope.moves[moveIndex].customName) {
              $scope.moveCompleted[moveIndex] = true;
            } else {
              $scope.moveCompleted[moveIndex] = false;
            }
          } else {
            $scope.moveCompleted[moveIndex] = false;
          }
          console.log('$scope.movePointsRem[moveIndex] === 0', '$scope.movePointsRem[moveIndex] === 0');
        }

        // $scope.saveMove(moveIndex) is called whenever the Save button is clicked for move config
        $scope.saveMove = (moveIndex) => {
            if ($scope.moves[0]) {
              sessionStorage.move1damageBoost = $scope.moves[0].damageBoost;
              sessionStorage.move1hitChanceBoost = $scope.moves[0].hitChanceBoost;
              sessionStorage.move1pointsForPowerUp = ($scope.pointsForPowerUp[0]);
              if ($scope.selectedType) {
                if($scope.selectedType[0]) {sessionStorage.move1typeForPowerUp = $scope.selectedType[0]};
              }
              sessionStorage.move1customName = $scope.moves[0].customName;
            }
            if ($scope.moves[1]) {
              sessionStorage.move2damageBoost = $scope.moves[1].damageBoost;
              sessionStorage.move2hitChanceBoost = $scope.moves[1].hitChanceBoost;
              sessionStorage.move2pointsForPowerUp = ($scope.pointsForPowerUp[1]);
              if ($scope.selectedType) {
                if($scope.selectedType[1]) {sessionStorage.move2typeForPowerUp = $scope.selectedType[1]};
              }
              sessionStorage.move2customName = $scope.moves[1].customName;
            }
            if ($scope.moves[2]) {
              sessionStorage.move3damageBoost = $scope.moves[2].damageBoost;
              sessionStorage.move3hitChanceBoost = $scope.moves[2].hitChanceBoost;
              sessionStorage.move3pointsForPowerUp = ($scope.pointsForPowerUp[2]);
              if ($scope.selectedType) {
                if($scope.selectedType[2]) {sessionStorage.move3typeForPowerUp = $scope.selectedType[2]};
              }
              sessionStorage.move3customName = $scope.moves[2].customName;
            }
            console.log('sessionStorage.move1damageBoost', sessionStorage.move1damageBoost);
            console.log('sessionStorage.move1hitChanceBoost', sessionStorage.move1hitChanceBoost);
            console.log('sessionStorage.move1pointsForPowerUp', sessionStorage.move1pointsForPowerUp);
            console.log('sessionStorage.move1customName', sessionStorage.move1customName);
            console.log('sessionStorage.move2hitChanceBoost', sessionStorage.move2hitChanceBoost);
            console.log('sessionStorage.move3customName', sessionStorage.move3customName);
            let selectedTypeVar = "noneSet"
            if ($scope.selectedType) {
              if ($scope.selectedType[moveIndex]) {
                selectedTypeVar = $scope.selectedType[moveIndex];
              }
            }
            // let moveToBeSaved = {
            //   damageBoost: $scope.moves[moveIndex].damageBoost,
            //   hitChanceBoost: $scope.moves[moveIndex].hitChanceBoost,
            //   pointsForPowerUp: $scope.pointsForPowerUp[moveIndex],
            //   typeForPowerUp: selectedTypeVar,
            //   customName: $scope.moves[moveIndex].customName
            // }
            // console.log('moveToBeSaved', moveToBeSaved);
            // $scope.charMoves[moveIndex] = moveToBeSaved;
            $scope.charMovesObjArr = [{}, {}, {}];
            let moveToBeSaved = {};
            let selectedTypeVariable = "unset"

            for (var i = 0; i < ($scope.charMovesObjArr.length); i++) {
              selectedTypeVariable = "unset"
              if ($scope.selectedType) {
                if ($scope.selectedType[i]) {
                  selectedTypeVariable = $scope.selectedType[i];
                }
              }
              moveToBeSaved = {
                damageBoost: $scope.moves[i].damageBoost,
                hitChanceBoost: $scope.moves[i].hitChanceBoost,
                pointsForPowerUp: $scope.pointsForPowerUp[i],
                typeForPowerUp: selectedTypeVariable,
                customName: $scope.moves[i].customName
              }
              $scope.charMovesObjArr[i] = moveToBeSaved;
              console.log('i', i);
              console.log('customName: $scope.moves[i].customName', $scope.moves[i].customName);
            }
            for (var i = 0; i < ($scope.charMovesObjArr.length); i++) {
              if ($scope.charMovesObjArr[i].customName !== undefined) {
                $scope.charMoves[i] = $scope.charMovesObjArr[i];
              }
            }
            // console.log('moveToBeSaved', moveToBeSaved);
            // $scope.charMoves[moveIndex] = moveToBeSaved;
            console.log('$scope.charMoves', $scope.charMoves);
            $scope.completeCheck();
        }

        // stat adjustment methods are called when stats are adjusted
        $scope.toughnessAdjust = () => {
          $scope.maxValCheck('toughness', $scope.maxPoints);
          console.log('$scope.toughness', $scope.toughness);
          if ($scope.toughness === undefined) {
            $scope.maxBreak = true;
          } else {
            $scope.maxBreak = false;
          }
          if ($scope.toughness !== undefined) {
            if ($scope.power !== undefined) {
              $scope.strength = (sessionStorage.level * 5) - $scope.toughness - $scope.power;
            } else {
              $scope.strength = (sessionStorage.level * 5) - $scope.toughness;
            }
          }
          $scope.completeCheck();
        }
        $scope.powerAdjust = () => {
          $scope.maxValCheck('power', $scope.maxPoints);
          console.log('$scope.power', $scope.power);
          if ($scope.power === undefined) {
            $scope.maxBreakP = true;
          } else {
            $scope.maxBreakP = false;
          }
          if ($scope.power !== undefined) {
            if ($scope.toughness !== undefined) {
              $scope.strength = (sessionStorage.level * 5) - $scope.power - $scope.toughness;
            } else {
              $scope.strength = (sessionStorage.level * 5) - $scope.power;
            }
          }
          $scope.completeCheck();
        }
        $scope.evasionAdjust = () => {
          $scope.maxValCheck('evasion', $scope.maxPoints);
          console.log('$scope.evasion', $scope.evasion);
          if ($scope.evasion === undefined) {
            $scope.maxBreakE = true;
          } else {
            $scope.maxBreakE = false;
          }
          if ($scope.evasion !== undefined) {
            if ($scope.accuracy !== undefined) {
              $scope.speed = (sessionStorage.level * 5) - $scope.evasion - $scope.accuracy;
            } else {
              $scope.speed = (sessionStorage.level * 5) - $scope.evasion;
            }
          }
          $scope.completeCheck();
        }
        $scope.accuracyAdjust = () => {
          $scope.maxValCheck('accuracy', $scope.maxPoints);
          console.log('$scope.accuracy', $scope.accuracy);
          if ($scope.accuracy === undefined) {
            $scope.maxBreakP = true;
          } else {
            $scope.maxBreakP = false;
          }
          if ($scope.accuracy !== undefined) {
            if ($scope.evasion !== undefined) {
              $scope.speed = (sessionStorage.level * 5) - $scope.accuracy - $scope.evasion;
            } else {
              $scope.speed = (sessionStorage.level * 5) - $scope.accuracy;
            }
          }
          $scope.completeCheck();
        }

        // $scope.setStats will set stat data bound to sessionStorage
        $scope.setStats = () => {
          if($scope.toughness + $scope.power <= sessionStorage.maxPoints) {
            if ($scope.toughness <= sessionStorage.maxstat) {
              sessionStorage.toughness = $scope.toughness;
            } else {
              sessionStorage.toughness = 1;
            }
            if ($scope.power <= sessionStorage.maxstat) {
              sessionStorage.power = $scope.power;
            } else {
              sessionStorage.power = 1;
            }
          } else {
            sessionStorage.toughness = 1;
            sessionStorage.power = 1;
          }
          console.log('sessionStorage.toughness', sessionStorage.toughness);
          console.log('sessionStorage.power', sessionStorage.power);
          if($scope.evasion + $scope.accuracy <= sessionStorage.maxPoints) {
            if ($scope.evasion <= sessionStorage.maxstat) {
              sessionStorage.evasion = $scope.evasion;
            } else {
              sessionStorage.evasion = 1;
            }
            if ($scope.accuracy <= sessionStorage.maxstat) {
              sessionStorage.accuracy = $scope.accuracy;
            } else {
              sessionStorage.accuracy = 1;
            }
          } else {
            sessionStorage.evasion = 1;
            sessionStorage.accuracy = 1;
          }
          console.log('sessionStorage.evasion', sessionStorage.evasion);
          console.log('sessionStorage.accuracy', sessionStorage.accuracy);
        }

        // $scope.toggleEdit called whenever edit moves and stats is toggled between.
        $scope.toggleEdit = () => {
          if ($scope.toggle === 'Edit Moves') {
            $scope.toggle = 'Edit Stats';
            $scope.editTitle = 'Edit your Character\'s Moves';
            $scope.conceptCount = 3;
          } else {
            $scope.toggle = 'Edit Moves'
            $scope.editTitle = 'Edit your Character\'s Stats';
            $scope.conceptCount = 4;
          }
        }

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

        // $scope.tipForUser = "<-- Click red box to select";
        $scope.help = false; // BOOLEAN: Am I getting helped right now?
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
        $scope.toggleHelpFalse = "Explain this JS code";
        $scope.toggleHelpTrue = "Okay, I get it";

        $scope.maxValCheck = (type, maxNum) => {
          console.log('maxNum from maxLengthCheck', maxNum);
          if (type === 'toughness') {
            if ($scope.toughness > maxNum) {
              $scope.toughness = maxNum;
            }
          } else if (type === 'power') {
            if ($scope.power > maxNum) {
              $scope.power = maxNum;
            }
          } else if (type === 'evasion') {
            if ($scope.evasion > maxNum) {
              $scope.evasion = maxNum;
            }
          } else if (type === 'accuracy') {
            if ($scope.accuracy > maxNum) {
              $scope.accuracy = maxNum;
            }
          }
        };

        $scope.isNumeric = (evt) => {
          var theEvent = evt || window.event;
          var key = theEvent.keyCode || theEvent.which;
          key = String.fromCharCode (key);
          var regex = /[0-9]|\./;
          if ( !regex.test(key) ) {
            theEvent.returnValue = false;
            if(theEvent.preventDefault) theEvent.preventDefault();
          }
        };
    }

    app.controller('editController', ['$scope', '$stateParams', '$state', editController]);

})();
