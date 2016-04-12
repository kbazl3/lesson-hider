angular.module("app")
    .service("lessonService", function($http) {

        this.getSchedule = function() {
            return $http({
                method: "GET",
                url: 'schedule.json'
            });
        };

});
