/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/scoreboard.ts" />
var states;
(function (states) {
    var Play = (function () {
        //Constructor/////////////////////////////////////////////////////////////////////////////
        function Play() {
            this.clouds = [];
            //instantiate Game Container
            this.game = new createjs.Container();
            //add ocean to game
            this.ocean = new objects.Ocean();
            this.game.addChild(this.ocean);
            //add island to game
            this.island = new objects.Island();
            this.game.addChild(this.island);
            //add plane to game
            this.plane = new objects.Plane();
            this.game.addChild(this.plane);
            for (var cloud = constants.CLOUD_NUM; cloud > 0; cloud--) {
                this.clouds[cloud] = new objects.Cloud();
                this.game.addChild(this.clouds[cloud]);
            }
            this.scoreboard = new objects.ScoreBoard(this.game);
            //set up the game for keyboard input
            //this section checks which key was pressed
            document.addEventListener("keydown", function (event) {
                event.preventDefault(); //stops the page from scrolling down when space is pressed
                play.plane.actionStart(event.keyCode); //send the plane the key that was pressed
            });
            //this section checks which key was released
            document.addEventListener("keyup", function (event) {
                play.plane.actionEnd(event.keyCode); //send the plane the key that was pressed
            });
            stage.addChild(this.game);
        } //constructor ends
        //Public Methods//////////////////////////////////////////////////////////////////////////
        // Calculate the distance between two points
        Play.prototype.distance = function (p1, p2) {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        }; //method distance ends
        //Check Collision Method
        Play.prototype.checkCollision = function (collider) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.plane.x;
            p1.y = this.plane.y;
            p2.x = collider.x;
            p2.y = collider.y;
            // Check for Collision
            if (this.distance(p2, p1) < ((this.plane.height * 0.5) + (collider.height * 0.5))) {
                if (!collider.isColliding) {
                    createjs.Sound.play(collider.soundString);
                    collider.isColliding = true;
                    switch (collider.name) {
                        case "island":
                            this.scoreboard.score += 100;
                            break;
                        case "cloud":
                            this.scoreboard.lives--;
                            break;
                    }
                } //if ends
            }
            else {
                collider.isColliding = false;
            } //else ends
        }; //method checkCollision ends
        //Update Method
        Play.prototype.update = function () {
            this.ocean.update();
            this.plane.update();
            this.island.update();
            if (this.scoreboard.lives > 0) {
                for (var cloud = constants.CLOUD_NUM; cloud > 0; cloud--) {
                    this.clouds[cloud].update();
                    this.checkCollision(this.clouds[cloud]);
                }
                this.checkCollision(this.island);
            } //if ends
            this.scoreboard.update();
            if (this.scoreboard.lives < 1) {
                createjs.Sound.stop();
                this.game.removeAllChildren();
                stage.removeAllChildren();
                finalScore = this.scoreboard.score;
                if (finalScore > highScore) {
                    highScore = finalScore;
                } //if ends
                currentState = constants.GAME_OVER_STATE;
                stateChanged = true;
            } //if ends
        }; //method update ends
        return Play;
    })();
    states.Play = Play; //class play ends
})(states || (states = {})); //module objects ends
//# sourceMappingURL=play.js.map