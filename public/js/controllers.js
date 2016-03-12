'use strict'

var app = angular.module('routingApp');


app.controller('listCtrl', function($scope, $http, $state, PokeService) {
  $scope.$watch(function() {
    return PokeService.pokemon;
  }, function(newVal, oldVal) {
    $scope.pokemons = newVal;
  });

  $scope.go = function() {
    $http.get(this.pokemon.url)
    .then(function(res) {
      $state.go('pokemon', {
        id: res.data.id
      })
      console.log('res',res)
    }, function(err) {
      console.log('err', err)
    })
  }

  $scope.pagination = function(page) {
    var pages = (page - 1) * 20;
    $http.get(`http://pokeapi.co/api/v2/pokemon/?limit=20&offset=${pages}`)
    .then(function(res) {
      $scope.pokemons = res.data.results;
    }, function(err) {
      console.error('err', err)
    })
  }
});

app.controller('pokeCtrl', function($scope, $http, $stateParams, PokeService) {
  $http.get(`http://pokeapi.co/api/v2/pokemon/${$stateParams.id}/`)
  .then(function(res) {
    $scope.pokemon = res.data
    console.log('res',res)
  }, function(err) {
    console.error('err:', err)
  })




})