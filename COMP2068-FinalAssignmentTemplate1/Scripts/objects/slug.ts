module objects {

    export class Slug extends objects.GameObject {
        //instance variables
        private _dx: number;
        private _health: number;
        private _array: objects.GameObject[] = [];
        private _container: createjs.Container;
        private _scoreboard: objects.ScoreBoard;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor(x: number, y: number, scoreboard: objects.ScoreBoard) {
            super("slug", x, y);
            this._scoreboard = scoreboard;

            this._dx = 5;
        } //constructor ends

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++


        private _setDirection(): void {
            


        } //method setDirection ends

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update(): void {
            if (this.x <= 64 || this.x >= 896 - (this.width / 2)) {
                this._dx *= -1;
            } //if ends

            this.x += this._dx;
        } //method update ends

        public collide(): void {
            this._scoreboard.score += 50;
        } //method collide ends
    } //class Biklops ends
} //module objects ends 