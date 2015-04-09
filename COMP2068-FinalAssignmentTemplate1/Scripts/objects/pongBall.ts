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
        constructor(container: createjs.Container, x: number, y: number, direction: number, plane: objects.Plane) {
            super("pongBall");
            this._container = container;

            this.x = x;
            this.y = y;

            this._plane = plane;

            this._dx = 0;
            this._dy = 0;

            console.log(direction);
            this._setDirection(direction);
            //this.soundString = "laser_sound";
        } //constructor ends

        //Private Methods/////////////////////////////////////////////////////////////////////////
        private _setDirection(direction): void {
            switch (direction) {
                case constants.UP: this._dy = -5;
                    break;
                case constants.DOWN: this._dy = 5;
                    break;
                case constants.LEFT: this._dx = -5;
                    break;
                case constants.RIGHT: this._dx = 5;
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