'use strict';

(function () {

    function battleController($scope, $stateParams) {
        $scope.start = function () {
          $scope.powAnimationImage = "../../img/animations/pow.png";
          $scope.enemyPowAnimationImage = "../../img/animations/pow.png";

          if (sessionStorage.chartype === undefined) {
            $state.go('char');
          } else if (sessionStorage.name === undefined) {
            $state.go('stats');
          } else if (sessionStorage.power === undefined) {
            $state.go('edit');
          } else if (sessionStorage.move1customName === undefined) {
            $state.go('edit')
          }


          $scope.powerUpArr = [];
          $scope.chartype = sessionStorage.chartype;
          $scope.move3index = 0;
          $scope.battleStart = true;
          $scope.hit = false;
          $scope.damageDealt = 0;
          $scope.damageTaken = 0;

          $scope.charHp = 35;
          $scope.charMax = 35;
          $scope.enemyHp = 40;
          $scope.enemyMax = 40;

          $scope.enemies = ['orc', 'centaur2', 'robot', 'spaceArmor', 'stoneGiant'];

          if (sessionStorage.enemiesDefeated === undefined) {
            sessionStorage.enemiesDefeated = [];
            $scope.enemiesDefeated = [];
          } else {
            $scope.enemiesDefeated = sessionStorage.enemiesDefeated;
          }

          if (sessionStorage.enemiesLostTo === undefined) {
            sessionStorage.enemiesLostTo = [];
          } else {
            $scope.enemiesLostTo = sessionStorage.enemiesLostTo;
          }

          // ************ ************ ************
          // ************ MOVE SETTINGS ************
          // ************ MOVE SETTINGS ************
          // ************ MOVE SETTINGS ************
          // ************ ************ ************
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
          };
          $scope.movePrecheck();

          $scope.charAbilities = [];
          $scope.charAbilities.push($scope.moves[0]);
          $scope.charAbilities.push($scope.moves[1]);
          $scope.charAbilities.push($scope.moves[2]);
          // console.log('charAbilities', $scope.charAbilities);


          $scope.enemyName = 'orc';
          if (sessionStorage.enemyName) {
            $scope.enemyName = sessionStorage.enemyName;
          } else {
            console.log('error state - could not find sessionStorage.enemyName');
          }
          $scope.userName = sessionStorage.name || 'defaultName';
          $scope.chartype = sessionStorage.chartype;
          $scope.subtype = sessionStorage.subclass;
          $scope.enemy = {};
          $scope.enemy.name = sessionStorage.enemyName;

          $scope.imgUrl = '../../img/characters/'+ $scope.chartype + '.svg';
          $scope.eImgUrl = '../../img/characters/'+ $scope.enemyName + '.svg';

          // Battle Moves Settings
          $scope.battleMoves = [];
          if (sessionStorage.move1) {
            $scope.battleMoves.push(sessionStorage.move1);
          }
          if (sessionStorage.move2) {
            $scope.battleMoves.push(sessionStorage.move2);
          }
          if (sessionStorage.move3) {
            $scope.battleMoves.push(sessionStorage.move3);
          }

        };
        $scope.start();


        $scope.randomizeDamage = (damage) => {
          var randomizedDamage = Math.random() * damage;
          var returnedRandomizedDamage = Math.ceil(randomizedDamage);
          return returnedRandomizedDamage;
        }

        //evaluate damage based on enemy t, char p, ability p
        $scope.calculateDamage = (ability) => {
          // ENEMY TOUGHNESS
          $scope.enemyName = sessionStorage.enemyName;
          $scope.enemy.toughness = 5; // temp set
          // console.log('$scope.enemy', $scope.enemy);

          // CHAR POWER
          // $scope.power = sessionStorage.power;
          // POWERUP ADJUSTMENT
          let fromSessionPowerUpAmount = $scope.powerUpArr.length || 0;
          let fromSessionPowerUpPoints = ability.pointsForPowerUp || 0;
          // let fromSessionPowerUpType = ability.typeForPowerUp || 'unset';
          let ceiledVal = 0;
          if (fromSessionPowerUpAmount > 2) {
            ceiledVal = Math.ceil(fromSessionPowerUpAmount*0.6);
            fromSessionPowerUpAmount = ceiledVal;
          }
          if (fromSessionPowerUpAmount > 4) {
            ceiledVal = Math.ceil(fromSessionPowerUpAmount*0.5);
            fromSessionPowerUpAmount = ceiledVal;
          }
          if (fromSessionPowerUpAmount > 6) {
            ceiledVal = Math.ceil(fromSessionPowerUpAmount*0.4);
            fromSessionPowerUpAmount = ceiledVal;
          }

          if (ability.typeForPowerUp === 'power') {
            $scope.power = parseInt($scope.power) + parseInt(fromSessionPowerUpAmount*fromSessionPowerUpPoints);
            console.log('fromSessionPowerUpAmount*fromSessionPowerUpPoints', fromSessionPowerUpAmount*fromSessionPowerUpPoints);
            console.log('$scope.power', $scope.power);
          }

          // ABILITY POWER
          let abilityRandDamage = $scope.randomizeDamage(ability.damageBoost);
          $scope.abilityPower = abilityRandDamage;
          $scope.damage = parseInt($scope.abilityPower) + parseInt($scope.power) - parseInt($scope.enemy.toughness);

          if ($scope.damage < 2) {
            return 1;
          }
          return $scope.damage;
        };

        // Calculate Damage from Enemey
        $scope.calculateDamageFromEnemy = (ability) => {

          // ENEMY TOUGHNESS
          $scope.enemyName = sessionStorage.enemyName;
          $scope.enemy.power = 5; // temp set
          // console.log('$scope.enemy', $scope.enemy);

          // CHAR POWER
          // $scope.toughness = sessionStorage.toughness;
          // POWERUP ADJUSTMENT
          let fromSessionPowerUpAmount = $scope.powerUpArr.length || 0;
          let fromSessionPowerUpPoints = ability.pointsForPowerUp || 0;
          // let fromSessionPowerUpType = ability.typeForPowerUp || 'unset';
          if (ability.typeForPowerUp === 'toughness') {
            $scope.toughness = parseInt($scope.toughness) + parseInt(fromSessionPowerUpAmount*fromSessionPowerUpPoints);
            console.log('fromSessionPowerUpAmount*fromSessionPowerUpPoints', fromSessionPowerUpAmount*fromSessionPowerUpPoints);
            console.log('$scope.toughness', $scope.toughness)
          }

          // ABILITY POWER
          let abilityRandDamage = $scope.randomizeDamage($scope.enemy.power);
          $scope.abilityPowerEnemy = abilityRandDamage;
          $scope.damageEnemy = parseInt($scope.abilityPowerEnemy) - parseInt($scope.toughness) + parseInt($scope.enemy.power);
          console.log('$scope.abilityPowerEnemy', $scope.abilityPowerEnemy);
          console.log('$scope.toughness', $scope.toughness);
          console.log('$scope.enemy.power', $scope.enemy.power);

          if ($scope.damageEnemy < 2) {
            return 1;
          }
          return $scope.damageEnemy;
        };


        //evaluate hit based on enemy e, char a, ability a
        $scope.didHit = (ability) => {
          // ENEMY EVASION
          $scope.enemyName = sessionStorage.enemyName;
          $scope.enemy.evasion = 5; // temp set
          // console.log('$scope.enemy', $scope.enemy);

          // CHAR ACCURACY
          // $scope.accuracy = sessionStorage.accuracy;
          // POWERUP ADJUSTMENT
          let fromSessionPowerUpAmount = $scope.powerUpArr.length || 0;
          let fromSessionPowerUpPoints = ability.pointsForPowerUp || 0;
          if (ability.typeForPowerUp === 'accuracy') {
            $scope.accuracy = parseInt($scope.accuracy) + parseInt(fromSessionPowerUpAmount*fromSessionPowerUpPoints);
            console.log('fromSessionPowerUpAmount*fromSessionPowerUpPoints', fromSessionPowerUpAmount*fromSessionPowerUpPoints);
            console.log('$scope.accuracy', $scope.accuracy)
          }

          // DID HIT
          $scope.hitChance = ($scope.accuracy - $scope.enemy.evasion)*2;
          // console.log('$scope.hitChance', $scope.hitChance);

          // DID ACTUALLY HIT
          var adjustedHitChance = 49-$scope.hitChance;
          var hitOdds = Math.random() * 100;
          var ceiledHitOdds = Math.ceil(hitOdds);
          var actualHit = false;
          if (ceiledHitOdds > adjustedHitChance) {
            actualHit = true;
            var charNum = Math.ceil(Math.random()*3);
            console.log('charNum First', charNum);
            console.log('charNum', charNum);
            console.log('charNum Last', charNum);
            if (charNum === 1) {
              $scope.powAnimationImage = "../../img/animations/kapow.png";
            } else if (charNum === 2) {
              $scope.powAnimationImage = "../../img/animations/pow.png";
            } else {
              $scope.powAnimationImage = "../../img/animations/zap.png";
            }
            $scope.actualHitAnimation = true;
          } else {
            $scope.actualHitAnimation = false;
          }
          return actualHit;
        };

        $scope.didEnemyHit = (ability) => {
          // CHAR EVASION
          // $scope.evasion = sessionStorage.evasion;
          // console.log('$scope.evasion', $scope.evasion);
          // POWERUP ADJUSTMENT
          let fromSessionPowerUpAmount = $scope.powerUpArr.length || 0;
          let fromSessionPowerUpPoints = ability.pointsForPowerUp || 0;
          if (ability.typeForPowerUp === 'evasion') {
            $scope.evasion = parseInt($scope.evasion) + parseInt(fromSessionPowerUpAmount*fromSessionPowerUpPoints);
            console.log('fromSessionPowerUpAmount*fromSessionPowerUpPoints', fromSessionPowerUpAmount*fromSessionPowerUpPoints);
            console.log('$scope.evasion', $scope.evasion)
          }

          // ENEMY ACCURACY
          $scope.enemy.accuracy = 5; //temp set for enemy

          // DID HIT
          $scope.enemyHitChance = ($scope.enemy.accuracy - $scope.evasion)*2;
          // console.log('$scope.hitChance', $scope.hitChance);

          // DID ACTUALLY HIT
          var adjustedHitChance = 49-$scope.enemyHitChance;
          var hitOdds = Math.random() * 100;
          var ceiledHitOdds = Math.ceil(hitOdds);
          var actualHit = false;
          if (ceiledHitOdds > adjustedHitChance) {
            actualHit = true;
            var enemyNum = Math.ceil(Math.random()*3);
            console.log('enemyNum First', enemyNum);
            console.log('enemyNum', enemyNum);
            console.log('enemyNum Last', enemyNum);
            if (enemyNum === 1) {
              $scope.enemyPowAnimationImage = "../../img/animations/kapow.png";
            } else if (enemyNum === 2) {
              $scope.enemyPowAnimationImage = "../../img/animations/pow.png";
            } else {
              $scope.enemyPowAnimationImage = "../../img/animations/zap.png";
            }
            $scope.actualEnemyHitAnimation = true;
          } else {
            $scope.actualEnemyHitAnimation = false;
          }
          return actualHit;
        };

        $scope.powerUpChar = () => {
          $scope.powerUpArr.push('1');
        }

        //evaluate new hp based on ability used and calculateDamage + didHit
        $scope.abilityUsed = (index) => {
          $scope.battleStart = false;
          let ability = {
            name: 'Default ATTACK',
            damageBoost: 2,
            hitChanceBoost: 2
          };
          ability = $scope.charAbilities[index];
          if (ability.typeForPowerUp !== 'unset') {
            $scope.powerUpChar();
          }
          let dmg = $scope.calculateDamage(ability);
          $scope.hit = $scope.didHit(ability);
          $scope.enemyHit = $scope.didEnemyHit(ability);
          for (var i = 0; i < $scope.enemies.length; i++) {
            var str = $scope.enemies[i];
          }

          if (($scope.battleOutcome !== 'Win') && ($scope.battleOutcome !== 'Lose')) {
            if ($scope.hit) {
              $scope.enemyHp -= dmg;
              $scope.damageDealt = dmg;
            } else {
              $scope.damageDealt = 0;
            }
            if ($scope.enemyHp <= 0) {
              $scope.battleOutcome = 'Win';

              for (var i = 0; i < $scope.enemies.length; i++) {
                if (sessionStorage.enemyName === $scope.enemies[i]) {
                  var str = $scope.enemies[i];
                  console.log('DEFEATED SOMEBODY');
                  sessionStorage.setItem(str, 'Defeated this one');
                }
              }
            } else {
              if ($scope.enemyHit) {
                let damageTakenFromEnemy = $scope.calculateDamageFromEnemy(ability);
                $scope.charHp -= damageTakenFromEnemy;
                $scope.damageTaken = damageTakenFromEnemy;
              } else {
                $scope.damageTaken = 0;
              }
              if ($scope.charHp <= 0) {
                $scope.battleOutcome = 'Lose';
                for (var i = 0; i < $scope.enemies.length; i++) {
                  if (sessionStorage.enemyName === $scope.enemies[i]) {
                    var str = $scope.enemies[i];
                    sessionStorage.setItem(str, 'Lost to this one');
                  }
                }
              }
            }
          }
        };



    }

    app.controller('battleController', ['$scope', '$stateParams', battleController]);

})();
