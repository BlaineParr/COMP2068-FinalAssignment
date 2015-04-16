module objects {

    export class StevieKong extends objects.GameObject {
        //instance variables
        private _dx: number;
        private _container: createjs.Container;
        private _scoreboard: objects.ScoreBoard;
        private _player: objects.Plane
        private _shotDelay: number;
        public health: number;
        public weights: objects.Weight[] = [];
        public numberOfWeights: number;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor(x: number, y: number, container: createjs.Container, player: objects.Plane, scoreboard: objects.ScoreBoard) {
            super("stevieKong", x, y);
            this._container = container;
            this._player = player;
            this._scoreboard = scoreboard;

            this.health = 50;
            this._dx = 7;
            this.numberOfWeights = 0;
            this._shotDelay = 0;
        } //constructor ends

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        private _checkRange(): void {
            if ((this._player.x - this.x) <= 32 && (this._player.x - this.x) >= -32) {
                //25% chance to fire
                if (Math.floor(Math.random() * 100) + 1 <= 25) {
                    if (Date.now() > this._shotDelay) {
                        this._shoot();
                        this._shotDelay = Date.now() + 1000;
                    } //if ends
                }
            } //method checkRange ends
        } //method checkRange ends

        private _shoot(): void {
            this.weights[this.numberOfWeights] = new objects.Weight(this.x + (this.width / 2), this.y + (this.height / 2), this._container, this);
            this._container.addChild(this.weights[this.numberOfWeights]);
            this.numberOfWeights++;
        } //method shoot ends

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update(): void {
            if (this.x <= 64 || this.x >= 896 - this.width) {
                this._dx *= -1;
            } //if ends

            this._checkRange();
            this.x += this._dx;
        } //method update ends

        public collide(): void {
            this.health--;

            if (this.health <= 0) {
                this._scoreboard.score += 1000;
                this._container.removeChild(this);
            } //if ends
        } //method collide ends
    } //class Biklops ends
} //module objects ends 