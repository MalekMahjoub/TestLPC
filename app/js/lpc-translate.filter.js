'use strict';

angular.module('LpcWebTest2018')
    .filter('lpcTranslate', ['LpcTranslateService', '$rootScope', function (LpcTranslateService, $rootScope) {
        //TODO


        var lang = "";

        $rootScope.changeLocale = function (selected) {
            
            $rootScope.locale = selected;
            lang = $rootScope.locale;
            sessionStorage.setItem('lang', lang);
        }
        var translate=null;
        LpcTranslateService.loadProperties().then(function(value) {
            translate = value.data
        });

        var filter = function (key, locale) {
            return translate[locale][key];

        }
        //TODO


        return filter;
    }]);
