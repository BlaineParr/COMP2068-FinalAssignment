module objects {

    export class Plane extends objects.GameObject {
        //instance variables
        private _container: createjs.Container;
        private _scoreboard: objects.ScoreBoard;
        private _movingUp: boolean;
        private _movingDown: boolean;
        private _movingLeft: boolean;
        private _movingRight: boolean;
        private _firing: boolean;
        private _currentDirection: number;
        private _shotDelay: number;
        private _invincible: boolean;
        private _invincibleTime: number;
        public preX: number;
        public preY: number;
        public name: string;
        public pongBalls: objects.PongBall[] = [];
        public numberOfPongBalls: number;

        //Constructor/////////////////////////////////////////////////////////////////////////////
        constructor(container: createjs.Container, scoreBoard: objects.ScoreBoard) {
            super("robin");

            this._container = container;
            this._scoreboard = scoreBoard;

            this._currentDirection = constants.DOWN;

            this.x = 100
            this.y = 430;

            this.numberOfPongBalls = 0;

            this._shotDelay = 0;

            this._invincible = false;

            createjs.Sound.play("engine", { loop: -1 });
        } //constructor ends

        //Private Methods/////////////////////////////////////////////////////////////////////////
        public _shoot(): void {
            if (Date.now() > this._shotDelay) {
                this._shotDelay = Date.now() + 250;

                this.pongBalls[this.numberOfPongBalls] = new objects.PongBall(this._container, this.x, this.y, this._currentDirection, this);
                this._container.addChild(this.pongBalls[this.numberOfPongBalls]);
                this.numberOfPongBalls++;
            } //if ends
        } //method shoot ends

        //Public Methods//////////////////////////////////////////////////////////////////////////
        public update(): void {
            this.preX = this.x;
            this.preY = this.y;

            if (this._invincible) {
                if (Date.now() > this._invincibleTime) {
                    this._invincible = false;
                } //if ends
            } //if ends

            if (this._firing) {
                this._shoot();
            } //if ends
            if (this._movingUp) {
                this.y -= 5;
            } //if ends
            if (this._movingDown) {
                this.y += 5;
            } //else if ends
            if (this._movingLeft) {
                this.x -= 5;
            } //else if ends
            if (this._movingRight) {
                this.x += 5;
            } //else if ends
        } //method update ends

        public actionStart(key): void {
            if (key == 32) {
                this._firing = true;
            } //if ends
            if (key == 87) {
                this._movingUp = true;
                this._currentDirection = constants.UP;
            } //if ends
            if (key == 83) {
                this._movingDown = true;
                this._currentDirection = constants.DOWN;
            } //if ends
            if (key == 65) {
                this._movingLeft = true;
                this._currentDirection = constants.LEFT;
            } //if ends
            if (key == 68) {
                this._movingRight = true;
                this._currentDirection = constants.RIGHT;
            } //if ends
        }//method actionStart ends

        public actionEnd(key): void {
            if (key == 32) {
                this._firing = false;
            } //if ends
            if (key == 87) {
                this._movingUp = false;
            } //if ends
            if (key == 83) {
                this._movingDown = false;
            } //if ends
            if (key == 65) {
                this._movingLeft = false;
            } //if ends
            if (key == 68) {
                this._movingRight = false;
            } //if ends
        }//method actionStart ends

        public collide(): void {
            if (!this._invincible) {
                this._scoreboard.lives--;
                this._invincible = true;
                this._invincibleTime = Date.now() + 3000;
            } //if ends
        } //method collide ends
    } //class Plane ends
} //module objects ends