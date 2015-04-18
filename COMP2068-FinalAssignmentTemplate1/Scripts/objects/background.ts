/*
 * This class acts as a background for the game.
 */
module objects {
    export class Background extends createjs.Bitmap {
        //instance variables ends
        private _dy = 0;
        public width;
        public height;

        //Constructor/////////////////////////////////////////////////////////////////////////////
        /*
         * This constructor creates a background.
         */
        constructor() {
            super(assetLoader.getResult("background"));

            //set the width and height
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
        } //constructor ends
    } //class Background ends
} //module objects ends