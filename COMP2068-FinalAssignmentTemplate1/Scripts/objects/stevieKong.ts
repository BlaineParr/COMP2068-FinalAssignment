/*
 * This class creates the final boss, stevieKong. He moves left and right and throws weights at
 * the player if they are within his range.
 */
module objects {
    export class StevieKong extends objects.GameObject {
        //instance variables
        private _dx: number;
        private _container: createjs.Container;
        private _scoreboard: objects.ScoreBoard;
        private _player: objects.Robin
        private _shotDelay: number;
        public health: number;
        public weights: objects.Weight[] = [];
        public numberOfWeights: number;

        //Constructor/////////////////////////////////////////////////////////////////////////////
        constructor(x: number, y: number, container: createjs.Container, player: objects.Robin, scoreboard: objects.ScoreBoard) {
            super("stevieKong", x, y);

            //set the container, player and scoreboard
            this._container = container;
            this._player = player;
            this._scoreboard = scoreboard;

            //set health to 50
            this.health = 50;

            //set dx to 7
            this._dx = 7;

            //initialize numberOfWeights to 0
            this.numberOfWeights = 0;

            //initialize the shotDelay to 0
            this._shotDelay = 0;
        } //constructor ends

        //Private Methods/////////////////////////////////////////////////////////////////////////
        private _checkRange(): void {
            //check if the player is within 16 pixels left or right
            if ((this._player.x - this.x) <= 16 && (this._player.x - this.x) >= -16) {
                //25% chance to fire
                if (Math.floor(Math.random() * 100) + 1 <= 25) {

                    //if the shotDelay has passed...
                    if (Date.now() > this._shotDelay) {
                        this._shoot(); //shoot

                        //must wait 1 second before shooting again
                        this._shotDelay = Date.now() + 1000;
                    } //if ends
                } //if ends
            } //method checkRange ends
        } //method checkRange ends

        /*
         * This method creates a weight which is fired at the player.
         */
        private _shoot(): void {
            //add a weight to the game
            this.weights[this.numberOfWeights] = new objects.Weight(this.x, this.y, this._container, this);
            this._container.addChild(this.weights[this.numberOfWeights]);

            //inscrease numberOfWeights by 1
            this.numberOfWeights++;
        } //method shoot ends

        //Public Methods//////////////////////////////////////////////////////////////////////////
        /*
         * This method updates stevieKong's position.
         */
        public update(): void {

            //if stevieKong hits the left or right of the playable area...
            if (this.x <= 64 || this.x >= 896) {
                this._dx *= -1; //reverse direction
            } //if ends

            //call checkRange
            this._checkRange();

            //add dx to x
            this.x += this._dx;
        } //method update ends

        /*
         * This method causes the stevieKong to take damage when it collides. If his health is less
         * than 1 the player receives 1000 points and he's removed from the game and all weights
         * are removed from the game.
         */
        public collide(): void {
            //decrease health by 1
            this.health--;

            //if he has no health...
            if (this.health <= 0) {
                //remove all weights
                for (var weight = this.numberOfWeights - 1; weight >= 0; weight--) {
                    this.weights[weight].collide();
                } //for ends

                //add 1000 points
                this._scoreboard.score += 1000;

                //remove him from the game
                this._container.removeChild(this);
            } //if ends
        } //method collide ends
    } //class Biklops ends
} //module objects ends 