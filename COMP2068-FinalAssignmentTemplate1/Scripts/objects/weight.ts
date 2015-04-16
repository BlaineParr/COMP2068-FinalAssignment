/*
* this is the laser that the player fires from the character it will be removed if it collides with something
*/
module objects {
    export class Weight extends objects.GameObject {
        //instance variables
        private _container: createjs.Container;
        private _stevieKong: objects.StevieKong;

        //Constructor/////////////////////////////////////////////////////////////////////////////
        constructor(x: number, y: number, container: createjs.Container, stevieKong: objects.StevieKong) {
            super("weight", x, y);
            this._container = container;

            this._stevieKong = stevieKong;
            //this.soundString = "laser_sound";
        } //constructor ends

        //Public Methods//////////////////////////////////////////////////////////////////////////
        public update(): void {
            this.y += 10;

            if (this.y < 0) {
                this.collide();
            } //if ends
        } //method update ends

        public collide() {
            this._stevieKong.weights.splice(this._stevieKong.weights.indexOf(this), 1);
            this._stevieKong.numberOfWeights--;
            this._container.removeChild(this);
        } //method collide ends
    } //class PongBall ends
} //module objects ends 