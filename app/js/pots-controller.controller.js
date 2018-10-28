'use strict';

angular.module('LpcWebTest2018')
    .controller('PotsController', ['$scope', 'PotsService', function ($scope, PotsService) {
        //TODO
        
        $scope.pots = []
        PotsService.get().then(function (response) {
            $scope.pots = response.data;
            
        });


    }]);
