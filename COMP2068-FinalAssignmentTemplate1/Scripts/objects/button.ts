/*
 * This class creates a button with pre-set hover effects.
 */
module objects {
    export class Button extends createjs.Bitmap {

        //Construcor//////////////////////////////////////////////////////////////////////////////
        /*
         * This constructor creates a button at the x and y position specified.
         */
        constructor(stringPath: string, x: number, y: number) {
            super(assetLoader.getResult(stringPath));

            //set the x and y reg points to the center
            this.regX = this.getBounds().width * 0.5;
            this.regY= this.getBounds().height * 0.5;

            //set x to x and y to y
            this.x = x;
            this.y = y;

            //add the event listeners for mouseover and mouseout
            this.addEventListener("mouseover", this._buttonOver);
            this.addEventListener("mouseout", this._buttonOut);
        } //constructor ends

        //Private Methods/////////////////////////////////////////////////////////////////////////
        /*
         * This method returns the button to 100% opacity when the mouse leaves it.
         */
        private _buttonOut(event: createjs.MouseEvent): void {
            event.currentTarget.alpha = 1.0;
        } //method buttonOut ends

        /*
         * This method sets the button to 50% opacity when the mouse is over it.
         */
        private _buttonOver(event: createjs.MouseEvent): void {
            event.currentTarget.alpha = 0.5;
        } //method buttonOver ends
    } //class Button ends
}  //module objects ends