window.angular.module('ngff.controllers.leagues', [])
  .controller('LeaguesController', ['$scope', '$routeParams', '$location', 'Global', 'Leagues',
    function ($scope, $routeParams, $location, Global, Leagues) {
        $scope.global = Global;


        $scope.dateOptions = {
            changeYear: true,
            changeMonth: true,
            yearRange: '1900:-0'
        };

        // Book that  real good

        $scope.bookFunc = function () {

            var league = $scope.league;
            var overbooking = false;
            console.log("Input value", this.league.start);

            if (league.bookingDate.length > 0) {

                var DatesArray = [];
                var startingDatesArray = [];

                for (var key in league.bookingDate) {
                    DatesArray.push(league.bookingDate[key]);
                    console.log("This is Dates Array", DatesArray)
                }

                for (var i = 0; i < DatesArray.length; i++) {
                    startingDatesArray.push(Math.round(new Date(DatesArray[i].startDate).getTime() / 1000));
                }

                var inputValue = Math.round(new Date(this.league.start).getTime() / 1000);
                
                console.log("My date", inputValue);

                if (startingDatesArray.indexOf(inputValue) != -1) {
                    overbooking = true;
                    console.log("Overbooking neniccaaa");
                    
                    $('.overbooking-form').css('display','inline-block');
                    $('.overbooking-message').css('display', 'inline-block');
                   
                }
                console.log("start Array", startingDatesArray);

            }
            league.bookingDate.push({ startDate: this.league.start, endDate: this.league.end, booked: true });
            league.overall_booked = true;

            if (overbooking != true) {

                $('.overbooking-form').hide();
                $('.overbooking-message').hide();

                league.$update(function () {
                    $location.path('leagues/' + league._id);
                    $('.facilities').hide();
                    $('.success-message').show();
                    setTimeout(function () {
                        $('.success-message').hide();
                        $('.facilities').show();
                    }, 3500);
                });
            }
         
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
                endDate: this.league.endDate,
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