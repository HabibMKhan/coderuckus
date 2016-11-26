'use strict';

(function () {
    function editController($scope, $stateParams) {
        $scope.start = function () {
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

          if (sessionStorage.level < 5) {
            sessionStorage.abilityCount = 1;
            $scope.abilityCount = 1;
          } else if (sessionStorage.level >= 5){
            sessionStorage.abilityCount = 2;
            $scope.abilityCount = 2;
          } else {
            sessionStorage.abilityCount = 3;
            $scope.abilityCount = 3;
          }

          console.log($scope.toughness);
          // if ($scope.toughness === undefined ) {
          //   $scope.toughness = 0;
          // }
          $scope.strength = sessionStorage.level * 5;
          $scope.speed = sessionStorage.level * 5;
          $scope.maxstat = sessionStorage.level * 3;
          sessionStorage.maxPoints = sessionStorage.level * 5;
          sessionStorage.maxstat = sessionStorage.level * 3;

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

          // $scope.subtype
          if (sessionStorage.subclass !== undefined) {
            $scope.subclass = sessionStorage.subclass;
          }

          if ($scope.moves[$scope.subtype] !== undefined) {
            $scope.moves[$scope.chartype].push($scope.moves[$scope.subtype][0]);
            console.log('$scope.moves[$scope.chartype]', $scope.moves[$scope.chartype]);
          }

          $scope.charMoves = [];
          $scope.charMoves.push($scope.moves['allChars'][0]);
          $scope.charMoves.push($scope.moves['allChars'][1]);
          sessionStorage.move1 = ($scope.moves['allChars'][0].name);
          sessionStorage.move2 = ($scope.moves['allChars'][1].name);


        };
        $scope.start();
        $scope.toughnessAdjust = () => {
          console.log('yo');
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
          console.log('yo');
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
          console.log('yo');
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
          console.log('yo');
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
        $scope.toggleEdit = () => {
          if ($scope.toggle === 'Edit Moves') {
            $scope.toggle = 'Edit Stats';
            $scope.editTitle = 'Edit your Character\'s Moves';
          } else {
            $scope.toggle = 'Edit Moves'
            $scope.editTitle = 'Edit your Character\'s Stats';
          }
        }
        $scope.selectMove = (index) => {
          $scope.ability = $scope.moves[$scope.chartype][index].name;
          sessionStorage.move = $scope.moves[$scope.chartype][index].name;

          $scope.charMoves[2] = ($scope.moves[$scope.chartype][index]);
          sessionStorage.move3 = ($scope.moves[$scope.chartype][index].name);
          sessionStorage.move3index = index;
          console.log('from selectMove: charMoves', $scope.charMoves);
          // console.log('sessionStorage.move1', sessionStorage.move1);
          // console.log('sessionStorage.move2', sessionStorage.move2);
          // console.log('sessionStorage.move3', sessionStorage.move3);
          $scope.moveCount = 3;
          $scope.abilityCount = 0;
          $scope.completeCheck();
        }

        $scope.completeCheck = () => {
          if (($scope.strength === 0) && ($scope.speed === 0)) {
            if ($scope.charMoves.length === 3) {
              console.log('$scope.charMoves.length', $scope.charMoves.length);
              console.log('validation actually passed!');
              console.log('$scope.charMoves', $scope.charMoves);
              $scope.editCompleted = true;
              return true;
            } else {
              console.log('validation failed inner');
              console.log('$scope.charMoves', $scope.charMoves);
              $scope.editCompleted = false;
              return false;
            }
          } else {
            console.log('validation failed outer');
            console.log('$scope.strength', $scope.strength);
            console.log('$scope.speed', $scope.speed);
            $scope.editCompleted = false;
            return false;
          }
        }
    }

    app.controller('editController', ['$scope', '$stateParams', editController]);

})();
