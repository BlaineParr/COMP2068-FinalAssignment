/*
 * This class displays the instructions of the game.
 */
var states;
(function (states) {
    var Instuctions = (function () {
        //Constructor/////////////////////////////////////////////////////////////////////////////
        /*
         * This constructor adds the instructions screen and playButton to the game.
         */
        function Instuctions() {
            //instantiate Game Container
            this.game = new createjs.Container();
            //add ocean to game
            this.instructions = new createjs.Bitmap("assets/images/instructions.png");
            this.game.addChild(this.instructions);
            //display the playButton
            this.playButton = new objects.Button("playButton", constants.SCREEN_CENTER_WIDTH, 500);
            this.game.addChild(this.playButton);
            //set up the playButton's click event
            this.playButton.on("click", this.playButtonClicked, this);
            //add the game to the stage
            stage.addChild(this.game);
        } // constructor end
        //Public Methods//////////////////////////////////////////////////////////////////////////
        /*
         * This method changes the game to the play state when clicked.
         */
        Instuctions.prototype.playButtonClicked = function () {
            //clear the game
            this.game.removeAllChildren();
            //remove the game
            stage.removeChild(this.game);
            //change to the play state
            currentState = constants.PLAY_STATE;
            stateChanged = true;
        }; //method publicButtonClicked ends
        /*
         * This method updates the menu state
         */
        Instuctions.prototype.update = function () {
        }; // update method end
        return Instuctions;
    })();
    states.Instuctions = Instuctions; //class menu ends
})(states || (states = {})); //module states ends
//# sourceMappingURL=instructions.js.map