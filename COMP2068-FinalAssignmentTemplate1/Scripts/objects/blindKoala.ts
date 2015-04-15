module objects {

    export class BlindKoala extends objects.GameObject {
        //instance variables
        private _dy: number;
        private _scoreboard: objects.ScoreBoard;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor(scoreboard: objects.ScoreBoard) {
            super("blindKoala");
            this.x = 0;
            this.y = 0;
            this._scoreboard = scoreboard;

            this._reset();
        } //constructor ends

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        private _reset(): void {
            // set the island to start at a random x value
            this.x = Math.floor(Math.random() * constants.SCREEN_WIDTH);
            this.y = -this.height;
            // add drift to the cloud 
            this._dy = 5;

        } //reset

        /*
        private _checkBounds(): void {
            if (this.y > (constants.SCREEN_HEIGHT + this.height)) {
                this._reset();
            } //if ends
        } //method _checkBounds ends*/

        private _setDirection(): void {
            if (this.y < 64) {
                this._dy = 5;
            } //if ends
            if (this.y > 576) {
                this._dy = -5;
            } //if ends


        } //method setDirection ends

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update(): void {
            this._setDirection();

            this.y += this._dy;



        } //method update ends

        public collide(): void {
            this._scoreboard.score += 50;
        } //method collide ends
    } //class Biklops ends
} //module objects ends