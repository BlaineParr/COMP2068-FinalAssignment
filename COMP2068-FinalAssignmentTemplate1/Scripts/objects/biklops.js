var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*
 * This class create an enemy that chases the player.
 */
var objects;
(function (objects) {
    var Biklops = (function (_super) {
        __extends(Biklops, _super);
        //Constructor/////////////////////////////////////////////////////////////////////////////
        /*
         * This constructor creates a biklops at the x and y specified.
         */
        function Biklops(x, y, container, player, array, scoreboard) {
            _super.call(this, "biklops", x, y);
            this._array = [];
            //set all of the variables
            this._player = player;
            this._array = array;
            this._container = container;
            this._scoreboard = scoreboard;
            //set the health to 3
            this._health = 3;
        } //constructor ends
        //Private Methods/////////////////////////////////////////////////////////////////////////
        /*
         * This method changes the direction the biklops is moving based on where the player is
         * standing.
         */
        Biklops.prototype._setDirection = function () {
            //if the player is farther right...
            if (this._player.x > this.x) {
                this._dx = 3;
            }
            else if (this._player.x < this.x) {
                this._dx = -3;
            } //else if ends
            //if the player is farther down...
            if (this._player.y > this.y) {
                this._dy = 3;
            }
            else if (this._player.y < this.y) {
                this._dy = -3;
            } //else if ends
        }; //method setDirection ends
        //Public Methods
        /*
         * This method updates the biklops' position.
         */
        Biklops.prototype.update = function () {
            //set the direction
            this._setDirection();
            //add dy to y and dx to x
            this.y += this._dy;
            this.x += this._dx;
        }; //method update ends
        /*
         * This method causes the biklops to take damage when it collides. If its health is less
         * than 1 the player receives 200 points and the biklops is removed from the game.
         */
        Biklops.prototype.collide = function () {
            this._health--; //subtract 1 health
            //if it has no health...
            if (this._health <= 0) {
                //add 200 to the score
                this._scoreboard.score += 200;
                //remove it from the game
                this._array.splice(this._array.indexOf(this), 1);
                this._container.removeChild(this);
            } //if ends
        }; //method collide ends
        return Biklops;
    })(objects.GameObject);
    objects.Biklops = Biklops; //class Biklops ends
})(objects || (objects = {})); //module objects ends
//# sourceMappingURL=biklops.js.map