module objects {

    export class Biklops extends objects.GameObject {
        //instance variables
        private _dx: number;
        private _dy: number;
        private _player: objects.Plane;
        private _health: number;
        private _array: objects.Biklops[] = [];
        private _container: createjs.Container;
        private _scoreboard: objects.ScoreBoard;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor(x: number, y: number, container: createjs.Container, player: objects.Plane, array: objects.Biklops[], scoreboard: objects.ScoreBoard) {
            super("biklops", x, y);
            this._player = player;
            this._array = array;
            this._container = container;
            this._scoreboard = scoreboard;

            this._health = 3;
        } //constructor ends

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
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
            this._health--;

            if (this._health <= 0) {
                this._array.splice(this._array.indexOf(this), 1);
                this._container.removeChild(this);
            } //if ends
        } //method collide ends
    } //class Biklops ends
} //module objects ends