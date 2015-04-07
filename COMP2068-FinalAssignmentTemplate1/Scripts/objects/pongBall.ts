/*
* this is the laser that the player fires from the character it will be removed if it collides with something
*/
module objects {
    export class PongBall extends objects.GameObject {
        //instance variables
        private _dx: number;
        private _dy: number;

        //Constructor/////////////////////////////////////////////////////////////////////////////
        constructor(x: number, y: number, direction: number) {
            super("pongBall");
            this.x = x;
            this.y = y;

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
            console.log("I killed a cloud");
        } //method collide ends
    } //class PongBall ends
} //module objects ends