var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Biklops = (function (_super) {
        __extends(Biklops, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        function Biklops(x, y, container, player, array, scoreboard) {
            _super.call(this, "biklops", x, y);
            this._array = [];
            this._player = player;
            this._array = array;
            this._container = container;
            this._scoreboard = scoreboard;
            this._health = 3;
        } //constructor ends
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        Biklops.prototype._setDirection = function () {
            if (this._player.x > this.x) {
                this._dx = 3;
            }
            else if (this._player.x < this.x) {
                this._dx = -3;
            } //else if ends
            if (this._player.y > this.y) {
                this._dy = 3;
            }
            else if (this._player.y < this.y) {
                this._dy = -3;
            } //else if ends
        }; //method setDirection ends
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Biklops.prototype.update = function () {
            this._setDirection();
            this.y += this._dy;
            this.x += this._dx;
        }; //method update ends
        Biklops.prototype.collide = function () {
            this._health--;
            if (this._health <= 0) {
                this._scoreboard.score += 200;
                this._array.splice(this._array.indexOf(this), 1);
                this._container.removeChild(this);
            } //if ends
        }; //method collide ends
        return Biklops;
    })(objects.GameObject);
    objects.Biklops = Biklops; //class Biklops ends
})(objects || (objects = {})); //module objects ends
//# sourceMappingURL=biklops.js.map