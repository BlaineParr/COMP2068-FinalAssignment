/*
 * This class creates a scoreboard displaying the user's current score and how many lives they
 * have remaining.
 */
module objects {
    export class ScoreBoard {
        //instance variables
        private _livesLabel: createjs.Text;
        private _scoreLabel: createjs.Text;
        public lives: number = constants.PLAYER_LIVES;
        public score: number = 0;

        //Constructor/////////////////////////////////////////////////////////////////////////////
        /*
         * This constructor creates a scoreBoard displaying the player's lives and score.
         */
        constructor(game: createjs.Container) {

            this._livesLabel = new createjs.Text("LIVES: ", constants.FONT_SIZE + " " + constants.FONT_FAMILY, constants.FONT_COLOUR);
            this._livesLabel.x = 65;
            game.addChild(this._livesLabel);

            this._scoreLabel = new createjs.Text("SCORE: ", constants.FONT_SIZE + " " + constants.FONT_FAMILY, constants.FONT_COLOUR);
            this._scoreLabel.x = 600;
            game.addChild(this._scoreLabel);
        } //constructor ends

        //Public Methods//////////////////////////////////////////////////////////////////////////
        /*
         * This method updates the displayed lives and score.
         */
        public update(): void {
            this._livesLabel.text = "LIVES: " + this.lives.toString();
            this._scoreLabel.text = "SCORE: " + this.score.toString();
        } //method update ends
    } //class scoreBoard ends
} //module objects ends