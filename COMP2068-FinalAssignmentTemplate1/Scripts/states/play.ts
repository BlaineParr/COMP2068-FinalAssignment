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

module states {
    export class Play {
        //instance variables
        public game: createjs.Container;
        public plane: objects.Plane;
        public island: objects.Island;
        public clouds: objects.Cloud[] = [];
        public ocean: objects.Ocean;
        public scoreboard: objects.ScoreBoard;

        //Constructor/////////////////////////////////////////////////////////////////////////////
        constructor() {
            //instantiate Game Container
            this.game = new createjs.Container();

            //add ocean to game
            this.ocean = new objects.Ocean();
            this.game.addChild(this.ocean);


            //add island to game
            this.island = new objects.Island();
            this.game.addChild(this.island);


            //add scoreboard to the game
            this.scoreboard = new objects.ScoreBoard(this.game);

            //add plane to game
            this.plane = new objects.Plane(this.game, this.scoreboard);
            this.game.addChild(this.plane);

            //add clouds to game
            for (var cloud = constants.CLOUD_NUM; cloud > 0; cloud--) {
                this.clouds[cloud] = new objects.Cloud();
                this.game.addChild(this.clouds[cloud]);
            } //for ends

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
        public distance(p1: createjs.Point, p2: createjs.Point): number {

            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        } //method distance ends

        // CHeck Collision Method
        checkCollision(collider1: objects.GameObject, hit1: boolean, collider2: objects.GameObject, hit2: boolean) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = collider1.x;
            p1.y = collider1.y;
            p2.x = collider2.x;
            p2.y = collider2.y;
            // Check for Collision
            if (this.distance(p2, p1) < ((collider1.height * 0.5) + (collider2.height * 0.5))) {
                if (!collider2.isColliding && !collider1.isColliding) { // Collision has occurred
                    //createjs.Sound.play(collider2.soundString);
                    collider1.isColliding = true;
                    collider2.isColliding = true;

                    
                    if (hit1) {
                        collider1. collide();
                    }
                    if (hit2) {
                        collider2.collide();
                    }
                }
            } else {
                collider1.isColliding = false;
                collider2.isColliding = false;
            }
        } 

        //Update Method
        public update(): void {
            this.ocean.update();
            this.plane.update();
            this.island.update();
        
            if (this.scoreboard.lives > 0) {
                for (var cloud = constants.CLOUD_NUM; cloud > 0; cloud--) {
                    this.clouds[cloud].update();
                    this.checkCollision(this.clouds[cloud], false, this.plane, true);
                    
                } //for ends
                for (var pongBall = this.plane.numberOfPongBalls - 1; pongBall >= 0; pongBall--) {
                    this.plane.pongBalls[pongBall].update();
                   // this.checkCollision(this.clouds[cloud], true, this.plane.pongBalls[pongBall], true);
                } //for ends
                this.checkCollision(this.island, true, this.plane, false);
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
        } //method update ends
    } //class play ends
} //module objects ends