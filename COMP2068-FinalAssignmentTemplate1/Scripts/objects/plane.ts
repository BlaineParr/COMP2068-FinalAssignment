module objects {

    export class Plane extends objects.GameObject {
        //instance variables
        private _container: createjs.Container;
        private _scoreboard: objects.ScoreBoard;
        private _movingUp: boolean;
        private _movingDown: boolean;
        private _movingLeft: boolean;
        private _movingRight: boolean;
        private _currentDirection: number;
        public width: number;
        public height: number;
        public name: string;
        public pongBalls: objects.PongBall[] = [];
        public numberOfPongBalls: number;

        //Constructor/////////////////////////////////////////////////////////////////////////////
        constructor(container: createjs.Container, scoreBoard: objects.ScoreBoard) {
            super("plane");

            this._container = container;
            this._scoreboard = scoreBoard;

            this.name = "plane";

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this._currentDirection = constants.DOWN;

            this.y = 430;

            this.numberOfPongBalls = 0;

            createjs.Sound.play("engine", { loop: -1 });
        } //constructor ends

        //Private Methods/////////////////////////////////////////////////////////////////////////
        public _shoot(): void {
            this.pongBalls[this.numberOfPongBalls] = new objects.PongBall(this.x, this.y, this._currentDirection);
            this._container.addChild(this.pongBalls[this.numberOfPongBalls]);
            this.numberOfPongBalls++;
        } //method shoot ends

        //Public Methods//////////////////////////////////////////////////////////////////////////
        public update(): void {
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
                this._shoot();
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
            this._scoreboard.lives--;
        } //method collide ends
    } //class Plane ends
} //module objects ends