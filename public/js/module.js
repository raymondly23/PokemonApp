'use strict'

var app = angular.module('routingApp', ['ui.router']);

app.run(function(PokeService) {
  PokeService.getPokemon();
});

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/html/home.html',
  })
  .state('list', {
    url: '/list',
    templateUrl: '/html/list.html',
    controller: 'listCtrl'
  })
  .state('pokemon', {
    url: '/pokemon/:id',
    templateUrl: '/html/pokemon.html',
    controller: 'pokeCtrl'
  })


  $urlRouterProvider.otherwise('/');
})

