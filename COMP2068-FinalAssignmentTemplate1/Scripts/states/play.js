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
var states;
(function (states) {
    var Play = (function () {
        //Constructor/////////////////////////////////////////////////////////////////////////////
        function Play() {
            this.slugs = [];
            this.barriers = [];
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
            this.robin = new objects.Robin(464, 534, this.game, this.scoreboard);
            this.game.addChild(this.robin);
            //add barriers
            this.barriers[0] = new objects.Barrier(this.robin, 0, 0, 64, 640);
            this.barriers[1] = new objects.Barrier(this.robin, 0, 0, 960, 64);
            this.barriers[2] = new objects.Barrier(this.robin, 896, 0, 64, 640);
            this.barriers[3] = new objects.Barrier(this.robin, 0, 576, 960, 64);
            for (var slug = 2; slug >= 0; slug--) {
                this.slugs[slug] = new objects.Slug(Math.floor(Math.random() * 702) + 64, Math.floor(Math.random() * 384) + 64, this.game, this.slugs, this.scoreboard);
                this.game.addChild(this.slugs[slug]);
            }
            //set up the game for keyboard input
            //this section checks which key was pressed
            document.addEventListener("keydown", function (event) {
                event.preventDefault(); //stops the page from scrolling down when space is pressed
                play.robin.actionStart(event.keyCode); //send the plane the key that was pressed
            });
            //this section checks which key was released
            document.addEventListener("keyup", function (event) {
                play.robin.actionEnd(event.keyCode); //send the plane the key that was pressed
            });
            stage.addChild(this.game);
        } //constructor ends
        //Public Methods//////////////////////////////////////////////////////////////////////////
        //Check collision
        Play.prototype.checkCollision = function (collider1, getsHit1, collider2, getsHit2) {
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
        }; //method checkCollision ends
        //Update Method
        Play.prototype.update = function () {
            this.ocean.update();
            for (var barrier = 3; barrier >= 0; barrier--) {
                this.barriers[barrier].update();
            }
            this.robin.update();
            if (this.scoreboard.lives > 0) {
                for (var slug = this.slugs.length - 1; slug >= 0; slug--) {
                    this.slugs[slug].update();
                    this.checkCollision(this.slugs[slug], false, this.robin, true);
                }
                for (var pongBall = this.robin.numberOfPongBalls - 1; pongBall >= 0; pongBall--) {
                    this.robin.pongBalls[pongBall].update();
                    for (var slug = this.slugs.length - 1; slug >= 0; slug--) {
                        if (this.robin.pongBalls[pongBall] != null) {
                            this.checkCollision(this.robin.pongBalls[pongBall], true, this.slugs[slug], true);
                        } //if ends
                    }
                }
                if (this.slugs.length == 0) {
                    this.door.unlocked = true;
                    //put the current score and lives in the global variables since the level is
                    //complete
                    playerScore = this.scoreboard.score;
                    playerLives = this.scoreboard.lives;
                } //if ends
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
        }; //method update ends
        return Play;
    })();
    states.Play = Play; //class play ends
})(states || (states = {})); //module objects ends
//# sourceMappingURL=play.js.map