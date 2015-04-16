module objects {

    export class Slug extends objects.GameObject {
        //instance variables
        private _dx: number;
        private _health: number;
        private _array: objects.Slug[] = [];
        private _container: createjs.Container;
        private _scoreboard: objects.ScoreBoard;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor(x: number, y: number, container: createjs.Container, array: objects.Slug[], scoreboard: objects.ScoreBoard) {
            super("slug", x, y);
            this._container = container;
            this._array = array;
            this._scoreboard = scoreboard;

            this._health = 5;
            this._dx = 3;
        } //constructor ends

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update(): void {
            if (this.x <= 64 || this.x >= 896 - this.width) {
                this._dx *= -1;
            } //if ends

            this.x += this._dx;
        } //method update ends

        public collide(): void {
            this._health--;

            if (this._health <= 0) {
                this._scoreboard.score += 50;
                this._array.splice(this._array.indexOf(this), 1);
                this._container.removeChild(this);
            } //if ends
        } //method collide ends
    } //class Biklops ends
} //module objects ends 