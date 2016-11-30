var app = angular.module('taskApp', []);

app.controller('MainController', function ($scope, $http) {
    $scope.tasks = [];
    $http.get('http://localhost:4000/api/tasks')
         .success(function (data) {
             $scope.tasks = data;
         }).error(function (err) {
             alert(err);
         });

    $scope.postTask = function() {
        $http.post('http://localhost:4000/api/tasks', {'userid': $scope.newTask0, 'messageid': $scope.newTask1, 'title': $scope.newTask, 'time': $scope.newTask2, 'content': $scope.newTask3})
            .success(function(data) {
                $scope.newTask0 = ''; // userid - clear the form so our user is ready to enter another
                $scope.newTask1 = ''; // messageid - clear the form so our user is ready to enter another
                $scope.newTask = ''; // title - clear the form so our user is ready to enter another
                $scope.newTask2 = ''; // time - clear the form so our user is ready to enter another
                $scope.newTask3 = ''; // content - clear the form so our user is ready to enter another                
                $scope.tasks = data;
            })
            .error(function(err) {
                console.log('Error: ' + err);
            });
    }
});
