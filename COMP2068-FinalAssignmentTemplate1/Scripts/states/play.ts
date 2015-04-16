/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/biklops.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/blindkoala.ts" />
/// <reference path="../objects/slug.ts" />
/// <reference path="../objects/door.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/pongball.ts" />
/// <reference path="../objects/barrier.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/scoreboard.ts" />

module states {
    export class Play {
        //instance variables
        public game: createjs.Container;
        public plane: objects.Plane;
        public slugs: objects.Slug[] = [];
        public ocean: objects.Ocean;
        public scoreboard: objects.ScoreBoard;
        public door: objects.Door;
        public barriers: objects.Barrier[] = [];

        //Constructor/////////////////////////////////////////////////////////////////////////////
        constructor() {
            //clear the stage
            stage.removeAllChildren();
            stage.removeAllEventListeners();
            createjs.Sound.stop();

            //instantiate Game Container
            this.game = new createjs.Container();

            //play the song
            createjs.Sound.play("song", { loop: -1 });

            //add ocean to game
            this.ocean = new objects.Ocean();
            this.game.addChild(this.ocean);

            //add door to the game
            this.door = new objects.Door(464, 0, constants.PLAY_STATE_2);
            this.game.addChild(this.door);

            //add scoreboard to the game
            this.scoreboard = new objects.ScoreBoard(this.game);

            //add plane to game
            this.plane = new objects.Plane(464, 534, this.game, this.scoreboard);
            this.game.addChild(this.plane);

            //add barriers
            this.barriers[0] = new objects.Barrier(this.plane, 0, 0, 64, 640);
            this.barriers[1] = new objects.Barrier(this.plane, 0, 0, 960, 64);
            this.barriers[2] = new objects.Barrier(this.plane, 896, 0, 64, 640);
            this.barriers[3] = new objects.Barrier(this.plane, 0, 576, 960, 64);

            //add slugss to game
            for (var slug = 2; slug >= 0; slug--) {
                this.slugs[slug] = new objects.Slug(Math.floor(Math.random() * 702) + 64, Math.floor(Math.random() * 384) + 64, this.game, this.slugs, this.scoreboard);
                this.game.addChild(this.slugs[slug]);
            } //for ends

            //set up the game for keyboard input
            //this section checks which key was pressed
            document.addEventListener("keydown", function (event) {
                event.preventDefault(); //stops the page from scrolling down when space is pressed
                play.plane.actionStart(event.keyCode); //send the plane the key that was pressed
            });

            //this section checks which key was released
            document.addEventListener("keyup", function (event) {
                play.plane.actionEnd(event.keyCode); //send the plane the key that was pressed
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

            this.plane.update();

            if (this.scoreboard.lives > 0) {
                for (var slug = this.slugs.length - 1; slug >= 0; slug--) {
                    this.slugs[slug].update();
                    this.checkCollision(this.slugs[slug], false, this.plane, true);
                } //for ends

                for (var pongBall = this.plane.numberOfPongBalls - 1; pongBall >= 0; pongBall--) {
                    this.plane.pongBalls[pongBall].update();
                   // this.checkCollision(this.clouds[cloud], true, this.plane.pongBalls[pongBall], true);

                    for (var slug = this.slugs.length - 1; slug >= 0; slug--) {
                        if (this.plane.pongBalls[pongBall] != null) {
                            this.checkCollision(this.plane.pongBalls[pongBall], true, this.slugs[slug], true);
                        } //if ends
                    } //if ends
                } //for ends

                if (this.slugs.length == 0) {
                    this.door.unlocked = true;
                    //put the current score and lives in the global variables since the level is
                    //complete
                    playerScore = this.scoreboard.score;
                    playerLives = this.scoreboard.lives;
                } //if ends

                this.checkCollision(this.plane, false, this.door, true);
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