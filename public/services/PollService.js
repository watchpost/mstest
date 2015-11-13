app.factory('pollService', ['$http', function ($http) {

    return {
        Load: function (pollName, callback) {
            $http.get('/api/poll/' + pollName)
                .success(function (retval) {
                    callback(retval);
                })
                .error(function (err) {
                    console.log(err);
                });
        },
        Vote: function (pollId, optionName, callback) {

            var params = { id : pollId, name: optionName}

            $http.post('/api/poll', params)
                .success(function (retval) {
                    callback(retval);
                })
                .error(function (err) {
                    console.log(err);
                });
        }
    }


}]);