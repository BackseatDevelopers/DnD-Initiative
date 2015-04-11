var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var InitiativeApp;
(function (InitiativeApp) {
    var Combatant = (function () {
        function Combatant(combatant) {
            this.initiativeBonus = 0;
            if (combatant) {
                this.name = combatant.name;
                this.initiativeBonus = combatant.initiativeBonus;
                this.initiative = combatant.initiative;
            }
        }
        Combatant.prototype.rollInitiative = function () {
            this.initiative = Math.ceil(Math.random() * 20) + this.initiativeBonus;
        };
        Combatant.prototype.compareInitiative = function (other) {
            if (other.initiative != this.initiative) {
                return this.initiative - other.initiative;
            }
            else {
                return this.initiativeBonus - other.initiativeBonus;
            }
        };
        return Combatant;
    })();
    InitiativeApp.Combatant = Combatant;
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player() {
            _super.apply(this, arguments);
            this.combatantType = "Player";
        }
        return Player;
    })(Combatant);
    InitiativeApp.Player = Player;
    var Monster = (function (_super) {
        __extends(Monster, _super);
        function Monster() {
            _super.apply(this, arguments);
            this.combatantType = "Monster";
        }
        return Monster;
    })(Combatant);
    InitiativeApp.Monster = Monster;
})(InitiativeApp || (InitiativeApp = {}));
//# sourceMappingURL=Combatant.js.map