window.app = angular.module('Nelo', ['ngCookies', 'ngResource', 'ui.bootstrap', 'ngRoute', 'ngff.controllers', 'ngff.directives', 'ngff.services','datePicker']);

// bundling dependencies
window.angular.module('ngff.controllers', ['ngff.controllers.header', 'ngff.controllers.index', 'ngff.controllers.nfl', 'ngff.controllers.leagues', 'ngff.controllers.adminLeagues']);
window.angular.module('ngff.services', ['ngff.services.global', 'ngff.services.nfl', 'ngff.services.leagues']);