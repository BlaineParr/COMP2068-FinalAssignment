/*
 * This class is the third level of the game.
 */
module states {
    export class Play3 {
        //instance variables
        public game: createjs.Container;
        public robin: objects.Robin;
        public slugs: objects.Slug[] = [];
        public blindKoalas: objects.BlindKoala[] = [];
        public biklopses: objects.Biklops[] = [];
        public background: objects.Background;
        public scoreboard: objects.ScoreBoard;
        public door: objects.Door;
        public barriers: objects.Barrier[] = [];

        //Constructor/////////////////////////////////////////////////////////////////////////////
        constructor() {
            //clear the stage
            stage.removeAllChildren();
            stage.removeAllEventListeners();

            //instantiate Game Container
            this.game = new createjs.Container();

            //add background to game
            this.background = new objects.Background();
            this.game.addChild(this.background);

            //add door to the game
            this.door = new objects.Door(464, 0, constants.PLAY_STATE_4);
            this.game.addChild(this.door);

            //add scoreboard to the game
            this.scoreboard = new objects.ScoreBoard(this.game);

            //get the lives and score from the global variables
            this.scoreboard.lives = playerLives;
            this.scoreboard.score = playerScore;

            //add robin to game
            this.robin = new objects.Robin(464, 534, this.game, this.scoreboard);
            this.game.addChild(this.robin);

            //add barriers
            this.barriers[0] = new objects.Barrier(this.robin, 0, 0, 64, 640);
            this.barriers[1] = new objects.Barrier(this.robin, 0, 0, 960, 64);
            this.barriers[2] = new objects.Barrier(this.robin, 896, 0, 64, 640);
            this.barriers[3] = new objects.Barrier(this.robin, 0, 576, 960, 64);

            //add slugs to game
            for (var slug = 2; slug >= 0; slug--) {
                this.slugs[slug] = new objects.Slug(Math.floor(Math.random() * 702) + 65, Math.floor(Math.random() * 384) + 65, this.game, this.slugs, this.scoreboard);
                this.game.addChild(this.slugs[slug]);
            } //for ends

            //add blindKoalas to game
            for (var blindKoala = 2; blindKoala >= 0; blindKoala--) {
                this.blindKoalas[blindKoala] = new objects.BlindKoala(Math.floor(Math.random() * 702) + 65, Math.floor(Math.random() * 384) + 65, this.game, this.blindKoalas, this.scoreboard);
                this.game.addChild(this.blindKoalas[blindKoala]);
            } //for ends

            //add biklops to game
            for (var biklops = 2; biklops >= 0; biklops--) {
                this.biklopses[biklops] = new objects.Biklops(Math.floor(Math.random() * 702) + 65, Math.floor(Math.random() * 384) + 65, this.game, this.robin, this.biklopses, this.scoreboard);
                this.game.addChild(this.biklopses[biklops]);
            } //for ends

            //set up the game for keyboard input
            //this section checks which key was pressed
            document.addEventListener("keydown", function (event) {
                event.preventDefault(); //stops the page from scrolling down when space is pressed
                play3.robin.actionStart(event.keyCode); //send the plane the key that was pressed
            });

            //this section checks which key was released
            document.addEventListener("keyup", function (event) {
                play3.robin.actionEnd(event.keyCode); //send the plane the key that was pressed
            });

            //add the game to the stage
            stage.addChild(this.game);
        } //constructor ends


        //Public Methods//////////////////////////////////////////////////////////////////////////
        /*
         * This method checks if two objects are colliding with each other
         */
        public checkCollision(collider1: objects.GameObject, getsHit1: boolean, collider2: objects.GameObject, getsHit2: boolean) {
            //if the rectangles of the two objects intersect...
            if (collider1.hitBox().intersects(collider2.hitBox())) {
                //if getsHit1 is true
                if (getsHit1) {
                    collider1.collide(); //call collide
                } //if ends

                //if getsHit2 is true
                if (getsHit2) {
                    collider2.collide(); //call collide
                } //if ends
            } //if ends
        } //method checkCollision ends

        /*
         * This method updates the game.
         */
        public update(): void {
            //call each barrier's update
            for (var barrier = 3; barrier >= 0; barrier--) {
                this.barriers[barrier].update();
            } //for ends

            //update the player
            this.robin.update();

            //if alive...
            if (this.scoreboard.lives > 0) {
                //update each slug
                for (var slug = this.slugs.length - 1; slug >= 0; slug--) {
                    this.slugs[slug].update();

                    //check if the slug collides with the player
                    this.checkCollision(this.slugs[slug], false, this.robin, true);
                } //for ends

                //update each blindKoala
                for (var blindKoala = this.blindKoalas.length - 1; blindKoala >= 0; blindKoala--) {
                    this.blindKoalas[blindKoala].update();

                    //check if the blindKoala collides with the player
                    this.checkCollision(this.blindKoalas[blindKoala], false, this.robin, true);
                } //for ends

                //update each biklops
                for (var biklops = this.biklopses.length - 1; biklops >= 0; biklops--) {
                    this.biklopses[biklops].update();

                    //check if the biklops collides with the player
                    this.checkCollision(this.biklopses[biklops], false, this.robin, true);
                } //for ends

                //update each pongBall
                for (var pongBall = this.robin.numberOfPongBalls - 1; pongBall >= 0; pongBall--) {
                    this.robin.pongBalls[pongBall].update();

                    //check each slug to see if collides with the pongBall
                    for (var slug = this.slugs.length - 1; slug >= 0; slug--) {
                        //if neither the pongBall nor the slug is null
                        if (this.robin.pongBalls[pongBall] != null && this.slugs[slug] != null) {
                            //check if they collide
                            this.checkCollision(this.robin.pongBalls[pongBall], true, this.slugs[slug], true);
                        } //if ends
                    } //for ends

                    //check each blindKoala to see if collides with the pongBall
                    for (var blindKoala = this.blindKoalas.length - 1; blindKoala >= 0; blindKoala--) {
                        //if neither the pongBall nor the blindKoala is null
                        if (this.robin.pongBalls[pongBall] != null && this.blindKoalas[blindKoala] != null) {
                            this.checkCollision(this.robin.pongBalls[pongBall], true, this.blindKoalas[blindKoala], true);
                        } //if ends
                    } //for ends

                    //check each biklops to see if collides with the pongBall
                    for (var biklops = this.biklopses.length - 1; biklops >= 0; biklops--) {
                        //if neither the pongBall nor the biklops is null
                        if (this.robin.pongBalls[pongBall] != null && this.biklopses[biklops] != null) {
                            this.checkCollision(this.robin.pongBalls[pongBall], true, this.biklopses[biklops], true);
                        } //if ends
                    } //for ends
                } //for ends

                //if there are no slugs, blindKoalas and biklopes
                if (this.slugs.length == 0 && this.blindKoalas.length == 0 && this.biklopses.length == 0) {
                    this.door.unlocked = true;

                    //put the current score and lives in the global variables since the level is
                    //complete
                    playerScore = this.scoreboard.score;
                    playerLives = this.scoreboard.lives;
                } //if ends

                //check is the player collides with the door
                this.checkCollision(this.robin, false, this.door, true);
            } //if ends

            //update the scoreboard
            this.scoreboard.update();

            //if the player runs out of lives
            if (this.scoreboard.lives < 1) {
                //stop sounds
                createjs.Sound.stop();

                //clear the game
                this.game.removeAllChildren();

                //clear the stage
                stage.removeAllChildren();

                //set the finalScore
                finalScore = this.scoreboard.score;

                //if the finalScore is higher than the highScore set the highScore to the 
                //finalScore
                if (finalScore > highScore) {
                    highScore = finalScore;
                } //if ends

                //change to the gameover state
                currentState = constants.GAME_OVER_STATE;
                stateChanged = true;
            } //if ends
        } //method update ends
    } //class play ends
} //module objects ends 