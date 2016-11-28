'use strict';

(function () {

    function charController($scope, $stateParams) {
        $scope.start = function () {
            $scope.showNarrative = true;
            $scope.characters = [
              {type: "centaur", url: "../../img/characters/centaur.svg"},
              {type: "elvenArcher", url: "../../img/characters/elvenArcher.svg"},
              {type: "dwarfWarrior", url: "../../img/characters/dwarfWarrior.svg"},
              {type: "blackMage", url: "../../img/characters/blackMage.svg"},
              {type: "viking", url: "../../img/characters/viking.svg"},
              {type: "wizard", url: "../../img/characters/wizard.svg"}
            ];
            $scope.chooseChar = false;
            $scope.nextText = "Next";
            $scope.narrative = [
              "I hope you pick well!",
              "Welcome to the character selection! Choose a character."
            ];
            $scope.nextNarrative = $scope.narrative.pop();

            $scope.charDescriptions = {
              centaur: "Rufus is half-man, half-horse. He's tough and strong.",
              elvenArcher: "Olivia is an adept archer. She's quick and strong.",
              dwarfWarrior: "Dominic is mighty dwarf. He's the toughest.",
              blackMage: "Scarlett is a black mage. She has the most knowledge of black arts.",
              viking: "Mason is a viking. He has the highest endurance.",
              wizard: "Sage. We don't know anything about him or her."
            };
            $scope.instruction = 'Click on the RED box to Select the character you want.';
        };

        $scope.charClick = (charName) => {
          console.log('charName ' + charName);
          $scope.nextNarrative = $scope.charDescriptions[charName];
          $scope.selectedChar = charName;
          sessionStorage.chartype = charName;
          sessionStorage.subclass = 'defaultSubclass';
        };

        $scope.storyClick = () => {
          $scope.nextNarrative = $scope.narrative.pop();

          if ($scope.narrative.length < 1) {
            $scope.nextText = "Back to beginning";
          } else {
            $scope.nextText = "Next";
          }

          if($scope.narrative.length < 1) {
            $scope.chooseChar = true;
            $scope.narrative = [
							"I hope you pick well!",
              "Welcome to char selection! Choose a character."
            ];
          }
        }

        $scope.pickRandom = () => {
          $scope.randomInt = Math.floor(Math.random()*6);
          console.log('$scope.randomInt', $scope.randomInt);

          // console.log('charName ' + charName);
          $scope.selectedChar = $scope.characters[$scope.randomInt].type;
          sessionStorage.chartype = $scope.selectedChar;
          console.log('$scope.selectedChar', $scope.selectedChar);
          console.log('sessionStorage.chartype', sessionStorage.chartype);
          sessionStorage.subclass = 'defaultSubclass';
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

        $scope.tipForUser = "<-- Click red box to select";
        $scope.start();

    }

    app.controller('charController', ['$scope', '$stateParams', charController]);

})();
