/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/biklops.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/scoreboard.ts" />
var states;
(function (states) {
    // PLAY STATE
    var GameOver = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function GameOver() {
            // Instantiate Game Container
            this.game = new createjs.Container();
            // Add ocean to game
            this.ocean = new objects.Ocean();
            this.game.addChild(this.ocean);
            var gameOverLabel = new objects.Label("GAME OVER", constants.SCREEN_CENTER_WIDTH, 100);
            gameOverLabel.font = "60px Consolas";
            gameOverLabel.regX = gameOverLabel.getMeasuredWidth() * 0.5;
            gameOverLabel.regY = gameOverLabel.getMeasuredHeight() * 0.5;
            this.game.addChild(gameOverLabel);
            var finalScoreLabel = new objects.Label("FINAL SCORE: " + finalScore, constants.SCREEN_CENTER_WIDTH, 200);
            this.game.addChild(finalScoreLabel);
            var highScoreLabel = new objects.Label("HIGH SCORE: " + highScore, constants.SCREEN_CENTER_WIDTH, 300);
            this.game.addChild(highScoreLabel);
            this.tryAgainButton = new objects.Button("tryAgainButton", constants.SCREEN_CENTER_WIDTH, 400);
            this.game.addChild(this.tryAgainButton);
            this.tryAgainButton.on("click", this.tryAgainButtonClicked, this);
            stage.addChild(this.game);
        } // constructor end
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        GameOver.prototype.tryAgainButtonClicked = function () {
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            currentState = constants.PLAY_STATE;
            stateChanged = true;
        };
        // UPDATE METHOD
        GameOver.prototype.update = function () {
            this.ocean.update();
        }; // update method end
        return GameOver;
    })();
    states.GameOver = GameOver;
})(states || (states = {}));
//# sourceMappingURL=gameover.js.map