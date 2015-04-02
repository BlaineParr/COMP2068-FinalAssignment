var objects;
(function (objects) {
    // SCOREBOARD CLASS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var ScoreBoard = (function () {
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function ScoreBoard(game) {
            // PUBLIC INSTANCE VARIALBES ++++++++++++++++++++++++++++++++++++++++++++++++
            this.lives = constants.PLAYER_LIVES;
            this.score = 0;
            this._livesLabel = new createjs.Text("LIVES: ", constants.FONT_SIZE + " " + constants.FONT_FAMILY, constants.FONT_COLOUR);
            game.addChild(this._livesLabel);
            this._scoreLabel = new createjs.Text("SCORE: ", constants.FONT_SIZE + " " + constants.FONT_FAMILY, constants.FONT_COLOUR);
            this._scoreLabel.x = 350;
            game.addChild(this._scoreLabel);
        }
        ScoreBoard.prototype.update = function () {
            this._livesLabel.text = "LIVES: " + this.lives.toString();
            this._scoreLabel.text = "SCORE: " + this.score.toString();
        };
        return ScoreBoard;
    })();
    objects.ScoreBoard = ScoreBoard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map