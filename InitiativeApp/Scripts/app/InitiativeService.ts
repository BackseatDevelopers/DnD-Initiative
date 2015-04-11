module InitiativeApp {
    export class InitiativeService {
        private combatants: ICombatant[];

        constructor() {
            this.combatants = [];
        }

        public setCombatants(combatants: ICombatant[]) {
            this.combatants = combatants;
        }

        public getCombatants(): ICombatant[] {
            return this.combatants;
        }

        public loadPlayers(): Player[] {
            var playersString = localStorage.getItem("players");
            return playersString ? JSON.parse(playersString).map((player: Player) => new Player(player)) : [];
        }

        public savePlayers(players: Player[]) {
            localStorage.setItem("players", JSON.stringify(players));
        }

        public loadMonsters(): Monster[] {
            var monstersString = sessionStorage.getItem("monsters");
            return monstersString ? JSON.parse(monstersString).map((monster: Monster) => new Monster(monster)) : [];
        }

        public saveMonsters(monsters: Monster[]) {
            sessionStorage.setItem("monsters", JSON.stringify(monsters));            
        }
    }
} 