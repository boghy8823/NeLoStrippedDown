window.angular.module('ngff.controllers.leagues', [])
  .controller('LeaguesController', ['$scope', '$routeParams', '$location', 'Global', 'Leagues',
    function ($scope, $routeParams, $location, Global, Leagues) {
        $scope.global = Global;


        // Create
        $scope.create = function () {
            var league = new Leagues({
                name: this.league.name
            });

            league.$save(function (response) {
                $location.path("leagues/" + response._id);
            });

            this.league.name = "";
        };


        // Find 
        $scope.find = function (query) {
            Leagues.query(query, function (leagues) {
                console.log("Leagues", leagues);
                $scope.leagues = leagues;
            });
        };

        // Find One 
        $scope.findOne = function () {
            Leagues.get({ leagueId: $routeParams.leagueId }, function (league) {
                $scope.league = league;
            });
        };

        // Update 
        $scope.update = function () {
            var league = $scope.league;
            league.$update(function () {
                $location.path('leagues/' + league._id);
            });
        };

        // Destroy 
        $scope.destroy = function (league) {
            league.$remove();
            for (var i in $scope.leagues) {
                if ($scope.leagues[i] == league) {
                    $scope.leagues.splice(i, 1)
                }
            }
        };


    }]);