trackerApp
    .factory('userService', [
        '$http',
        '$q',
        'BASE_URL',
        function ($http, $q, BASE_URL) {

            //todo
            function getCurrentUser() {

                var deferred = $q.defer();
                var request = {
                    method: 'GET',
                    url: BASE_URL + 'Users/me',
                    headers: {
                        Authorization: "Bearer "+sessionStorage["token"]
                    }
                };
                $http(request)
                    .then(function (response) {
                        console.log(response.data);
                        deferred.resolve(response.data)
                    }, function (err) {
                        deferred.reject(err)
                    });
                return deferred.promise;
            }

            function getAllUser() {

                var deferred = $q.defer();
                var request = {
                    method: 'GET',
                    url: BASE_URL + 'Users/',
                    headers: {
                        Authorization: "Bearer "+sessionStorage["token"]
                    }
                };
                $http(request)
                    .then(function (response) {
                        deferred.resolve(response.data)
                    }, function (err) {
                        deferred.reject(err)
                    });
                return deferred.promise;
            }

            function makeAdmin(id) {

                var deferred = $q.defer();
                var request = {
                    method: 'PUT',
                    url: BASE_URL + 'Users/makeadmin',
                    data : {
                        'UserId' : id
                    },
                    headers: {
                        Authorization: "Bearer "+sessionStorage["token"]
                    }
                };
                $http(request)
                    .then(function (response) {
                        console.log(response.data);
                        deferred.resolve(response.data)
                    }, function (err) {
                        deferred.reject(err)
                    });
                return deferred.promise;
            }

            return {
                getCurrentUser: getCurrentUser,
                getAllUser: getAllUser,
                makeAdmin: makeAdmin
            }
        }
    ]);