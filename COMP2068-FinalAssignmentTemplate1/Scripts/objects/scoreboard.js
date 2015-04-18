/*
 * This class creates a scoreboard displaying the user's current score and how many lives they
 * have remaining.
 */
var objects;
(function (objects) {
    var ScoreBoard = (function () {
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /*
         * This constructor creates a scoreBoard displaying the player's lives and score.
         */
        function ScoreBoard(game) {
            this.lives = constants.PLAYER_LIVES;
            this.score = 0;
            this._livesLabel = new createjs.Text("LIVES: ", constants.FONT_SIZE + " " + constants.FONT_FAMILY, constants.FONT_COLOUR);
            game.addChild(this._livesLabel);
            this._scoreLabel = new createjs.Text("SCORE: ", constants.FONT_SIZE + " " + constants.FONT_FAMILY, constants.FONT_COLOUR);
            this._scoreLabel.x = 350;
            game.addChild(this._scoreLabel);
        } //constructor ends
        /*
         * This method updates the displayed lives and score.
         */
        ScoreBoard.prototype.update = function () {
            this._livesLabel.text = "LIVES: " + this.lives.toString();
            this._scoreLabel.text = "SCORE: " + this.score.toString();
        }; //method update ends
        return ScoreBoard;
    })();
    objects.ScoreBoard = ScoreBoard; //class scoreBoard ends
})(objects || (objects = {})); //module objects ends
//# sourceMappingURL=scoreboard.js.map