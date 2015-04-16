module objects {

    export class BlindKoala extends objects.GameObject {
        //instance variables
        private _dy: number;
        private _scoreboard: objects.ScoreBoard;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor(x: number, y: number, scoreboard: objects.ScoreBoard) {
            super("blindKoala", x, y);
            this._scoreboard = scoreboard;
        } //constructor ends

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++

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