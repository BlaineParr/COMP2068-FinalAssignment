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
        function Biklops(x, y, player, scoreboard) {
            _super.call(this, "biklops", x, y);
            this._player = player;
            this._scoreboard = scoreboard;
            this._reset();
        } //constructor ends
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        Biklops.prototype._reset = function () {
            // set the island to start at a random x value
            this.x = Math.floor(Math.random() * constants.SCREEN_WIDTH);
            this.y = -this.height;
            // add drift to the cloud 
            this._dy = Math.floor(Math.random() * 5) + 5;
            this._dx = Math.floor(Math.random() * 4) - 2;
        }; //reset
        /*
        private _checkBounds(): void {
            if (this.y > (constants.SCREEN_HEIGHT + this.height)) {
                this._reset();
            } //if ends
        } //method _checkBounds ends*/
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
            this._scoreboard.score += 50;
        }; //method collide ends
        return Biklops;
    })(objects.GameObject);
    objects.Biklops = Biklops; //class Biklops ends
})(objects || (objects = {})); //module objects ends
//# sourceMappingURL=biklops.js.map