'use strict';

angular.module('LpcWebTest2018')
    .directive('lpcLazyBackground', [function () {
  var lpcLazyBackgroundLink = function (scope, elem, attr) {
    
    var image = document.createElement('img');
    image.src = scope.lpcLazyBackground;
    image.onload = function () {
      elem[0].style.backgroundImage = "url('"+scope.lpcLazyBackground+"')"; 
    };
    
  }
  return {
    restrict: 'A', scope: {lpcLazyBackground: '='}, link: lpcLazyBackgroundLink
  }
  
}]);
