module objects {

    export class BlindKoala extends objects.GameObject {
        //instance variables
        private _dy: number;
        private _health: number;
        private _array: objects.BlindKoala[] = [];
        private _container: createjs.Container;
        private _scoreboard: objects.ScoreBoard;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor(x: number, y: number, container: createjs.Container, array: objects.BlindKoala[], scoreboard: objects.ScoreBoard) {
            super("blindKoala", x, y);
            this._array = array;
            this._container = container;
            this._scoreboard = scoreboard;

            this._health = 3;
            this._dy = 5;
        } //constructor ends

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update(): void {
            if (this.y <= 64 || this.y >= 576 - this.height) {
                this._dy *= -1;
            } //if ends

            this.y += this._dy;
        } //method update ends

        public collide(): void {
            this._health--;

            if (this._health <= 0) {
                this._scoreboard.score += 100;
                this._array.splice(this._array.indexOf(this), 1);
                this._container.removeChild(this);
            } //if ends
        } //method collide ends
    } //class Biklops ends
} //module objects ends