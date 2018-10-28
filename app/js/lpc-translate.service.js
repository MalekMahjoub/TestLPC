angular.module('LpcWebTest2018')
    .service('LpcTranslateService', ['$http', '$rootScope', function ($http, $rootScope) {

        //TODO
        var myUrl = "";
        if (sessionStorage.getItem('lang') == null) {

            sessionStorage.setItem('lang', 'fr');
            $rootScope.locale = 'fr';
        }

        $rootScope.locale = sessionStorage.getItem('lang');

        setPropertiesUrlImpl = function (url) {
            //TODO
            myUrl = url;


        },
        loadPropertiesImpl = function () {
                
            return $http.get(myUrl);

        }

        return {
            setPropertiesUrl: setPropertiesUrlImpl,
            loadProperties: loadPropertiesImpl
        }
    }]);
