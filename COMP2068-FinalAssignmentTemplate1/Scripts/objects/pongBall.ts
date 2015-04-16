/*
* this is the laser that the player fires from the character it will be removed if it collides with something
*/
module objects {
    export class PongBall extends objects.GameObject {
        //instance variables
        private _container: createjs.Container;
        private _dx: number;
        private _dy: number;
        private _plane: objects.Plane;

        //Constructor/////////////////////////////////////////////////////////////////////////////
        constructor(x: number, y: number, container: createjs.Container, direction: number, plane: objects.Plane) {
            super("pongBall", x, y);
            this._container = container;

            this._plane = plane;

            this._dx = 0;
            this._dy = 0;

            this._setDirection(direction);
            //this.soundString = "laser_sound";
        } //constructor ends

        //Private Methods/////////////////////////////////////////////////////////////////////////
        private _setDirection(direction): void {
            switch (direction) {
                case constants.UP: this._dy = -10;
                    break;
                case constants.DOWN: this._dy = 10;
                    break;
                case constants.LEFT: this._dx = -10;
                    break;
                case constants.RIGHT: this._dx = 10;
            } //switch ends
        } //method setDirection ends

        //Public Methods//////////////////////////////////////////////////////////////////////////
        public update(): void {
            this.x += this._dx;
            this.y += this._dy;
        } //method update ends

        public collide() {
            this._plane.pongBalls.splice(this._plane.pongBalls.indexOf(this), 1);
            this._plane.numberOfPongBalls--;
            this._container.removeChild(this);
        } //method collide ends
    } //class PongBall ends
} //module objects ends