'use strict';

(function () {

    function homeController($scope) {
        $scope.start = function () {
            //Write your code here
            $scope.chooseChar = false;
            $scope.nextText = "Next";
            $scope.narrative = [
              "You're ready to fight for the village!",
              "Or games like this one!",
              "You can then develop web and mobile applications!",
              "Primarily we teach JavaScript.",
              "You'll learn a ton!",
              "I hope you enjoy it!",
              "Welcome to the game"
            ];
            $scope.nextNarrative = $scope.narrative.pop();
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
              "You're ready to fight for the village!",
              "Or games like this one!",
              "You can then develop web and mobile applications!",
              "Primarily we teach JavaScript.",
              "You'll learn a ton!",
              "I hope you enjoy it!",
              "Welcome to the game"
            ];
          }
        }

        $scope.start();

    }

    app.controller('homeController', ['$scope', homeController]);

})();
