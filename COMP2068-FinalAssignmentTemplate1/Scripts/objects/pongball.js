var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*
 * This class creates a pongball which fires from the player when the space bar is pressed.
 */
var objects;
(function (objects) {
    var PongBall = (function (_super) {
        __extends(PongBall, _super);
        //Constructor/////////////////////////////////////////////////////////////////////////////
        /*
         * This constructor creates a pongBall at the position specified moving in the direction
         * specified.
         */
        function PongBall(x, y, container, direction, player) {
            _super.call(this, "pongBall", x, y);
            //set the variables
            this._container = container;
            this._player = player;
            //initialize dx and dy to 0
            this._dx = 0;
            this._dy = 0;
            //set the direction to the one specified
            this._setDirection(direction);
            //this.soundString = "laser_sound";
        } //constructor ends
        //Private Methods/////////////////////////////////////////////////////////////////////////
        /*
         * This method sets the direction that the pongball will move
         */
        PongBall.prototype._setDirection = function (direction) {
            switch (direction) {
                case constants.UP:
                    this._dy = -10;
                    break;
                case constants.DOWN:
                    this._dy = 10;
                    break;
                case constants.LEFT:
                    this._dx = -10;
                    break;
                case constants.RIGHT: this._dx = 10;
            }
        }; //method setDirection ends
        //Public Methods//////////////////////////////////////////////////////////////////////////
        /*
         * This method updates the pongBall's position.
         */
        PongBall.prototype.update = function () {
            //add dx to x and dy to y
            this.x += this._dx;
            this.y += this._dy;
            //if the pongBall is offscreen call collide
            if (this.x < 0 || this.x > 960 || this.y < 0 || this.y > 640) {
                this.collide();
            } //if ends
        }; //method update ends
        /*
         * This method removes the pongBall from the game when it collides.
         */
        PongBall.prototype.collide = function () {
            //remove it from the array
            this._player.pongBalls.splice(this._player.pongBalls.indexOf(this), 1);
            //decrease the numberOfPongBalls
            this._player.numberOfPongBalls--;
            //remove it from the container
            this._container.removeChild(this);
        }; //method collide ends
        return PongBall;
    })(objects.GameObject);
    objects.PongBall = PongBall; //class PongBall ends
})(objects || (objects = {})); //module objects ends
//# sourceMappingURL=pongball.js.map