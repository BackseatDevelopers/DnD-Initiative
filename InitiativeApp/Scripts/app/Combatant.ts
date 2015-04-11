module InitiativeApp {
    export interface ICombatant {
        name: string;
        combatantType: string;
        initiativeBonus: number;
        initiative: number;
        
        compareInitiative(other: ICombatant): number;      
    }

    export class Combatant implements ICombatant {
        public name: string;
        public combatantType: string;
        public initiativeBonus: number = 0;
        public initiative: number;

        public rollInitiative() {
            this.initiative = Math.ceil(Math.random() * 20) + this.initiativeBonus;
        }

        public compareInitiative(other: ICombatant): number {
            if (other.initiative != this.initiative) {
                return this.initiative - other.initiative;
            } else {
                return this.initiativeBonus - other.initiativeBonus;                
            }
        }

        constructor(combatant?: ICombatant) {
            if (combatant) {
                this.name = combatant.name;
                this.initiativeBonus = combatant.initiativeBonus;
                this.initiative = combatant.initiative;
            }
        }
    }

    export class Player extends Combatant {
        public combatantType: string = "Player";
    }

    export class Monster extends Combatant {
        public combatantType: string = "Monster";
    }
} 