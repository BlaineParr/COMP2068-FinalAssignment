/*
 * This class create an enemy that chases the player.
 */
module objects {
    export class Biklops extends objects.GameObject {
        //instance variables
        private _dx: number;
        private _dy: number;
        private _player: objects.Robin;
        private _health: number;
        private _array: objects.Biklops[] = [];
        private _container: createjs.Container;
        private _scoreboard: objects.ScoreBoard;

        //Constructor/////////////////////////////////////////////////////////////////////////////
        /*
         * This constructor creates a biklops at the x and y specified.
         */
        constructor(x: number, y: number, container: createjs.Container, player: objects.Robin, array: objects.Biklops[], scoreboard: objects.ScoreBoard) {
            super("biklops", x, y);

            //set all of the variables
            this._player = player;
            this._array = array;
            this._container = container;
            this._scoreboard = scoreboard;

            //set the health to 3
            this._health = 3;
        } //constructor ends

        //Private Methods/////////////////////////////////////////////////////////////////////////
        /*
         * This method changes the direction the biklops is moving based on where the player is
         * standing.
         */
        private _setDirection(): void {
            //if the player is farther right...
            if (this._player.x > this.x) {
                this._dx = 3;
            } //if ends
            //else if the player is farther left...
            else if (this._player.x < this.x) {
                this._dx = -3;
            } //else if ends

            //if the player is farther down...
            if (this._player.y > this.y) {
                this._dy = 3;
            } //if ends
            //else if the player is farther up...
            else if (this._player.y < this.y) {
                this._dy = -3;
            } //else if ends
        } //method setDirection ends

        //Public Methods
        /*
         * This method updates the biklops' position.
         */
        public update(): void {
            //set the direction
            this._setDirection();

            //add dy to y and dx to x
            this.y += this._dy;
            this.x += this._dx;
        } //method update ends

        /*
         * This method causes the biklops to take damage when it collides. If its health is less
         * than 1 the player receives 200 points and the biklops is removed from the game.
         */
        public collide(): void {
            //play the pongHit sound
            createjs.Sound.play("pongHit");

            this._health--; //subtract 1 health

            //if it has no health...
            if (this._health <= 0) {
                //add 200 to the score
                this._scoreboard.score += 200;

                //remove it from the game
                this._array.splice(this._array.indexOf(this), 1);
                this._container.removeChild(this);
            } //if ends
        } //method collide ends
    } //class Biklops ends
} //module objects ends