angular.module("app")
    .directive('lessonHider', function() {
        return {
            restrict: 'E',
            templateUrl: "/lessonHider.html",
            scope: {
                //telling our directive that we plan on having an attribute named lesson and we want to create a two way data binding between
                lesson: "=", //our directive and the parent controller on whatever value is passed to that attribute.
                dayAlert: "&"
            },

            link: function(scope, element, attribute) {
                scope.getSchedule
                    .then(function(response) {
                        scope.schedule = response.data;
                        // console.log(scope.schedule);

                        scope.schedule.forEach(function(scheduleDay) {
                            if (scheduleDay.lesson === scope.lesson) { //if the lesson in this array is already in the lessons array on the main Ctrl
                                element.css("text-decoration", "line-through"); //cross out that lesson
                                // element.append("<input type='checkbox' checked/>")
                                scope.lessonDay = scheduleDay.weekday; //assign lessonDay to the weekay property
                                return;
                            }

                        });
                    });
            },
            controller: function($scope, lessonService) {
                $scope.getSchedule = lessonService.getSchedule();
            }
        };
    });
