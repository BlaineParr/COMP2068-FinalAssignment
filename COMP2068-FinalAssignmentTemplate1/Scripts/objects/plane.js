var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Plane = (function (_super) {
        __extends(Plane, _super);
        //Constructor/////////////////////////////////////////////////////////////////////////////
        function Plane(x, y, container, scoreBoard) {
            _super.call(this, "robin", x, y);
            this.pongBalls = [];
            this._container = container;
            this._scoreboard = scoreBoard;
            this._currentDirection = constants.DOWN;
            this.numberOfPongBalls = 0;
            this._shotDelay = 0;
            this._invincible = false;
        } //constructor ends
        //Private Methods/////////////////////////////////////////////////////////////////////////
        Plane.prototype._shoot = function () {
            if (Date.now() > this._shotDelay) {
                this._shotDelay = Date.now() + 250;
                this.pongBalls[this.numberOfPongBalls] = new objects.PongBall(this.x + (this.width / 2), this.y + (this.height / 2), this._container, this._currentDirection, this);
                this._container.addChild(this.pongBalls[this.numberOfPongBalls]);
                this.numberOfPongBalls++;
            } //if ends
        }; //method shoot ends
        //Public Methods//////////////////////////////////////////////////////////////////////////
        Plane.prototype.update = function () {
            this.preX = this.x;
            this.preY = this.y;
            if (this._invincible) {
                if (Date.now() > this._invincibleTime) {
                    this.alpha = 1;
                    this._invincible = false;
                } //if ends
            } //if ends
            if (this._firing) {
                this._shoot();
            } //if ends
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
        Plane.prototype.actionStart = function (key) {
            if (key == 32) {
                this._firing = true;
            } //if ends
            if (key == 87) {
                this._movingUp = true;
                this._currentDirection = constants.UP;
            } //if ends
            if (key == 83) {
                this._movingDown = true;
                this._currentDirection = constants.DOWN;
            } //if ends
            if (key == 65) {
                this._movingLeft = true;
                this._currentDirection = constants.LEFT;
            } //if ends
            if (key == 68) {
                this._movingRight = true;
                this._currentDirection = constants.RIGHT;
            } //if ends
        }; //method actionStart ends
        Plane.prototype.actionEnd = function (key) {
            if (key == 32) {
                this._firing = false;
            } //if ends
            if (key == 87) {
                this._movingUp = false;
            } //if ends
            if (key == 83) {
                this._movingDown = false;
            } //if ends
            if (key == 65) {
                this._movingLeft = false;
            } //if ends
            if (key == 68) {
                this._movingRight = false;
            } //if ends
        }; //method actionStart ends
        Plane.prototype.collide = function () {
            if (!this._invincible) {
                this.alpha = 0.5;
                this._scoreboard.lives--;
                this._invincible = true;
                this._invincibleTime = Date.now() + 1500;
            } //if ends
        }; //method collide ends
        return Plane;
    })(objects.GameObject);
    objects.Plane = Plane; //class Plane ends
})(objects || (objects = {})); //module objects ends
//# sourceMappingURL=plane.js.map