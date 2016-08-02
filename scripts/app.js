'use strict';

/**
 * @ngdoc overview
 * @name stockCatApp
 * @description
 * # stockCatApp
 *
 * Main module of the application.
 */
angular
  .module('stockCatApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    // register the angular-strap
    'mgcrea.ngStrap'
  ])
  .config(function ($routeProvider) {
  });
