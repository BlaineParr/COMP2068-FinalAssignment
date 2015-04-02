/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/pongball.ts" />
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
            this.plane = new objects.Plane(this.game);
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
        // CHeck Collision Method
        Play.prototype.checkCollision = function (collider1, hit1, collider2, hit2) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = collider1.x;
            p1.y = collider1.y;
            p2.x = collider2.x;
            p2.y = collider2.y;
            // Check for Collision
            if (this.distance(p2, p1) < ((collider1.height * 0.5) + (collider2.height * 0.5))) {
                if (!collider2.isColliding && !collider1.isColliding) {
                    createjs.Sound.play(collider2.soundString);
                    collider1.isColliding = true;
                    collider2.isColliding = true;
                    switch (collider2.name) {
                        case "island":
                            this.scoreboard.score += 100;
                            break;
                        case "enemy":
                            this.scoreboard.lives--;
                            break;
                    }
                    if (hit1) {
                        collider1.collide();
                    }
                    if (hit2) {
                        collider2.collide();
                    }
                }
            }
            else {
                collider1.isColliding = false;
                collider2.isColliding = false;
            }
        };
        //Update Method
        Play.prototype.update = function () {
            this.ocean.update();
            this.plane.update();
            this.island.update();
            //COMMENTED OUT COLLIDION CHECKING
            if (this.scoreboard.lives > 0) {
                for (var cloud = constants.CLOUD_NUM; cloud > 0; cloud--) {
                    this.clouds[cloud].update();
                }
            } //if ends
            for (var pongBall = this.plane.numberOfPongBalls - 1; pongBall >= 0; pongBall--) {
                this.plane.pongBalls[pongBall].update();
            }
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