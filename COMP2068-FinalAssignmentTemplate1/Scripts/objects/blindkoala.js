var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*
 * This class creates an enemy which moves up and down.
 */
var objects;
(function (objects) {
    var BlindKoala = (function (_super) {
        __extends(BlindKoala, _super);
        //Constructor/////////////////////////////////////////////////////////////////////////////
        /*
         * This constructor creates the blindKoala at the x and y specified.
         */
        function BlindKoala(x, y, container, array, scoreboard) {
            _super.call(this, "blindKoala", x, y);
            this._array = [];
            //set the variables
            this._array = array;
            this._container = container;
            this._scoreboard = scoreboard;
            //set health to 3
            this._health = 3;
            //set dy to 5
            this._dy = 5;
        } //constructor ends
        //Public Methods//////////////////////////////////////////////////////////////////////////
        BlindKoala.prototype.update = function () {
            //if the blindKoala hits the top or bottom of the playable area...
            if (this.y <= 64 || this.y >= 576) {
                //reverse the direction
                this._dy *= -1;
            } //if ends
            //add dy to y
            this.y += this._dy;
        }; //method update ends
        /*
         * This method causes the blindKoala to take damage when it collides. If its health is less
         * than 1 the player receives 100 points and the biklops is removed from the game.
         */
        BlindKoala.prototype.collide = function () {
            //play the pongHit sound
            createjs.Sound.play("pongHit");
            //subtract 1 from health
            this._health--;
            //if it has no health...
            if (this._health <= 0) {
                //add 100 to the score
                this._scoreboard.score += 100;
                //remove it from the game
                this._array.splice(this._array.indexOf(this), 1);
                this._container.removeChild(this);
            } //if ends
        }; //method collide ends
        return BlindKoala;
    })(objects.GameObject);
    objects.BlindKoala = BlindKoala; //class Biklops ends
})(objects || (objects = {})); //module objects ends
//# sourceMappingURL=blindkoala.js.map