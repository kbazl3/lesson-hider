angular.module("app")
    .controller("mainCtrl", function($scope) {

        $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

        $scope.announceDay = function(lesson, day) {
            if (day === undefined) {
                day = "TBD";
            }
            alert(lesson + ' is active on ' + day + '.');
        };
});
