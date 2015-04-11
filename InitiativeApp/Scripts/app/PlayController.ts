module InitiativeApp {
    export interface IRoundCombatant extends ICombatant {
        isActive: boolean;
        isAlive: boolean;
    }

    export interface IPlayScope extends ng.IScope {
        combatants: IRoundCombatant[];
        currentCombatant: IRoundCombatant;
    }

    export class PlayController {
        private currentIndex: number = 0;
        static $inject = ["$scope", "initiativeService", "$state"];

        constructor(private scope: IPlayScope, initiativeService: InitiativeService, private state: ng.ui.IStateService) {
            if (initiativeService.getCombatants().length == 0) {
                this.endCombat();
            }
            this.scope.combatants = <IRoundCombatant[]>initiativeService.getCombatants().sort((c1, c2) => c2.compareInitiative(c1));
            this.scope.combatants.forEach(each => {
                each.isActive = false;
                each.isAlive = true;
            });
            this.scope.combatants[this.currentIndex].isActive = true;
        }

        public activateNextCombatant() {
            this.scope.combatants[this.currentIndex].isActive = false;
            if (this.currentIndex == this.scope.combatants.length - 1) {
                this.currentIndex = 0;
            } else {
                this.currentIndex++;
            }
            if (!this.scope.combatants[this.currentIndex].isAlive) {
                this.activateNextCombatant();
            }
            this.scope.combatants[this.currentIndex].isActive = true;
        }

        public endCombat() {
            this.state.go("setup");
        }
    }
} 