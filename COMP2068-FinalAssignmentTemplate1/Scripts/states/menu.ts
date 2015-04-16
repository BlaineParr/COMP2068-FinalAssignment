/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/biklops.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/scoreboard.ts" />


module states {
    // MENU STATE
    export class Menu {
        // INSTANCE VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++
        public game: createjs.Container;
        public ocean: objects.Ocean;
        public playButton: objects.Button;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            // Instantiate Game Container
            this.game = new createjs.Container();

            // Add ocean to game
            this.ocean = new objects.Ocean();
            this.game.addChild(this.ocean);

            var mailPilotLabel: objects.Label = new objects.Label("THE LEGEND OF ROBIN", constants.SCREEN_CENTER_WIDTH, 100);
            mailPilotLabel.font = "80px Consolas";
            mailPilotLabel.regX = mailPilotLabel.getMeasuredWidth() * 0.5;
            mailPilotLabel.regY = mailPilotLabel.getMeasuredHeight() * 0.5;
            this.game.addChild(mailPilotLabel);

            this.playButton = new objects.Button("playButton", constants.SCREEN_CENTER_WIDTH, 400);
            this.game.addChild(this.playButton);
            this.playButton.on("click", this.playButtonClicked, this);


            stage.addChild(this.game);
        } // constructor end


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        playButtonClicked() {
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            currentState = constants.PLAY_STATE;
            stateChanged = true;
        }

        // UPDATE METHOD
        public update() {

            this.ocean.update();

        } // update method end


    }
}   