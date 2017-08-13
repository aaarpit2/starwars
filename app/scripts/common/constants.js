(function () {
    'use strict';

    angular
      .module('starwarApp.common')
      //Store app level constants
      .constant('Constants', {
            baseUrl : 'https://swapi.co/api'
      })
})();
