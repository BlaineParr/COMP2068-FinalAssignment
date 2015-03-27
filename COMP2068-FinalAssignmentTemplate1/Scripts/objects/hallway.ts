module objects {

    export class Hallway extends createjs.Bitmap {
        // PUBLIC VARIABLES
        public width;
        public height;

        // PRIVATE VARIABLE
        private _dx = -5;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super(assetLoader.getResult("hallway"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this._reset();

        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        private _reset() {
            // set the island to start at a random x value
            this.x = constants.OCEAN_RESET_WIDTH;
            this.y =0;
        }

        private _checkBounds() {
            if (this.x <= -125) {
                this._reset();
            }
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++

        public update() {
            this.x += this._dx;

            this._checkBounds();
        }


    }

}   