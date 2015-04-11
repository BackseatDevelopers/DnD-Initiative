var InitiativeApp;
(function (InitiativeApp) {
    var PlayController = (function () {
        function PlayController(scope, initiativeService, state) {
            this.scope = scope;
            this.state = state;
            this.currentIndex = 0;
            if (initiativeService.getCombatants().length == 0) {
                this.endCombat();
            }
            this.scope.combatants = initiativeService.getCombatants().sort(function (c1, c2) { return c2.compareInitiative(c1); });
            this.scope.combatants.forEach(function (each) {
                each.isActive = false;
                each.isAlive = true;
            });
            this.scope.combatants[this.currentIndex].isActive = true;
        }
        PlayController.prototype.activateNextCombatant = function () {
            this.scope.combatants[this.currentIndex].isActive = false;
            if (this.currentIndex == this.scope.combatants.length - 1) {
                this.currentIndex = 0;
            }
            else {
                this.currentIndex++;
            }
            if (!this.scope.combatants[this.currentIndex].isAlive) {
                this.activateNextCombatant();
            }
            this.scope.combatants[this.currentIndex].isActive = true;
        };
        PlayController.prototype.endCombat = function () {
            this.state.go("setup");
        };
        PlayController.$inject = ["$scope", "initiativeService", "$state"];
        return PlayController;
    })();
    InitiativeApp.PlayController = PlayController;
})(InitiativeApp || (InitiativeApp = {}));
//# sourceMappingURL=PlayController.js.map