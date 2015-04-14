module objects {

    export class Biklops extends objects.GameObject {
        //instance variables
        private _dx: number;
        private _dy: number;
        private _player: objects.Plane;
        private _scoreboard: objects.ScoreBoard;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor(player: objects.Plane, scoreboard: objects.ScoreBoard) {
            super("biklops");
            this._player = player;
            this._scoreboard = scoreboard;

            this._reset();
        } //constructor ends

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        private _reset(): void {
            // set the island to start at a random x value
            this.x = Math.floor(Math.random() * constants.SCREEN_WIDTH);
            this.y = -this.height;
            // add drift to the cloud 
            this._dy = Math.floor(Math.random() * 5) + 5;
            this._dx = Math.floor(Math.random() * 4) - 2;
        } //reset

        /*
        private _checkBounds(): void {
            if (this.y > (constants.SCREEN_HEIGHT + this.height)) {
                this._reset();
            } //if ends
        } //method _checkBounds ends*/

        private _setDirection(): void {
            if (this._player.x > this.x) {
                this._dx = 3;
            } //if ends
            else if (this._player.x < this.x) {
                this._dx = -3;
            } //else if ends

            if (this._player.y > this.y) {
                this._dy = 3;
            } //if ends
            else if (this._player.y < this.y) {
                this._dy = -3;
            } //else if ends
        } //method setDirection ends

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update(): void {
            this._setDirection();

            this.y += this._dy;
            this.x += this._dx;
        } //method update ends

        public collide(): void {
            this._scoreboard.score += 50;
        } //method collide ends
    } //class Biklops ends
} //module objects ends