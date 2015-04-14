var InitiativeApp;
(function (InitiativeApp) {
    var StateConfig = (function () {
        function StateConfig() {
        }
        StateConfig.configure = function (stateProvider) {
            var states = [
                {
                    name: "setup",
                    url: "/Setup",
                    templateUrl: "Setup.html",
                    controller: "setupController",
                    controllerAs: "setupCtrl",
                },
                {
                    name: "play",
                    url: "/Play",
                    templateUrl: "Play.html",
                    controller: "playController",
                    controllerAs: "playCtrl"
                }
            ];
            states.forEach(function (state) {
                stateProvider.state(state);
            });
        };
        return StateConfig;
    })();
    InitiativeApp.StateConfig = StateConfig;
    var initiativeApp = angular.module("initiativeApp", ["ui.router", "ui.bootstrap"]);
    initiativeApp.service("initiativeService", InitiativeApp.InitiativeService);
    initiativeApp.controller("setupController", InitiativeApp.SetupController);
    initiativeApp.controller("playController", InitiativeApp.PlayController);
    initiativeApp.config(["$stateProvider", function (stateProvider) {
        StateConfig.configure(stateProvider);
    }]);
    initiativeApp.run(["$state", function (state) {
        state.go("setup");
    }]);
})(InitiativeApp || (InitiativeApp = {}));
//# sourceMappingURL=InitiativeApp.js.map