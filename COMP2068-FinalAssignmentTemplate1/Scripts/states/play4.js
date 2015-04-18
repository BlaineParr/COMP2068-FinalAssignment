/*
 * This class is the first level of the game.
 */
var states;
(function (states) {
    var Play4 = (function () {
        //Constructor/////////////////////////////////////////////////////////////////////////////
        function Play4() {
            this.barriers = [];
            //clear the stage
            stage.removeAllChildren();
            stage.removeAllEventListeners();
            //instantiate Game Container
            this.game = new createjs.Container();
            //add background to game
            this.background = new objects.Background();
            this.game.addChild(this.background);
            //add door to the game
            this.door = new objects.Door(464, 0, constants.GAME_OVER_STATE);
            this.game.addChild(this.door);
            //add scoreboard to the game
            this.scoreboard = new objects.ScoreBoard(this.game);
            //get the lives and score from the global variables
            this.scoreboard.lives = playerLives;
            this.scoreboard.score = playerScore;
            //add robin to game
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
            //add game to the stage
            stage.addChild(this.game);
        } //constructor ends
        //Public Methods//////////////////////////////////////////////////////////////////////////
        /*
         * This method checks if two objects are colliding with each other
         */
        Play4.prototype.checkCollision = function (collider1, getsHit1, collider2, getsHit2) {
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
        Play4.prototype.update = function () {
            for (var barrier = 3; barrier >= 0; barrier--) {
                this.barriers[barrier].update();
            }
            //update the player
            this.robin.update();
            //if alive...
            if (this.scoreboard.lives > 0) {
                //if stevieKong is not null...
                if (this.stevieKong != null) {
                    //if stevieKong has no health left...
                    if (this.stevieKong.health <= 0) {
                        //null stevieKong
                        this.stevieKong = null;
                        //unlock the door
                        this.door.unlocked = true;
                        //set the final score to the current score
                        finalScore = this.scoreboard.score;
                        //if the player earned a higher score than the highScore...
                        if (finalScore > highScore) {
                            //set the higherScore to the finalScore
                            highScore = finalScore;
                        } //if ends
                    } //if ends
                    //if stevieKong is still not null...
                    if (this.stevieKong != null) {
                        //update stevieKong
                        this.stevieKong.update();
                        //check if stevieKong collides with the player
                        this.checkCollision(this.stevieKong, false, this.robin, true);
                        for (var weight = this.stevieKong.numberOfWeights - 1; weight >= 0; weight--) {
                            this.stevieKong.weights[weight].update();
                            //if neither the weight nor the player is null
                            if (this.stevieKong.weights[weight] != null && this.robin != null) {
                                //check if they collide
                                this.checkCollision(this.stevieKong.weights[weight], true, this.robin, true);
                            } //if ends
                        }
                    } //if ends
                } //if ends
                for (var pongBall = this.robin.numberOfPongBalls - 1; pongBall >= 0; pongBall--) {
                    this.robin.pongBalls[pongBall].update();
                    //if neither the pongBall nor stevieKong is null
                    if (this.robin.pongBalls[pongBall] != null && this.stevieKong != null) {
                        //check if they collide
                        this.checkCollision(this.robin.pongBalls[pongBall], true, this.stevieKong, true);
                    } //if ends
                }
                //check if the player collides with the door
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
        return Play4;
    })();
    states.Play4 = Play4; //class play ends
})(states || (states = {})); //module objects ends  
//# sourceMappingURL=play4.js.map