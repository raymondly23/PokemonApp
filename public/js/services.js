'use strict'

var app = angular.module('routingApp');

app.service('PokeService', function($http) {


  this.getPokemon = () => {
   $http.get('http://pokeapi.co/api/v2/pokemon/')
   .then(res => {
    this.pokemon = res.data.results;
  }, err => {
    console.error('PokeService error:', err)
  })
 };

 this.info = () => {
  $http.get(`http://pokeapi.co/api/v2/pokemon/${this.pokemon.id}`)
  .then(res => {
    this.data = res
  }, err => {
    console.error('PokeService error:', err)
  })
};


});