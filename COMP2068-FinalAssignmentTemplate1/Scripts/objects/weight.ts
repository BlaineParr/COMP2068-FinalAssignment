/*
 * This class creates a weight that stevieKong will fire at the player.
 */
module objects {
    export class Weight extends objects.GameObject {
        //instance variables
        private _container: createjs.Container;
        private _stevieKong: objects.StevieKong;

        //Constructor/////////////////////////////////////////////////////////////////////////////
        /*
         * This constructor creates a weight at the position specified.
         */
        constructor(x: number, y: number, container: createjs.Container, stevieKong: objects.StevieKong) {
            super("weight", x, y);

            //set the variables
            this._container = container;
            this._stevieKong = stevieKong;
            //this.soundString = "laser_sound";
        } //constructor ends

        //Public Methods//////////////////////////////////////////////////////////////////////////
        /*
         * This method updates the weight's position
         */
        public update(): void {
            //increase y by 10
            this.y += 10;

            //if it is off screen call collide
            if (this.y < 0) {
                this.collide();
            } //if ends
        } //method update ends

        /*
         * This method removes the weight from the game when it collides.
         */
        public collide(): void {
            //remove it from the array
            this._stevieKong.weights.splice(this._stevieKong.weights.indexOf(this), 1);

            //decrease the numberOfWeights
            this._stevieKong.numberOfWeights--;

            //remove it from the game
            this._container.removeChild(this);
        } //method collide ends
    } //class PongBall ends
} //module objects ends 