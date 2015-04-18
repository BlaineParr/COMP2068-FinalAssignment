/*
 * This class creates an enemy which moves left and right.
 */
module objects {
    export class Slug extends objects.GameObject {
        //instance variables
        private _dx: number;
        private _health: number;
        private _array: objects.Slug[] = [];
        private _container: createjs.Container;
        private _scoreboard: objects.ScoreBoard;

        //Constructor/////////////////////////////////////////////////////////////////////////////
        /*
         * This constructor creates the slug at the x and y specified.
         */
        constructor(x: number, y: number, container: createjs.Container, array: objects.Slug[], scoreboard: objects.ScoreBoard) {
            super("slug", x, y);

            //set the variables
            this._container = container;
            this._array = array;
            this._scoreboard = scoreboard;

            //set health to 5
            this._health = 5;

            //set dy to 5
            this._dx = 3;
        } //constructor ends

        //Public Methods//////////////////////////////////////////////////////////////////////////
        public update(): void {
            //if the slug hits the left or right of the playable area...
            if (this.x <= 64 || this.x >= 896) {
                //reverse the direction
                this._dx *= -1;
            } //if ends

            //add dx to x
            this.x += this._dx;
        } //method update ends

        /*
         * This method causes the slug to take damage when it collides. If its health is less
         * than 1 the player receives 50 points and the biklops is removed from the game.
         */
        public collide(): void {
            //subtract 1 from health
            this._health--;

            //if it has no health...
            if (this._health <= 0) {
                //add 50 to the score
                this._scoreboard.score += 50;

                //remove it from the game
                this._array.splice(this._array.indexOf(this), 1);
                this._container.removeChild(this);
            } //if ends
        } //method collide ends
    } //class Slug ends
} //module objects ends 