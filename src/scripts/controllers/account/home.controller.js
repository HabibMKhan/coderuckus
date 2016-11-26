'use strict';

(function () {

    function homeController($scope, $stateParams) {
        $scope.start = function () {
            //Write your code here
            $scope.chooseChar = false;
            $scope.nextText = "Next";
            $scope.narrative = [
              "Yvette: So get ready to fight to protect the village! Click the green button to choose a character.",
              "Yvette: Anyway, the village is in danger...",
              "Yvette: Or you can make a game like this one!",
              "Yvette: Knowing JS will allow you to build web or mobile apps!",
              "Yvette: Playing this game will teach you JavaScript :)",
              "Yvette: Hi there, welcome to Code Ruckus!"
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
          } else {
            $scope.chooseChar = false;
          }
          if($scope.narrative.length < 1) {

            $scope.narrative = [
              "Yvette: So get ready to fight to protect the village! Click the green button to choose a character.",
              "Yvette: Anyway, the village is in danger...",
              "Yvette: Or you can make a game like this one!",
              "Yvette: Knowing JS will allow you to build web or mobile apps!",
              "Yvette: Playing this game will teach you JavaScript :)",
              "Yvette: Hi there, welcome to Code Ruckus!",
              "Yvette: Alright I'll repeat myself... you better listen this time :P"
            ];
          }
        }

        $scope.start();

    }

    app.controller('homeController', ['$scope', '$stateParams', homeController]);

})();
