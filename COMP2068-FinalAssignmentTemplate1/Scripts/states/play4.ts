/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/biklops.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/blindkoala.ts" />
/// <reference path="../objects/slug.ts" />
/// <reference path="../objects/door.ts" />
/// <reference path="../objects/robin.ts" />
/// <reference path="../objects/pongball.ts" />
/// <reference path="../objects/barrier.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/scoreboard.ts" />

module states {
    export class Play4 {
        //instance variables
        public game: createjs.Container;
        public robin: objects.Robin;
        public stevieKong: objects.StevieKong;
        public ocean: objects.Ocean;
        public scoreboard: objects.ScoreBoard;
        public door: objects.Door;
        public barriers: objects.Barrier[] = [];

        //Constructor/////////////////////////////////////////////////////////////////////////////
        constructor() {
            //clear the stage
            stage.removeAllChildren();
            stage.removeAllEventListeners();

            //instantiate Game Container
            this.game = new createjs.Container();

            //add ocean to game
            this.ocean = new objects.Ocean();
            this.game.addChild(this.ocean);

            //add door to the game
            this.door = new objects.Door(464, 0, constants.GAME_OVER_STATE);
            this.game.addChild(this.door);

            //add scoreboard to the game
            this.scoreboard = new objects.ScoreBoard(this.game);

            //get the lives and score from the global variables
            this.scoreboard.lives = playerLives;
            this.scoreboard.score = playerScore;

            //add plane to game
            this.robin = new objects.Robin(464, 534, this.game, this.scoreboard);
            this.game.addChild(this.robin);

            //add barriers
            this.barriers[0] = new objects.Barrier(this.robin, 0, 0, 64, 640);
            this.barriers[1] = new objects.Barrier(this.robin, 0, 0, 960, 64);
            this.barriers[2] = new objects.Barrier(this.robin, 896, 0, 64, 640);
            this.barriers[3] = new objects.Barrier(this.robin, 0, 576, 960, 64);

            //add stevieKong to the game
            this.stevieKong = new objects.StevieKong(464, 64, this.game, this.robin, this.scoreboard);
            this.game.addChild(this.stevieKong);

            //set up the game for keyboard input
            //this section checks which key was pressed
            document.addEventListener("keydown", function (event) {
                event.preventDefault(); //stops the page from scrolling down when space is pressed
                play4.robin.actionStart(event.keyCode); //send the plane the key that was pressed
            });

            //this section checks which key was released
            document.addEventListener("keyup", function (event) {
                play4.robin.actionEnd(event.keyCode); //send the plane the key that was pressed
            });

            stage.addChild(this.game);
        } //constructor ends


        //Public Methods//////////////////////////////////////////////////////////////////////////
        //Check collision
        public checkCollision(collider1: objects.GameObject, getsHit1: boolean, collider2: objects.GameObject, getsHit2: boolean) {
            if (collider1.hitBox().intersects(collider2.hitBox())) {
                if (!collider1.isColliding && !collider2.isColliding) {
                    if (getsHit1) {
                        collider1.collide();
                    } //if ends
                    if (getsHit2) {
                        collider2.collide();
                    } //if ends
                } //if ends
            } //if ends
        } //method checkCollision ends

        //Update Method
        public update(): void {
            this.ocean.update();

            for (var barrier = 3; barrier >= 0; barrier--) {
                this.barriers[barrier].update();
            } //for ends

            this.robin.update();

            if (this.scoreboard.lives > 0) {
                if (this.stevieKong != null) {
                    if (this.stevieKong.health > 0) {
                        this.stevieKong.update();
                    } //if ends
                    this.checkCollision(this.stevieKong, false, this.robin, true);

                    for (var weight = this.stevieKong.numberOfWeights - 1; weight >= 0; weight--) {
                        this.stevieKong.weights[weight].update();

                        if (this.stevieKong.weights[weight] != null && this.robin != null) {
                            this.checkCollision(this.stevieKong.weights[weight], true, this.robin, true);
                        } //if ends

                        if (this.stevieKong.health <= 0) {
                            this.stevieKong = null;
                            this.door.unlocked = true;

                            finalScore = this.scoreboard.score;

                            if (finalScore > highScore) {
                                highScore = finalScore;
                            } //if ends
                        } //if ends
                    } //for ends
                } //if ends

                for (var pongBall = this.robin.numberOfPongBalls - 1; pongBall >= 0; pongBall--) {
                    this.robin.pongBalls[pongBall].update();

                    if (this.robin.pongBalls[pongBall] != null && this.stevieKong != null) {
                        this.checkCollision(this.robin.pongBalls[pongBall], true, this.stevieKong, true);
                    } //if ends
                } //for ends

                this.checkCollision(this.robin, false, this.door, true);
            } //if ends

            this.scoreboard.update();

            if (this.scoreboard.lives < 1) {
                createjs.Sound.stop();
                this.game.removeAllChildren();
                stage.removeAllChildren();
                finalScore = this.scoreboard.score;

                if (finalScore > highScore) {
                    highScore = finalScore;
                } //if ends
                currentState = constants.GAME_OVER_STATE;
                stateChanged = true;
            } //if ends
        } //method update ends
    } //class play ends
} //module objects ends  