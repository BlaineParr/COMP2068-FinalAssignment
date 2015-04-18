/*
 * This class displays the instructions of the game.
 */
module states {
    export class Instuctions {
        //instance variables
        public game: createjs.Container;
        public instructions: createjs.Bitmap;
        public playButton: objects.Button;

        //Constructor/////////////////////////////////////////////////////////////////////////////
        /*
         * This constructor adds the instructions screen and playButton to the game.
         */
        constructor() {
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
        public playButtonClicked(): void {
            //clear the game
            this.game.removeAllChildren();

            //remove the game
            stage.removeChild(this.game);

            //change to the play state
            currentState = constants.PLAY_STATE;
            stateChanged = true;
        } //method publicButtonClicked ends

        /*
         * This method updates the menu state
         */
        public update(): void {
        } // update method end
    } //class menu ends
} //module states ends