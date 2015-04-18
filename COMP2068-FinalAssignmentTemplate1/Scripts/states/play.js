/*
 * This class is the first level of the game.
 */
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
            //add background to game
            this.background = new objects.Background();
            this.game.addChild(this.background);
            //add door to the game
            this.door = new objects.Door(464, 0, constants.PLAY_STATE_2);
            this.game.addChild(this.door);
            //add scoreboard to the game
            this.scoreboard = new objects.ScoreBoard(this.game);
            //add robin to game
            this.robin = new objects.Robin(464, 534, this.game, this.scoreboard);
            this.game.addChild(this.robin);
            //add barriers
            this.barriers[0] = new objects.Barrier(this.robin, 0, 0, 64, 640);
            this.barriers[1] = new objects.Barrier(this.robin, 0, 0, 960, 64);
            this.barriers[2] = new objects.Barrier(this.robin, 896, 0, 64, 640);
            this.barriers[3] = new objects.Barrier(this.robin, 0, 576, 960, 64);
            for (var slug = 2; slug >= 0; slug--) {
                this.slugs[slug] = new objects.Slug(Math.floor(Math.random() * 702) + 65, Math.floor(Math.random() * 384) + 65, this.game, this.slugs, this.scoreboard);
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
            //add game to the stage
            stage.addChild(this.game);
        } //constructor ends
        //Public Methods//////////////////////////////////////////////////////////////////////////
        /*
         * This method checks if two objects are colliding with each other
         */
        Play.prototype.checkCollision = function (collider1, getsHit1, collider2, getsHit2) {
            //if the rectangles of the two objects intersect...
            if (collider1.hitBox().intersects(collider2.hitBox())) {
                //if getsHit1 is true
                if (getsHit1) {
                    collider1.collide(); //call collide
                } //if ends
                //if getsHit2 is true
                if (getsHit2) {
                    collider2.collide(); //call collide
                } //if ends
            } //if ends
        }; //method checkCollision ends
        /*
         * This method updates the game.
         */
        Play.prototype.update = function () {
            for (var barrier = 3; barrier >= 0; barrier--) {
                this.barriers[barrier].update();
            }
            //update the player
            this.robin.update();
            //if alive...
            if (this.scoreboard.lives > 0) {
                for (var slug = this.slugs.length - 1; slug >= 0; slug--) {
                    this.slugs[slug].update();
                    //check if the slug collides with the player
                    this.checkCollision(this.slugs[slug], false, this.robin, true);
                }
                for (var pongBall = this.robin.numberOfPongBalls - 1; pongBall >= 0; pongBall--) {
                    this.robin.pongBalls[pongBall].update();
                    for (var slug = this.slugs.length - 1; slug >= 0; slug--) {
                        //if neither the pongBall nor the slug is null
                        if (this.robin.pongBalls[pongBall] != null && this.slugs[slug] != null) {
                            //check if they collide
                            this.checkCollision(this.robin.pongBalls[pongBall], true, this.slugs[slug], true);
                        } //if ends
                    }
                }
                //if there are no slugs
                if (this.slugs.length == 0) {
                    //unlock the door
                    this.door.unlocked = true;
                    //put the current score and lives in the global variables since the level is
                    //complete
                    playerScore = this.scoreboard.score;
                    playerLives = this.scoreboard.lives;
                } //if ends
                //check is the player collides with the door
                this.checkCollision(this.robin, false, this.door, true);
            } //if ends
            //update the scoreboard
            this.scoreboard.update();
            //if the player runs out of lives
            if (this.scoreboard.lives < 1) {
                //stop sounds
                createjs.Sound.stop();
                //clear the game
                this.game.removeAllChildren();
                //clear the stage
                stage.removeAllChildren();
                //set the finalScore
                finalScore = this.scoreboard.score;
                //if the finalScore is higher than the highScore set the highScore to the 
                //finalScore
                if (finalScore > highScore) {
                    highScore = finalScore;
                } //if ends
                //change to the gameover state
                currentState = constants.GAME_OVER_STATE;
                stateChanged = true;
            } //if ends
        }; //method update ends
        return Play;
    })();
    states.Play = Play; //class play ends
})(states || (states = {})); //module objects ends
//# sourceMappingURL=play.js.map