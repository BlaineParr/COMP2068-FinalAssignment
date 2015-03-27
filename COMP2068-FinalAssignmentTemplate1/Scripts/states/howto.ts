/// <reference path="../constants.ts" />
/// <reference path="../objects/samus.ts" />
/// <reference path="../objects/ball.ts" />
/// <reference path="../constants.ts" />
/// <reference path="../objects/laser.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/hallway.ts" />
/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/button.ts" />



module states {

    export class HowTo {
        // INSTANCE VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++
        public game: createjs.Container;
        public background: objects.Hallway;
        public playButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            // Instantiate Game Container
            this.game = new createjs.Container();

            // Add ocean to game
            this.background = new objects.Hallway();
            this.game.addChild(this.background);

            
            var howtoScreen = new createjs.Bitmap("assets/images/howtoScreen.png");
            howtoScreen.x = 20;
          /*  var howto1: objects.Label = new objects.Label("DODGE THE ENEMIES", constants.SCREEN_CENTER_WIDTH, 100);
            var howto2: objects.Label = new objects.Label("AND COLLECT THE BALLS", constants.SCREEN_CENTER_WIDTH, 200);
            howto1.font = "40px Consolas";
            howto1.regX = howto1.getMeasuredWidth() * 0.5;
            howto1.regY = howto1.getMeasuredHeight() * 0.5;
            howto2.font = "40px Consolas";
            howto2.regX = howto2.getMeasuredWidth() * 0.5;
            howto2.regY = howto2.getMeasuredHeight() * 0.5;
            this.game.addChild(howto1);
            this.game.addChild(howto2);*/

            this.playButton = new objects.Button("playButton", constants.SCREEN_CENTER_WIDTH, 450);
            this.game.addChild(this.playButton);
            this.game.addChild(howtoScreen);
            this.playButton.on("click", this.playButtonClicked, this);

            


            stage.addChild(this.game);
        } // constructor end


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        playButtonClicked() {
            this.game.removeAllChildren();
            createjs.Sound.stop();
            stage.removeChild(this.game);
            currentState = constants.PLAY_STATE;
            stateChanged = true;
        }

        // UPDATE METHOD
        public update() {

            this.background.update();

        } // update method end

    }
} 