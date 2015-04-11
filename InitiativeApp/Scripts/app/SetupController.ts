module InitiativeApp {
    export interface ISetupScope extends ng.IScope {
        players: Player[];
        monsters: Monster[];
    }

    export class SetupController {
        static $inject = ["$scope", "initiativeService", "$state", "$modal"];

        constructor(private scope: ISetupScope, private initiativeService: InitiativeService, private state: ng.ui.IStateService, private modal: ng.ui.bootstrap.IModalService) {
            this.scope.players = this.initiativeService.loadPlayers();
            this.scope.monsters = this.initiativeService.loadMonsters();
        }

        public createPlayer() {
            this.scope.players.push(new Player());
        }

        public createMonster() {
            this.scope.monsters.push(new Monster());
        }

        public update(combatant?: ICombatant) {
            this.initiativeService.savePlayers(this.scope.players);
            this.initiativeService.saveMonsters(this.scope.monsters);
        }

        private addPlayer(player: Player): void {
            this.scope.players.push(player);
            this.initiativeService.savePlayers(this.scope.players);
        }

        public removePlayer(player: Player): void {
            this.scope.players = this.scope.players.filter(each => each != player);
            this.initiativeService.savePlayers(this.scope.players);
        }

        public addMonster(monster: Monster): void {
            this.scope.monsters.push(monster);
            this.initiativeService.saveMonsters(this.scope.monsters);
        }

        public removeMonster(monster: Monster): void {
            this.scope.monsters = this.scope.monsters.filter(each => each != monster);
            this.initiativeService.saveMonsters(this.scope.monsters);
        }

        public rollInitiative(): void {
            this.scope.monsters.forEach(monster => monster.rollInitiative());
            this.scope.players.forEach(player => player.rollInitiative());
            this.update();
        }

        public startGame(): void {
            this.initiativeService.setCombatants(this.scope.players.concat(this.scope.monsters));
            this.state.go("play");
        }
    }
}