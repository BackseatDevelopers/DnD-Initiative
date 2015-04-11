var InitiativeApp;
(function (InitiativeApp) {
    var InitiativeService = (function () {
        function InitiativeService() {
            this.combatants = [];
        }
        InitiativeService.prototype.setCombatants = function (combatants) {
            this.combatants = combatants;
        };
        InitiativeService.prototype.getCombatants = function () {
            return this.combatants;
        };
        InitiativeService.prototype.loadPlayers = function () {
            var playersString = localStorage.getItem("players");
            return playersString ? JSON.parse(playersString).map(function (player) { return new InitiativeApp.Player(player); }) : [];
        };
        InitiativeService.prototype.savePlayers = function (players) {
            localStorage.setItem("players", JSON.stringify(players));
        };
        InitiativeService.prototype.loadMonsters = function () {
            var monstersString = sessionStorage.getItem("monsters");
            return monstersString ? JSON.parse(monstersString).map(function (monster) { return new InitiativeApp.Monster(monster); }) : [];
        };
        InitiativeService.prototype.saveMonsters = function (monsters) {
            sessionStorage.setItem("monsters", JSON.stringify(monsters));
        };
        return InitiativeService;
    })();
    InitiativeApp.InitiativeService = InitiativeService;
})(InitiativeApp || (InitiativeApp = {}));
//# sourceMappingURL=InitiativeService.js.map