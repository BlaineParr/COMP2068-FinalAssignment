var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*
 * This class creates an enemy which moves left and right.
 */
var objects;
(function (objects) {
    var Slug = (function (_super) {
        __extends(Slug, _super);
        //Constructor/////////////////////////////////////////////////////////////////////////////
        /*
         * This constructor creates the slug at the x and y specified.
         */
        function Slug(x, y, container, array, scoreboard) {
            _super.call(this, "slug", x, y);
            this._array = [];
            //set the variables
            this._container = container;
            this._array = array;
            this._scoreboard = scoreboard;
            //set health to 5
            this._health = 5;
            //set dy to 5
            this._dx = 3;
        } //constructor ends
        //Public Methods//////////////////////////////////////////////////////////////////////////
        Slug.prototype.update = function () {
            //if the slug hits the left or right of the playable area...
            if (this.x <= 64 || this.x >= 896) {
                //reverse the direction
                this._dx *= -1;
            } //if ends
            //add dx to x
            this.x += this._dx;
        }; //method update ends
        /*
         * This method causes the slug to take damage when it collides. If its health is less
         * than 1 the player receives 50 points and the biklops is removed from the game.
         */
        Slug.prototype.collide = function () {
            //play the pongHit sound
            createjs.Sound.play("pongHit");
            //subtract 1 from health
            this._health--;
            //if it has no health...
            if (this._health <= 0) {
                //add 50 to the score
                this._scoreboard.score += 50;
                //remove it from the game
                this._array.splice(this._array.indexOf(this), 1);
                this._container.removeChild(this);
            } //if ends
        }; //method collide ends
        return Slug;
    })(objects.GameObject);
    objects.Slug = Slug; //class Slug ends
})(objects || (objects = {})); //module objects ends 
//# sourceMappingURL=slug.js.map