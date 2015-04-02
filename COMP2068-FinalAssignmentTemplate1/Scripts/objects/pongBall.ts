/*
* this is the laser that the player fires from the character it will be removed if it collides with something
*/
module objects {
    export class PongBall extends objects.GameObject {

      

        //constructor ++++++++++++++++++++++++++++
        constructor(x: number, y: number) {
            super("pongBall");
            this.x = x;
            this.y = y;
  


            //this.soundString = "laser_sound";



        }

        //public methods+++++++++++++++++++++++++++
        public update() {

            this.x += 5;

            if (this.x > 800) {

            }

        }
        public hit() {
            

        }

    }
}  