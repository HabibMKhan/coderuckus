#chooseChar {
  height: 139px;
  width: auto;
  font-size: 36px;
  background-color: #14ab1b;
  color: white;
  cursor: pointer;
  padding: 5px 30px;
  position: fixed;
  top: 30%;
  a, a:visited {
    color: white;
  }
}


backnav {
height: 120px;
width: auto;
font-size: 36px;
background-color: #14ab1b;
color: white;
cursor: pointer;
padding: 5px 30px;
position: fixed;
top: 30%;
}

}


.showTips {
  position: fixed;
  bottom: 5%;
  left: 3%;
  background-color: $cr-orange;
  color: white;
  font-size: 24px;
  width: 130px;
  height: 80px;
}




div(class="tipForUser charPage" ng-show="showTips") {{tipForUser}}













//Legacy Stats.Jade Code

button(class="back-char" class="btn" ui-sref="char")
 a(ui-sref="char") Back to Character selection
button(class="back-home" class="btn" style="margin-top:150px;" ui-sref="home")
 a(ui-sref="home") Back home
button(class="go-edit" class="btn" ng-click="setCharstats()" ui-sref="edit({chartype:chartype,subclass:subclass,name:charName})" ng-show="subclass !== 'defaultSubclass'")
 a(ng-click="setCharstats()" ui-sref="edit({chartype:chartype,subclass:subclass,name:charName})") Go Edit

//Legacy Edit.Jade Code


button(class="back-char" class="btn" ui-sref="char")
 a(ui-sref="char") Back to Character selection
button(class="back-home" class="btn" style="margin-top:150px;" ui-sref="home")
 a(ui-sref="home") Back home
img(class="char" ng-src="{{imgUrl}}")

//Legacy Village.Jade Code
button(class="back-char" class="btn")
 a(ui-sref="char") Back to Character selection
button(class="back-home" class="btn" style="margin-top:150px;")
 a(ui-sref="home") Back home
img(class="char char-village" ng-src="{{imgUrl}}")

//Legacy Battle.Jade Code
button(class="back-char" class="btn" ui-sref="char")
 a(ui-sref="char") Back to Character selection
button(class="back-home" class="btn" style="margin-top:150px;" ui-sref="home")
 a(ui-sref="home") Back home



// Copy Paste Link Code
a(class="init-chartype link--javascript charPage" target="_blank" href="linkaka" title="linkaka") Var, Let, and Const


//Legacy Move HTML

div(id="move-edit" ng-show="(toggle==='Edit Stats') && !help")
 div(class="move-edit__available__title")
   span(ng-if="abilityCount > 0") Choose {{abilityCount}} ability.
   span() {{moveCount}} abilities currently selected.
   span(class="default-move__text") Default Fixed (2): (Throw Rock & Sand)
 div(class="move-edit__moves--available")
   div(class="move-edit__move" ng-class="(moves[chartype][$index].name === ability) ? 'selected' : 'unselected'" ng-click="selectMove($index)" ng-repeat="move in moves[chartype]") {{move.name}}
     div(class="move-edit__move-damage") DAMAGE: {{move.damage}}
     div(class="move-edit__move-stat" ng-show="move.toughness>0") Toughness: +{{move.toughness}}
     div(class="move-edit__move-stat" ng-show="move.power>0") Power: +{{move.power}}
     div(class="move-edit__move-stat" ng-show="move.evasion>0") Evasion: +{{move.evasion}}
     div(class="move-edit__move-stat" ng-show="move.accuracy>0") Accuracy: +{{move.accuracy}}
     div(class="selectMove" ng-show="(moves[chartype][$index].name !== ability)") Click to Select this Move
   div(class="move-edit__move--default" ng-repeat="move in moves['allChars']") {{move.name}}
     div(class="move-edit__move-damage") DAMAGE: {{move.damage}}
     div(class="move-edit__move-stat" ng-show="move.toughness>0") Toughness: +{{move.toughness}}
     div(class="move-edit__move-stat" ng-show="move.power>0") Power: +{{move.power}}
     div(class="move-edit__move-stat" ng-show="move.evasion>0") Evasion: +{{move.evasion}}
     div(class="move-edit__move-stat" ng-show="move.accuracy>0") Accuracy: +{{move.accuracy}}




     $scope.moves = [];
     console.log('moves', $scope.moves);



//Legacy Moves Code
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


//Battle Controller stuff removed

          // if ((sessionStorage.move1customName) &&
          // (sessionStorage.move1customName) &&
          // (sessionStorage.move1customName) &&
          // (sessionStorage.move1customName) &&
          // (sessionStorage.move1customName) &&
          // {
          //   $scope.moves[0].move2damageBoost = sessionStorage.move2damageBoost;
          //   $scope.moves[0].move2hitChanceBoost = sessionStorage.move2hitChanceBoost;
          //   $scope.moves[0].move2pointsForPowerUp = sessionStorage.move2pointsForPowerUp;
          //   if (sessionStorage.move2typeForPowerUp) {
          //     $scope = sessionStorage.move2typeForPowerUp;
          //   }
          //   $scope.moves[0].move2damageBoost = sessionStorage.move2damageBoost;
          //   $scope.moves[0].move2customName = sessionStorage.move2customName;
          //   sessionStorage.move2hitChanceBoost = $scope.moves[moveIndex].hitChanceBoost;
          //   sessionStorage.move2pointsForPowerUp = ($scope.pointsForPowerUp[moveIndex] * 2);
          //   if ($scope.selectedType) {
          //     if($scope.selectedType[moveIndex]) {sessionStorage.move2typeForPowerUp = $scope.selectedType[moveIndex]};
          //   }
          //   sessionStorage.move2customName = $scope.moves[moveIndex].customName;
          //   $scope.moves[0] = {
          //     damageBoost: $scope.moves[i].damageBoost,
          //     hitChanceBoost: $scope.moves[i].hitChanceBoost,
          //     pointsForPowerUp: $scope.pointsForPowerUp[i],
          //     typeForPowerUp: selectedTypeVariable,
          //     customName: $scope.moves[i].customName
          //   }
          // }

          // $scope.moves = {
          //   allChars: [
          //     {
          //       name: 'Throw Rock [All]',
          //       damage: 1,
          //       toughness: 0,
          //       power: 1,
          //       evasion: 0,
          //       accuracy: 0
          //     },
          //     {
          //       name: 'Throw Sand [All]',
          //       damage: 1,
          //       toughness: 0,
          //       power: 0,
          //       evasion: 1,
          //       accuracy: 0
          //     }
          //   ],
          //   dwarfWarrior: [
          //     {
          //       name: 'Hammer Throw [dwarfWarrior]',
          //       damage: 4,
          //       toughness: 0,
          //       power: 0,
          //       evasion: 0,
          //       accuracy: 0
          //     },
          //     {
          //       name: 'Axe Chop [dwarfWarrior]',
          //       damage: 3,
          //       toughness: 0,
          //       power: 0,
          //       evasion: 0,
          //       accuracy: 1
          //     },
          //     {
          //       name: 'Iron Armor [dwarfWarrior]',
          //       damage: 0,
          //       toughness: 2,
          //       power: 0,
          //       evasion: 1,
          //       accuracy: 0
          //     }
          //   ],
          //   Mountain: [
          //     {
          //       name: 'Stone Toss [Mountain dwarfWarrior]',
          //       damage: 2,
          //       toughness: 0,
          //       power: 1,
          //       evasion: 0,
          //       accuracy: 1
          //     }
          //   ],
          //   Hillside: [
          //     {
          //       name: 'Sharpened Rock Throw [Hillside dwarfWarrior]',
          //       damage: 3,
          //       toughness: 0,
          //       power: 1,
          //       evasion: 0,
          //       accuracy: 0
          //     }
          //   ],
          //   elvenArcher: [
          //     {
          //       name: 'Quick Shot [elvenArcher]',
          //       damage: 2,
          //       toughness: 0,
          //       power: 0,
          //       evasion: 1,
          //       accuracy: 1
          //     },
          //     {
          //       name: 'Power Shot [elvenArcher]',
          //       damage: 3,
          //       toughness: 1,
          //       power: 0,
          //       evasion: 0,
          //       accuracy: 0
          //     },
          //     {
          //       name: 'Archery Training [elvenArcher]',
          //       damage: 0,
          //       toughness: 0,
          //       power: 2,
          //       evasion: 0,
          //       accuracy: 0
          //     }
          //   ],
          //   Elemental: [
          //     {
          //       name: 'Elemental Shot [Elemental elvenArcher]',
          //       damage: 4,
          //       toughness: 0,
          //       power: 0,
          //       evasion: 0,
          //       accuracy: 1
          //     }
          //   ],
          //   Lethal: [
          //     {
          //       name: 'Lethal Shot [Lethal elvenArcher]',
          //       damage: 4,
          //       toughness: 0,
          //       power: 1,
          //       evasion: 0,
          //       accuracy: 0
          //     }
          //   ],
          //   centaur: [
          //     {
          //       name: 'Knockout Punch [centaur]',
          //       damage: 5,
          //       toughness: 0,
          //       power: 0,
          //       evasion: 0,
          //       accuracy: 0
          //     },
          //     {
          //       name: 'Running Punch [centaur]',
          //       damage: 3,
          //       toughness: 0,
          //       power: 0,
          //       evasion: 1,
          //       accuracy: 0
          //     },
          //     {
          //       name: 'Stampede [centaur]',
          //       damage: 1,
          //       toughness: 1,
          //       power: 1,
          //       evasion: 0,
          //       accuracy: 0
          //     }
          //   ],
          //   Fighter: [
          //     {
          //       name: 'Hoof Kick [Fighter centaur]',
          //       damage: 4,
          //       toughness: 0,
          //       power: 1,
          //       evasion: 0,
          //       accuracy: 0
          //     }
          //   ],
          //   Archer: [
          //     {
          //       name: 'Power Shot [Archer centaur]',
          //       damage: 2,
          //       toughness: 0,
          //       power: 2,
          //       evasion: 0,
          //       accuracy: 0
          //     }
          //   ],
          //   wizard: [
          //     {
          //       name: 'Lightning [wizard]',
          //       damage: 4,
          //       toughness: 0,
          //       power: 0,
          //       evasion: 0,
          //       accuracy: 0
          //     },
          //     {
          //       name: 'Petrify [wizard]',
          //       damage: 3,
          //       toughness: 0,
          //       power: 0,
          //       evasion: 1,
          //       accuracy: 0
          //     },
          //     {
          //       name: 'Raise Dead [wizard]',
          //       damage: 0,
          //       toughness: 1,
          //       power: 1,
          //       evasion: 1,
          //       accuracy: 0
          //     }
          //   ],
          //   'White Arts': [
          //     {
          //       name: 'Protect [White Arts wizard]',
          //       damage: 0,
          //       toughness: 2,
          //       power: 1,
          //       evasion: 1,
          //       accuracy: 0
          //     }
          //   ],
          //   '?????': [
          //     {
          //       name: 'Demi [????? wizard]',
          //       damage: 1,
          //       toughness: 0,
          //       power: 3,
          //       evasion: 0,
          //       accuracy: 0
          //     }
          //   ],
          //   viking: [
          //     {
          //       name: 'Smash [viking]',
          //       damage: 4,
          //       toughness: 0,
          //       power: 0,
          //       evasion: 0,
          //       accuracy: 0
          //     },
          //     {
          //       name: 'Slice and Dice [viking]',
          //       damage: 3,
          //       toughness: 0,
          //       power: 0,
          //       evasion: 0,
          //       accuracy: 1
          //     },
          //     {
          //       name: 'Berserk [viking]',
          //       damage: 0,
          //       toughness: 0,
          //       power: 2,
          //       evasion: 0,
          //       accuracy: 0
          //     }
          //   ],
          //   Invader: [
          //     {
          //       name: 'Ravage [Invader viking]',
          //       damage: 3,
          //       toughness: 0,
          //       power: 0,
          //       evasion: 1,
          //       accuracy: 1
          //     }
          //   ],
          //   Destroyer: [
          //     {
          //       name: 'Rampage [Destroyer viking]',
          //       damage: 2,
          //       toughness: 1,
          //       power: 2,
          //       evasion: 0,
          //       accuracy: 0
          //     }
          //   ],
          //   blackMage: [
          //     {
          //       name: 'Fire [blackMage]',
          //       damage: 4,
          //       toughness: 0,
          //       power: 0,
          //       evasion: 0,
          //       accuracy: 0
          //     },
          //     {
          //       name: 'Blizzard [blackMage]',
          //       damage: 2,
          //       toughness: 0,
          //       power: 0,
          //       evasion: 1,
          //       accuracy: 1
          //     },
          //     {
          //       name: 'Magic Armor [blackMage]',
          //       damage: 0,
          //       toughness: 2,
          //       power: 0,
          //       evasion: 0,
          //       accuracy: 0
          //     }
          //   ],
          //   Hellfire: [
          //     {
          //       name: 'Eternal Flame [Hellfire blackMage]',
          //       damage: 3,
          //       toughness: 0,
          //       power: 1,
          //       evasion: 0,
          //       accuracy: 1
          //     }
          //   ],
          //   'Subzero Ice': [
          //     {
          //       name: 'Freeze [Subzero Ice blackMage]',
          //       damage: 3,
          //       toughness: 1,
          //       power: 0,
          //       evasion: 1,
          //       accuracy: 0
          //     }
          //   ]
          // }

          // if (sessionStorage.subclass !== undefined) {
          //   $scope.subtype = sessionStorage.subclass;
          //   if ($scope.moves[$scope.subtype] !== undefined) {
          //     $scope.moves[$scope.chartype].push($scope.moves[$scope.subtype][0]);
          //     console.log('$scope.moves[$scope.chartype]', $scope.moves[$scope.chartype]);
          //   }
          // }
          // if (sessionStorage.move3index !== undefined) {
          //   $scope.move3index = sessionStorage.move3index;
          //   console.log('sessionStorage.move3index', sessionStorage.move3index);
          // }



// More stuff
