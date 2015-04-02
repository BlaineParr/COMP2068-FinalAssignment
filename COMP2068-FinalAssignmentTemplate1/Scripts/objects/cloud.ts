module objects {

    export class Cloud extends objects.GameObject {
        //instance variables
        private _dx: number;
        private _dy: number;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super("cloud");
            this.name = "cloud";
            this.soundString = "thunder";

            this._reset();

        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        private _reset() {
            // set the island to start at a random x value
            this.x = Math.floor(Math.random() * constants.SCREEN_WIDTH);
            this.y = -this.height;
            // add drift to the cloud 
            this._dy = Math.floor(Math.random() * 5) + 5;
            this._dx = Math.floor(Math.random() * 4) - 2;
        }

        private _checkBounds() {
            if (this.y > (constants.SCREEN_HEIGHT + this.height)) {
                this._reset();
            }
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++

        public update() {
            this.y += this._dy;
            this.x += this._dx;


            this._checkBounds();
        }

        public collide() {
        }


    }

}   