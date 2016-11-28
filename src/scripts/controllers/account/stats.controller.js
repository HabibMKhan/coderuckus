'use strict';

(function () {

    function statsController($scope, $stateParams) {
        $scope.start = function () {
          if (sessionStorage.subclass) {
            $scope.subclass = sessionStorage.subclass;
          } else {
            $scope.subclass = 'defaultSubclass';
            sessionStorage.subclass = 'defaultSubclass';
          }
          if(sessionStorage.name && sessionStorage.name !=='defaultName') {
            $scope.charName = sessionStorage.name;
          } else {
            $scope.charName = 'defaultName';
            sessionStorage.name = 'defaultName';
          }
          if(sessionStorage.chartype && sessionStorage.chartype !=='defaultType') {
            $scope.chartype = sessionStorage.chartype;
          }
          sessionStorage.name = $scope.charName;
          sessionStorage.chartype = $scope.chartype;
          sessionStorage.subclass = $scope.subclass;

          $scope.characters = [
            {type: "centaur", url: "../../img/characters/centaur.svg"},
            {type: "elvenArcher", url: "../../img/characters/elvenArcher.svg"},
            {type: "dwarfWarrior", url: "../../img/characters/dwarfWarrior.svg"},
            {type: "blackMage", url: "../../img/characters/blackMage.svg"},
            {type: "viking", url: "../../img/characters/viking.svg"},
            {type: "wizard", url: "../../img/characters/wizard.svg"}
          ];

          $scope.classCollections = {
            centaur: ["Fighter", "Archer"],
            elvenArcher: ["Elemental", "Lethal"],
            dwarfWarrior: ["Mountain", "Hillside"],
            blackMage: ["Hellfire", "Subzero Ice"],
            viking: ["Invader", "Destroyer"],
            wizard: ["White Arts", "?????"]
          }

          $scope.imgUrl = '../../img/characters/'+ $scope.chartype + '.svg';

          try {
            $scope.classes = $scope.classCollections[$scope.chartype];
          } catch (e) {
            console.log(e);
          }

          $scope.getClasses = () => {
            $scope.classes = $scope.classCollections[$scope.chartype];
          }

          $scope.setSubclass = (index) => {
            // $scope.subclass = 'balloon';
            $scope.subclass = $scope.classCollections[$scope.chartype][index];
            sessionStorage.subclass = $scope.subclass;
          }
        };
        $scope.setCharstats = () => {
          sessionStorage.name = $scope.charName;
          sessionStorage.chartype = $scope.chartype;
          sessionStorage.subclass = $scope.subclass;
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
        
        $scope.start();

    }

    app.controller('statsController', ['$scope', '$stateParams', statsController]);

})();
