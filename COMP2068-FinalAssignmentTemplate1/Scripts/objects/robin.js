var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*
 * This class creates the player. The player can fire pongBalls at the enemies to destroy them.
 */
var objects;
(function (objects) {
    var Robin = (function (_super) {
        __extends(Robin, _super);
        //Constructor/////////////////////////////////////////////////////////////////////////////
        /*
         * This constructor creates the player at the position specified
         */
        function Robin(x, y, container, scoreBoard) {
            _super.call(this, "robin", x, y);
            this.pongBalls = [];
            //set the container and scoreBoard
            this._container = container;
            this._scoreboard = scoreBoard;
            //initialize the player to be shooting down
            this._currentDirection = constants.DOWN;
            //initialize the numberOfPongBalls to 0
            this.numberOfPongBalls = 0;
            //initialize the shotDelay to 0
            this._shotDelay = 0;
            //initialize invincible to false
            this._invincible = false;
        } //constructor ends
        //Private Methods/////////////////////////////////////////////////////////////////////////
        /*
         * This method allows the player to shoot pongBalls.
         */
        Robin.prototype._shoot = function () {
            //if the shotDelay has passed
            if (Date.now() > this._shotDelay) {
                //play the pongFire sound
                createjs.Sound.play("pongFire");
                //set the shot delay, so the player has to wait a fouth of a second to shoot again
                this._shotDelay = Date.now() + 250;
                //add a pongBall to the game
                this.pongBalls[this.numberOfPongBalls] = new objects.PongBall(this.x, this.y, this._container, this._currentDirection, this);
                this._container.addChild(this.pongBalls[this.numberOfPongBalls]);
                //increase the numberOfPongBalls
                this.numberOfPongBalls++;
            } //if ends
        }; //method shoot ends
        //Public Methods//////////////////////////////////////////////////////////////////////////
        /*
         * This class updates the player's position.
         */
        Robin.prototype.update = function () {
            //set the previous position, used if the player tries to walk through a barrier
            this.preX = this.x;
            this.preY = this.y;
            //if the player is invincible
            if (this._invincible) {
                //check if enough time has passed to stop the player from being invincible
                if (Date.now() > this._invincibleTime) {
                    //return the player to 100% opacity
                    this.alpha = 1;
                    //set invincible to false
                    this._invincible = false;
                } //if ends
            } //if ends
            //if the player is firing call shoot
            if (this._firing) {
                this._shoot();
            } //if ends
            //move the player if they are moving in any direction
            if (this._movingUp) {
                this.y -= 5;
            } //if ends
            if (this._movingDown) {
                this.y += 5;
            } //else if ends
            if (this._movingLeft) {
                this.x -= 5;
            } //else if ends
            if (this._movingRight) {
                this.x += 5;
            } //else if ends
        }; //method update ends
        //this method sets the booleans to true if a certain key is pressed
        Robin.prototype.actionStart = function (key) {
            //if Space...
            if (key == 32) {
                this._firing = true; //firing is true
            } //if ends
            //if W...
            if (key == 87) {
                this._movingUp = true; //movingUp is true
                this._currentDirection = constants.UP; //set currentDirection to up
            } //if ends
            //if S...
            if (key == 83) {
                this._movingDown = true; //movingDown is true
                this._currentDirection = constants.DOWN; //set currentDirection to down
            } //if ends
            //if A...
            if (key == 65) {
                this._movingLeft = true; //movingLeft is true
                this._currentDirection = constants.LEFT; //set currentDirection to left
            } //if ends
            //if D...
            if (key == 68) {
                this._movingRight = true; //movingRight is true
                this._currentDirection = constants.RIGHT; //set currentDirection to right
            } //if ends
        }; //method actionStart ends
        //this method sets the booleans to false if a certain key is released
        Robin.prototype.actionEnd = function (key) {
            //if Space...
            if (key == 32) {
                this._firing = false; //firing is false
            } //if ends
            //if W...
            if (key == 87) {
                this._movingUp = false; //movingUp is false
            } //if ends
            //is S...
            if (key == 83) {
                this._movingDown = false; //movingDown is false
            } //if ends
            //if A...
            if (key == 65) {
                this._movingLeft = false; //movingLeft is false
            } //if ends
            //if D...
            if (key == 68) {
                this._movingRight = false; //movingRight is false
            } //if ends
        }; //method actionStart ends
        /*
         * This method removes a life, and makes the player temporarily invincible when they are
         * collided with.
         */
        Robin.prototype.collide = function () {
            //if the player is not invincible...
            if (!this._invincible) {
                //play the robinHit sound
                createjs.Sound.play("robinHit");
                //set the opacity to 50%
                this.alpha = 0.5;
                //remove a life
                this._scoreboard.lives--;
                //set the player to be invincible fo 1.5 seconds
                this._invincible = true;
                this._invincibleTime = Date.now() + 1500;
            } //if ends
        }; //method collide ends
        return Robin;
    })(objects.GameObject);
    objects.Robin = Robin; //class Plane ends
})(objects || (objects = {})); //module objects ends
//# sourceMappingURL=robin.js.map