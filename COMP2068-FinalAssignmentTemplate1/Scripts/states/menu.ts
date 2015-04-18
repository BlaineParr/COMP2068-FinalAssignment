﻿/*
 * This class displays the menu of the game.
 */
module states {
    export class Menu {
        //instance variables
        public game: createjs.Container;
        public background: objects.Background;
        public playButton: objects.Button;

        //Constructor/////////////////////////////////////////////////////////////////////////////
        constructor() {
            //instantiate Game Container
            this.game = new createjs.Container();

            //add ocean to game
            this.background = new objects.Background();
            this.game.addChild(this.background);

            //display the title of the game
            var gameLabel: objects.Label = new objects.Label("THE LEGEND OF ROBIN", constants.SCREEN_CENTER_WIDTH, 100);
            gameLabel.font = "80px Consolas";
            gameLabel.regX = gameLabel.getMeasuredWidth() * 0.5;
            gameLabel.regY = gameLabel.getMeasuredHeight() * 0.5;
            this.game.addChild(gameLabel);

            //display the playButton
            this.playButton = new objects.Button("playButton", constants.SCREEN_CENTER_WIDTH, 400);
            this.game.addChild(this.playButton);

            //set up the playButton's click event
            this.playButton.on("click", this.playButtonClicked, this);

            //add the game to the stage
            stage.addChild(this.game);
        } // constructor end


        //Public Methods//////////////////////////////////////////////////////////////////////////
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