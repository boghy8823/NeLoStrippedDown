//Setting up route
window.app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/',
    {
        templateUrl: 'views/index.html'
    })
    .when('/nflteams',
    {
        templateUrl: 'views/nfl/list.html'
    })
    .when('/nflteams/:nflTeamId',
    {
        templateUrl: 'views/nfl/view.html'
    })
      .when('/leagues',
      {
          templateUrl: 'views/leagues/list.html'
      })
      .when('/admin/leagues/create',
      {
          templateUrl: 'views/leagues/create.html'
      })
      .when('/admin/leagues/:leagueId/edit',
      {
          templateUrl: 'views/leagues/edit.html'
      })
      .when('/admin/leagues/:leagueId',
      {
          templateUrl: 'views/leagues/admin_view.html'
      })
      .when('/leagues/:leagueId',
      {
          templateUrl: 'views/leagues/view.html'
      })
      .when('/myBookings',
      {
          templateUrl: 'views/leagues/myBookings.html'
      })
      .when('/admin/latest',
      {
          templateUrl: 'views/leagues/latestBookings.html'
      })
      .when('/admin/leagues',
      {
          templateUrl: 'views/leagues/admin_list.html'
      })
      .when ('/contact',
        {  
          templateUrl: 'views/leagues/contact.html'
        })
      .when ('/about',
       {
          templateUrl: 'views/leagues/about.html'

      })
    .otherwise({ redirectTo: '/' });
}]);

//Removing tomcat unspported headers
window.app.config(['$httpProvider', function($httpProvider, Configuration) {
    //delete $httpProvider.defaults.headers.common["X-Requested-With"];
}]);

//Setting HTML5 Location Mode
window.app.config(['$locationProvider', function($locationProvider) {
    //$locationProvider.html5Mode(true);
    $locationProvider.hashPrefix("!");
}]);