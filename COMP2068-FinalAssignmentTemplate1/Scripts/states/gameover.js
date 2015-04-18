/*
 * This class displays the final score and highscore when the game ends. The user is shown a
 * button that will let them replay the game.
 */
var states;
(function (states) {
    var GameOver = (function () {
        //Constructor/////////////////////////////////////////////////////////////////////////////
        /*
         * This constructor clears the stage and adds all of the elements of the gameOver state.
         */
        function GameOver() {
            //clear the stage and stop all sounds
            stage.clear();
            stage.removeAllEventListeners();
            createjs.Sound.stop();
            //instantiate Game Container
            this.game = new createjs.Container();
            //add background to game
            this.background = new objects.Background();
            this.game.addChild(this.background);
            //display game over
            var gameOverLabel = new objects.Label("GAME OVER", constants.SCREEN_CENTER_WIDTH, 100);
            gameOverLabel.font = "60px Consolas";
            gameOverLabel.regX = gameOverLabel.getMeasuredWidth() * 0.5;
            gameOverLabel.regY = gameOverLabel.getMeasuredHeight() * 0.5;
            this.game.addChild(gameOverLabel);
            //display the final score
            var finalScoreLabel = new objects.Label("FINAL SCORE: " + finalScore, constants.SCREEN_CENTER_WIDTH, 200);
            this.game.addChild(finalScoreLabel);
            //display the high score
            var highScoreLabel = new objects.Label("HIGH SCORE: " + highScore, constants.SCREEN_CENTER_WIDTH, 300);
            this.game.addChild(highScoreLabel);
            //display the tryAgainButton
            this.tryAgainButton = new objects.Button("tryAgainButton", constants.SCREEN_CENTER_WIDTH, 400);
            this.game.addChild(this.tryAgainButton);
            //set up tryAgainButton's click event
            this.tryAgainButton.on("click", this.tryAgainButtonClicked, this);
            //add the stage to the game
            stage.addChild(this.game);
        } //constructor ends
        //Public Methods//////////////////////////////////////////////////////////////////////////
        /*
         * This method sets the game to the play state when the try again button is clicked.
         */
        GameOver.prototype.tryAgainButtonClicked = function () {
            //clear the game
            this.game.removeAllChildren();
            //remove the game
            stage.removeChild(this.game);
            //change the state
            currentState = constants.PLAY_STATE;
            stateChanged = true;
        }; //method tryAgainButtonClicked ends
        /*
         * This method updates the game over screen
         */
        GameOver.prototype.update = function () {
        }; // update method end
        return GameOver;
    })();
    states.GameOver = GameOver; //class gameover ends
})(states || (states = {})); //module states ends
//# sourceMappingURL=gameover.js.map