/*
 * This class creates a pongball which fires from the player when the space bar is pressed.
 */
module objects {
    export class PongBall extends objects.GameObject {
        //instance variables
        private _container: createjs.Container;
        private _dx: number;
        private _dy: number;
        private _player: objects.Robin;

        //Constructor/////////////////////////////////////////////////////////////////////////////
        /*
         * This constructor creates a pongBall at the position specified moving in the direction
         * specified.
         */
        constructor(x: number, y: number, container: createjs.Container, direction: number, player: objects.Robin) {
            super("pongBall", x, y);

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
        private _setDirection(direction): void {
            switch (direction) {
                //if it's moving up dy is -10
                case constants.UP: this._dy = -10;
                    break;
                //if it's moving down dy is 10
                case constants.DOWN: this._dy = 10;
                    break;
                //if it's moving left dx is -10
                case constants.LEFT: this._dx = -10;
                    break;
                //if it's moving right dx is 10
                case constants.RIGHT: this._dx = 10;
            } //switch ends
        } //method setDirection ends

        //Public Methods//////////////////////////////////////////////////////////////////////////
        /*
         * This method updates the pongBall's position.
         */
        public update(): void {
            //add dx to x and dy to y
            this.x += this._dx;
            this.y += this._dy;

            //if the pongBall is offscreen call collide
            if (this.x < 0 || this.x > 960 || this.y < 0 || this.y > 640) {
                this.collide();
            } //if ends
        } //method update ends

        /*
         * This method removes the pongBall from the game when it collides.
         */
        public collide(): void {
            //remove it from the array
            this._player.pongBalls.splice(this._player.pongBalls.indexOf(this), 1);

            //decrease the numberOfPongBalls
            this._player.numberOfPongBalls--;

            //remove it from the container
            this._container.removeChild(this);
        } //method collide ends
    } //class PongBall ends
} //module objects ends