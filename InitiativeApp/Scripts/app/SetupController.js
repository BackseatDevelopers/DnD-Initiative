var InitiativeApp;
(function (InitiativeApp) {
    var SetupController = (function () {
        function SetupController(scope, initiativeService, state, modal) {
            this.scope = scope;
            this.initiativeService = initiativeService;
            this.state = state;
            this.modal = modal;
            this.scope.players = this.initiativeService.loadPlayers();
            this.scope.monsters = this.initiativeService.loadMonsters();
        }
        SetupController.prototype.createPlayer = function () {
            this.scope.players.push(new InitiativeApp.Player());
        };
        SetupController.prototype.createMonster = function () {
            this.scope.monsters.push(new InitiativeApp.Monster());
        };
        SetupController.prototype.update = function (combatant) {
            this.initiativeService.savePlayers(this.scope.players);
            this.initiativeService.saveMonsters(this.scope.monsters);
        };
        SetupController.prototype.addPlayer = function (player) {
            this.scope.players.push(player);
            this.initiativeService.savePlayers(this.scope.players);
        };
        SetupController.prototype.removePlayer = function (player) {
            this.scope.players = this.scope.players.filter(function (each) { return each != player; });
            this.initiativeService.savePlayers(this.scope.players);
        };
        SetupController.prototype.addMonster = function (monster) {
            this.scope.monsters.push(monster);
            this.initiativeService.saveMonsters(this.scope.monsters);
        };
        SetupController.prototype.removeMonster = function (monster) {
            this.scope.monsters = this.scope.monsters.filter(function (each) { return each != monster; });
            this.initiativeService.saveMonsters(this.scope.monsters);
        };
        SetupController.prototype.rollInitiative = function () {
            this.scope.monsters.forEach(function (monster) { return monster.rollInitiative(); });
            this.scope.players.forEach(function (player) { return player.rollInitiative(); });
            this.update();
        };
        SetupController.prototype.startGame = function () {
            this.initiativeService.setCombatants(this.scope.players.concat(this.scope.monsters));
            this.state.go("play");
        };
        SetupController.$inject = ["$scope", "initiativeService", "$state", "$modal"];
        return SetupController;
    })();
    InitiativeApp.SetupController = SetupController;
})(InitiativeApp || (InitiativeApp = {}));
//# sourceMappingURL=SetupController.js.map