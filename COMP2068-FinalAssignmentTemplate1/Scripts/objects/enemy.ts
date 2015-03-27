module objects {

    export class Enemy extends objects.GameObject {

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super("enemy");
            this.name = "enemy";
            this.soundString = "explosion";

            this._reset();

        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        private _reset() {
            // set the island to start at a random x value
            this.y = Math.floor(Math.random() * constants.SCREEN_HEIGHT);
            this.x = Math.floor(Math.random() * constants.SCREEN_HEIGHT) + constants.SCREEN_WIDTH;
            // add drift to the cloud 
            //this._dy = Math.floor(Math.random() * 5) + 5;
            this._dx = -5;
        }

        private _checkBounds() {
            if (this.x <= 0 - this.width) {
                this._reset();
            }
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++

        public update() {
            //this.y += this._dy;
            this.x += this._dx;


            this._checkBounds();
        }
        public hit() {
        }


    }

}   