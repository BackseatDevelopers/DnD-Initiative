module InitiativeApp {
    export class StateConfig {
        public static configure(stateProvider: ng.ui.IStateProvider): void {
            var states: ng.ui.IState[] = [
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

            states.forEach((state: ng.ui.IState) => {
                stateProvider.state(state);
            });
        }
    }


    var initiativeApp = angular.module("initiativeApp", ["ui.router", "ui.bootstrap"]);

    initiativeApp.service("initiativeService", InitiativeService);
    initiativeApp.controller("setupController", SetupController);
    initiativeApp.controller("playController", PlayController);

    initiativeApp.config(["$stateProvider", (stateProvider: ng.ui.IStateProvider) => {
        StateConfig.configure(stateProvider);
    }]);

    initiativeApp.run(["$state", (state: ng.ui.IStateService) => {
        state.go("setup");
    }]);
}