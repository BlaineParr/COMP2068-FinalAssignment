/*
 * This class creates an enemy which moves up and down.
 */
module objects {
    export class BlindKoala extends objects.GameObject {
        //instance variables
        private _dy: number;
        private _health: number;
        private _array: objects.BlindKoala[] = [];
        private _container: createjs.Container;
        private _scoreboard: objects.ScoreBoard;

        //Constructor/////////////////////////////////////////////////////////////////////////////
        /*
         * This constructor creates the blindKoala at the x and y specified.
         */
        constructor(x: number, y: number, container: createjs.Container, array: objects.BlindKoala[], scoreboard: objects.ScoreBoard) {
            super("blindKoala", x, y);

            //set the variables
            this._array = array;
            this._container = container;
            this._scoreboard = scoreboard;

            //set health to 3
            this._health = 3;

            //set dy to 5
            this._dy = 5;
        } //constructor ends

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update(): void {
            //if the blindKoala hits the top or bottom of the playable area...
            if (this.y <= 64 || this.y >= 576) {
                //reverse the direction
                this._dy *= -1;
            } //if ends

            //add dy to y
            this.y += this._dy;
        } //method update ends

        /*
         * This method causes the blindKoala to take damage when it collides. If its health is less
         * than 1 the player receives 100 points and the biklops is removed from the game.
         */
        public collide(): void {
            //subtract 1 from health
            this._health--;

            //if it has no health...
            if (this._health <= 0) {

                //add 100 to the score
                this._scoreboard.score += 100;

                //remove it from the game
                this._array.splice(this._array.indexOf(this), 1);
                this._container.removeChild(this);
            } //if ends
        } //method collide ends
    } //class Biklops ends
} //module objects ends