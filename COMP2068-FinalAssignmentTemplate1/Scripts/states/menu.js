/*
 * This class displays the menu of the game.
 */
var states;
(function (states) {
    var Menu = (function () {
        //Constructor/////////////////////////////////////////////////////////////////////////////
        /*
         * This constructor adds the instructionsButton and playButton to the game.
         */
        function Menu() {
            //instantiate Game Container
            this.game = new createjs.Container();
            //add background to game
            this.background = new objects.Background();
            this.game.addChild(this.background);
            //display the title of the game
            var gameLabel = new objects.Label("THE LEGEND OF ROBIN", constants.SCREEN_CENTER_WIDTH, 100);
            gameLabel.font = "80px Consolas";
            gameLabel.regX = gameLabel.getMeasuredWidth() * 0.5;
            gameLabel.regY = gameLabel.getMeasuredHeight() * 0.5;
            this.game.addChild(gameLabel);
            //display the playButton
            this.playButton = new objects.Button("playButton", constants.SCREEN_CENTER_WIDTH, 300);
            this.game.addChild(this.playButton);
            //set up the playButton's click event
            this.playButton.on("click", this.playButtonClicked, this);
            //display the instructionsButton
            this.instructionsButton = new objects.Button("instructionsButton", constants.SCREEN_CENTER_WIDTH, 400);
            this.game.addChild(this.instructionsButton);
            //set up the playButton's click event
            this.instructionsButton.on("click", this.instructionsButtonClicked, this);
            //add the game to the stage
            stage.addChild(this.game);
        } // constructor end
        //Public Methods//////////////////////////////////////////////////////////////////////////
        /*
         * This method changes the game to the play state when clicked.
         */
        Menu.prototype.playButtonClicked = function () {
            //clear the game
            this.game.removeAllChildren();
            //remove the game
            stage.removeChild(this.game);
            //change to the play state
            currentState = constants.PLAY_STATE;
            stateChanged = true;
        }; //method publicButtonClicked ends
        /*
         * This method changes the game to the instructions state when clicked
         */
        Menu.prototype.instructionsButtonClicked = function () {
            //clear the game
            this.game.removeAllChildren();
            //remove the game
            stage.removeChild(this.game);
            //change to the play state
            currentState = constants.INSTRUCTIONS_STATE;
            stateChanged = true;
        }; //method publicButtonClicked ends
        /*
         * This method updates the menu state
         */
        Menu.prototype.update = function () {
        }; // update method end
        return Menu;
    })();
    states.Menu = Menu; //class menu ends
})(states || (states = {})); //module states ends
//# sourceMappingURL=menu.js.map