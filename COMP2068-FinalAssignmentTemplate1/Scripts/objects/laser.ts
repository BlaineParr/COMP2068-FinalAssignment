/*
 * this is the laser that the player fires from the character it will be removed if it collides with something
 */
module objects {
    export class Laser extends objects.GameObject {

        public samus: objects.Samus;

        //constructor ++++++++++++++++++++++++++++
        constructor(x: number, y: number, samus: objects.Samus) {
            super("laser");
            this.x = x;
            this.y = y;
            this.samus = samus;


            this.soundString = "laser_sound";



        }

        //public methods+++++++++++++++++++++++++++
        public update() {

            this.x += 5;

            if (this.x > 680) {

             
                this.samus.lasers.splice(this.samus.lasers.indexOf(this), 1);//remove a laser from the array
                stage.removeChild(this);
            }

        }
        public hit() {
            console.log("laser exploded");
            createjs.Sound.play("enemyexplosion");
            this.samus.totalLasers--; //decrease the number of lasers in game
            this.samus.lasers.splice(this.samus.lasers.indexOf(this), 1);
            stage.removeChild(this);

        }

    }
}  