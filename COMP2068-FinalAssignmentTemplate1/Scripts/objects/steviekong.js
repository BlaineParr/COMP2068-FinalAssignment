var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*
 * This class creates the final boss, stevieKong. He moves left and right and throws weights at
 * the player if they are within his range.
 */
var objects;
(function (objects) {
    var StevieKong = (function (_super) {
        __extends(StevieKong, _super);
        //Constructor/////////////////////////////////////////////////////////////////////////////
        function StevieKong(x, y, container, player, scoreboard) {
            _super.call(this, "stevieKong", x, y);
            this.weights = [];
            //set the container, player and scoreboard
            this._container = container;
            this._player = player;
            this._scoreboard = scoreboard;
            //set health to 50
            this.health = 50;
            //set dx to 7
            this._dx = 7;
            //initialize numberOfWeights to 0
            this.numberOfWeights = 0;
            //initialize the shotDelay to 0
            this._shotDelay = 0;
        } //constructor ends
        //Private Methods/////////////////////////////////////////////////////////////////////////
        StevieKong.prototype._checkRange = function () {
            //check if the player is within 16 pixels left or right
            if ((this._player.x - this.x) <= 16 && (this._player.x - this.x) >= -16) {
                //25% chance to fire
                if (Math.floor(Math.random() * 100) + 1 <= 25) {
                    //if the shotDelay has passed...
                    if (Date.now() > this._shotDelay) {
                        this._shoot(); //shoot
                        //must wait 1 second before shooting again
                        this._shotDelay = Date.now() + 1000;
                    } //if ends
                } //if ends
            } //method checkRange ends
        }; //method checkRange ends
        /*
         * This method creates a weight which is fired at the player.
         */
        StevieKong.prototype._shoot = function () {
            //play the weightFire sound
            createjs.Sound.play("weightFire");
            //add a weight to the game
            this.weights[this.numberOfWeights] = new objects.Weight(this.x, this.y, this._container, this);
            this._container.addChild(this.weights[this.numberOfWeights]);
            //inscrease numberOfWeights by 1
            this.numberOfWeights++;
        }; //method shoot ends
        //Public Methods//////////////////////////////////////////////////////////////////////////
        /*
         * This method updates stevieKong's position.
         */
        StevieKong.prototype.update = function () {
            //if stevieKong hits the left or right of the playable area...
            if (this.x <= 64 || this.x >= 896) {
                this._dx *= -1; //reverse direction
            } //if ends
            //call checkRange
            this._checkRange();
            //add dx to x
            this.x += this._dx;
        }; //method update ends
        /*
         * This method causes the stevieKong to take damage when it collides. If his health is less
         * than 1 the player receives 1000 points and he's removed from the game and all weights
         * are removed from the game.
         */
        StevieKong.prototype.collide = function () {
            //play the pongHit sound
            createjs.Sound.play("pongHit");
            //decrease health by 1
            this.health--;
            //if he has no health...
            if (this.health <= 0) {
                for (var weight = this.numberOfWeights - 1; weight >= 0; weight--) {
                    this.weights[weight].collide();
                }
                //add 1000 points
                this._scoreboard.score += 1000;
                //remove him from the game
                this._container.removeChild(this);
            } //if ends
        }; //method collide ends
        return StevieKong;
    })(objects.GameObject);
    objects.StevieKong = StevieKong; //class Biklops ends
})(objects || (objects = {})); //module objects ends 
//# sourceMappingURL=steviekong.js.map