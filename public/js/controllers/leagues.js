window.angular.module('ngff.controllers.leagues', [])
  .controller('LeaguesController', ['$scope', '$routeParams', '$location', 'Global', 'Leagues',
    function ($scope, $routeParams, $location, Global, Leagues) {
        $scope.global = Global;


        $scope.dateOptions = {
            changeYear: true,
            changeMonth: true,
            yearRange: '1900:-0'
        };

        // Book that shit real good

        $scope.bookFunc = function () {
           
            var league = $scope.league;
            league.startDate = this.league.start;
            league.endDate = this.league.end;

            console.log("Start Date", league.startDate);
            console.log("Start Date", league.endDate);

            league.$update(function () {
                $location.path('leagues/' + league._id);
            });
        };
        // Create
        $scope.create = function () {
            var league = new Leagues({
                name: this.league.name,
                room_type: this.league.room_type,
                room_capacity: this.league.room_capacity,
                room_facilities: this.league.room_facilities,
                room_description: this.league.room_description,
                room_price: this.league.room_price,
                startDate: this.league.startDate,
                endDate: this.league.endDate
            });
            
            console.log("League controller", league);
          
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