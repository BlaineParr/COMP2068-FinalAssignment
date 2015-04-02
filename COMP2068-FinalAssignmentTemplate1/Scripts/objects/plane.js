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
        function Plane(container) {
            _super.call(this, assetLoader.getResult("plane"));
            this.pongBalls = [];
            this._container = container;
            this.name = "plane";
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this._currentDirection = constants.DOWN;
            this.y = 430;
            this.numberOfPongBalls = 0;
            createjs.Sound.play("engine", { loop: -1 });
        } //constructor ends
        //Private Methods/////////////////////////////////////////////////////////////////////////
        Plane.prototype._shoot = function () {
            this.pongBalls[this.numberOfPongBalls] = new objects.PongBall(this.x, this.y, this._currentDirection);
            this.numberOfPongBalls++;
            this._container.addChild(this.pongBalls[this.numberOfPongBalls]);
        }; //method shoot ends
        //Public Methods//////////////////////////////////////////////////////////////////////////
        Plane.prototype.update = function () {
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
                this._shoot();
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
        return Plane;
    })(createjs.Bitmap);
    objects.Plane = Plane; //class Plane ends
})(objects || (objects = {})); //module objects ends
//# sourceMappingURL=plane.js.map