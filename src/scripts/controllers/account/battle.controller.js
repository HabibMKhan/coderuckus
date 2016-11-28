'use strict';

(function () {

    function battleController($scope, $stateParams) {
        $scope.start = function () {
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

          $scope.moves = {
            allChars: [
              {
                name: 'Throw Rock [All]',
                damage: 1,
                toughness: 0,
                power: 1,
                evasion: 0,
                accuracy: 0
              },
              {
                name: 'Throw Sand [All]',
                damage: 1,
                toughness: 0,
                power: 0,
                evasion: 1,
                accuracy: 0
              }
            ],
            dwarfWarrior: [
              {
                name: 'Hammer Throw [dwarfWarrior]',
                damage: 4,
                toughness: 0,
                power: 0,
                evasion: 0,
                accuracy: 0
              },
              {
                name: 'Axe Chop [dwarfWarrior]',
                damage: 3,
                toughness: 0,
                power: 0,
                evasion: 0,
                accuracy: 1
              },
              {
                name: 'Iron Armor [dwarfWarrior]',
                damage: 0,
                toughness: 2,
                power: 0,
                evasion: 1,
                accuracy: 0
              }
            ],
            Mountain: [
              {
                name: 'Stone Toss [Mountain dwarfWarrior]',
                damage: 2,
                toughness: 0,
                power: 1,
                evasion: 0,
                accuracy: 1
              }
            ],
            Hillside: [
              {
                name: 'Sharpened Rock Throw [Hillside dwarfWarrior]',
                damage: 3,
                toughness: 0,
                power: 1,
                evasion: 0,
                accuracy: 0
              }
            ],
            elvenArcher: [
              {
                name: 'Quick Shot [elvenArcher]',
                damage: 2,
                toughness: 0,
                power: 0,
                evasion: 1,
                accuracy: 1
              },
              {
                name: 'Power Shot [elvenArcher]',
                damage: 3,
                toughness: 1,
                power: 0,
                evasion: 0,
                accuracy: 0
              },
              {
                name: 'Archery Training [elvenArcher]',
                damage: 0,
                toughness: 0,
                power: 2,
                evasion: 0,
                accuracy: 0
              }
            ],
            Elemental: [
              {
                name: 'Elemental Shot [Elemental elvenArcher]',
                damage: 4,
                toughness: 0,
                power: 0,
                evasion: 0,
                accuracy: 1
              }
            ],
            Lethal: [
              {
                name: 'Lethal Shot [Lethal elvenArcher]',
                damage: 4,
                toughness: 0,
                power: 1,
                evasion: 0,
                accuracy: 0
              }
            ],
            centaur: [
              {
                name: 'Knockout Punch [centaur]',
                damage: 5,
                toughness: 0,
                power: 0,
                evasion: 0,
                accuracy: 0
              },
              {
                name: 'Running Punch [centaur]',
                damage: 3,
                toughness: 0,
                power: 0,
                evasion: 1,
                accuracy: 0
              },
              {
                name: 'Stampede [centaur]',
                damage: 1,
                toughness: 1,
                power: 1,
                evasion: 0,
                accuracy: 0
              }
            ],
            Fighter: [
              {
                name: 'Hoof Kick [Fighter centaur]',
                damage: 4,
                toughness: 0,
                power: 1,
                evasion: 0,
                accuracy: 0
              }
            ],
            Archer: [
              {
                name: 'Power Shot [Archer centaur]',
                damage: 2,
                toughness: 0,
                power: 2,
                evasion: 0,
                accuracy: 0
              }
            ],
            wizard: [
              {
                name: 'Lightning [wizard]',
                damage: 4,
                toughness: 0,
                power: 0,
                evasion: 0,
                accuracy: 0
              },
              {
                name: 'Petrify [wizard]',
                damage: 3,
                toughness: 0,
                power: 0,
                evasion: 1,
                accuracy: 0
              },
              {
                name: 'Raise Dead [wizard]',
                damage: 0,
                toughness: 1,
                power: 1,
                evasion: 1,
                accuracy: 0
              }
            ],
            'White Arts': [
              {
                name: 'Protect [White Arts wizard]',
                damage: 0,
                toughness: 2,
                power: 1,
                evasion: 1,
                accuracy: 0
              }
            ],
            '?????': [
              {
                name: 'Demi [????? wizard]',
                damage: 1,
                toughness: 0,
                power: 3,
                evasion: 0,
                accuracy: 0
              }
            ],
            viking: [
              {
                name: 'Smash [viking]',
                damage: 4,
                toughness: 0,
                power: 0,
                evasion: 0,
                accuracy: 0
              },
              {
                name: 'Slice and Dice [viking]',
                damage: 3,
                toughness: 0,
                power: 0,
                evasion: 0,
                accuracy: 1
              },
              {
                name: 'Berserk [viking]',
                damage: 0,
                toughness: 0,
                power: 2,
                evasion: 0,
                accuracy: 0
              }
            ],
            Invader: [
              {
                name: 'Ravage [Invader viking]',
                damage: 3,
                toughness: 0,
                power: 0,
                evasion: 1,
                accuracy: 1
              }
            ],
            Destroyer: [
              {
                name: 'Rampage [Destroyer viking]',
                damage: 2,
                toughness: 1,
                power: 2,
                evasion: 0,
                accuracy: 0
              }
            ],
            blackMage: [
              {
                name: 'Fire [blackMage]',
                damage: 4,
                toughness: 0,
                power: 0,
                evasion: 0,
                accuracy: 0
              },
              {
                name: 'Blizzard [blackMage]',
                damage: 2,
                toughness: 0,
                power: 0,
                evasion: 1,
                accuracy: 1
              },
              {
                name: 'Magic Armor [blackMage]',
                damage: 0,
                toughness: 2,
                power: 0,
                evasion: 0,
                accuracy: 0
              }
            ],
            Hellfire: [
              {
                name: 'Eternal Flame [Hellfire blackMage]',
                damage: 3,
                toughness: 0,
                power: 1,
                evasion: 0,
                accuracy: 1
              }
            ],
            'Subzero Ice': [
              {
                name: 'Freeze [Subzero Ice blackMage]',
                damage: 3,
                toughness: 1,
                power: 0,
                evasion: 1,
                accuracy: 0
              }
            ]
          }
          if (sessionStorage.subclass !== undefined) {
            $scope.subtype = sessionStorage.subclass;
            if ($scope.moves[$scope.subtype] !== undefined) {
              $scope.moves[$scope.chartype].push($scope.moves[$scope.subtype][0]);
              console.log('$scope.moves[$scope.chartype]', $scope.moves[$scope.chartype]);
            }
          }
          if (sessionStorage.move3index !== undefined) {
            $scope.move3index = sessionStorage.move3index;
            console.log('sessionStorage.move3index', sessionStorage.move3index);
          }
          $scope.charAbilities = [];
          $scope.charAbilities.push($scope.moves['allChars'][0]);
          $scope.charAbilities.push($scope.moves['allChars'][1]);
          $scope.charAbilities.push($scope.moves[$scope.chartype][$scope.move3index]);
          console.log('charAbilities', $scope.charAbilities);

          $scope.enemyName = 'orc';
          if (sessionStorage.enemyName) {
            $scope.enemyName = sessionStorage.enemyName;
          } else {
            console.log('error state - could not find sessionStorage.enemyName');
          }
          $scope.userName = sessionStorage.name;
          $scope.chartype = sessionStorage.chartype;
          $scope.subtype = sessionStorage.subclass;
          $scope.enemy = {};
          $scope.enemy.name = sessionStorage.enemyName;

          $scope.imgUrl = '../../img/characters/'+ $scope.chartype + '.svg';
          $scope.eImgUrl = '../../img/characters/'+ $scope.enemyName + '.svg';

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

        //evaluate damage based on enemy t, char p, ability p
        $scope.calculateDamage = (ability) => {

          // ENEMY TOUGHNESS
          $scope.enemyName = sessionStorage.enemyName;
          $scope.enemy.toughness = 1; // temp set
          console.log('$scope.enemy', $scope.enemy);

          // CHAR POWER
          $scope.power = sessionStorage.power;
          console.log('$scope.power', $scope.power);
          // console.log('sessionStorage.power', sessionStorage.power);

          // ABILITY POWER
          $scope.abilityPower = ability.damage;
          console.log('$scope.abilityPower', $scope.abilityPower);
          console.log('$scope.enemy.toughness', $scope.enemy.toughness);
          $scope.damage = parseInt($scope.abilityPower) + parseInt($scope.power) - parseInt($scope.enemy.toughness);
          console.log('$scope.damage', $scope.damage);

          return $scope.damage;
        };

        //evaluate hit based on enemy e, char a, ability a
        $scope.didHit = () => {
          // ENEMY EVASION
          $scope.enemyName = sessionStorage.enemyName;
          $scope.enemy.evasion = 1; // temp set
          console.log('$scope.enemy', $scope.enemy);

          // CHAR ACCURACY
          $scope.accuracy = sessionStorage.accuracy;

          // DID HIT
          $scope.hitChance = $scope.accuracy - $scope.enemy.evasion;
          console.log('$scope.hitChance', $scope.hitChance);

          // DID ACTUALLY HIT
          var hitOdds = (10 * $scope.hitChance) + 100;
          var rand = Math.random() * hitOdds;
          console.log('rand', rand);
          var hitProb = Math.ceil(rand);
          var actualHit = false;
          if (hitProb > 49) {
            actualHit = true;
          }
          return actualHit;
        };

        $scope.didEnemyHit = () => {
          // CHAR EVASION
          $scope.evasion = sessionStorage.evasion;
          console.log('$scope.evasion', $scope.evasion);

          // ENEMY ACCURACY
          $scope.enemy.accuracy = 1; //temp set for enemy

          // DID HIT
          $scope.enemyHitChance = $scope.enemy.accuracy - $scope.evasion;
          console.log('$scope.enemyHitChance enemy', $scope.enemyHitChance);

          // DID ACTUALLY HIT
          var hitOdds = (10 * $scope.enemyHitChance) + 100;
          var rand = Math.random() * hitOdds;
          console.log('rand enemy', rand);
          var hitProb = Math.ceil(rand);
          var actualHit = false;
          if (hitProb > 62) {
            actualHit = true;
          }
          return actualHit;
        };

        //evaluate new hp based on ability used and calculateDamage + didHit
        $scope.abilityUsed = (index) => {
          $scope.battleStart = false;
          let ability = {
            name: 'Default ATTACK',
            damage: 1,
            accuracy: 1
          };
          ability = $scope.charAbilities[index];
          let dmg = $scope.calculateDamage(ability);
          $scope.hit = $scope.didHit();
          $scope.enemyHit = $scope.didEnemyHit();
          // console.log('sessionStorage.enemyName', sessionStorage.enemyName);
          // console.log('dmg', dmg);
          // console.log('hit', hit);
          // console.log('index', index);
          // console.log('$scope.charAbilities[index]', $scope.charAbilities[index]);
          // console.log('sessionStorage.orc', sessionStorage.orc);
          for (var i = 0; i < $scope.enemies.length; i++) {
            // console.log('$scope.enemies[i]', $scope.enemies[i]);
            var str = $scope.enemies[i];
            // console.log('sessionStorage[str]', sessionStorage.getItem(str));
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
                $scope.charHp -= 4;
                $scope.damageTaken = 4;
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
