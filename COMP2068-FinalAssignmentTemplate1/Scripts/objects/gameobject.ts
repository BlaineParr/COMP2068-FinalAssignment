/*
 * This class acts as a template for all gameObjects.
 */
module objects {
    export class GameObject extends createjs.Bitmap {
        //instance variables
        public width: number;
        public height: number

        //Constructor/////////////////////////////////////////////////////////////////////////////
        constructor(assetString: string, x: number, y: number) {
            //load the image
            super(assetLoader.getResult(assetString));

            //set the width and height
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            //set the regX and regY to the center of the object
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            //set the postion plus the width and height divided by 2 so we can specify by top left
            this.x = x + (this.width / 2);
            this.y = y + (this.height / 2);
        } //constructor ends

        /*
         * This method is for the actions that take place when an object collides. It is specified
         * in each individual object.
         */
        public collide(): void {
        } //method collide ends

        /*
         * This method creates a rectangle at the position of the object, this is used to see if
         * two objects are colliding.
         */
        public hitBox(): createjs.Rectangle {
            //create a rectangle at the x, y width and height of the object
            return new createjs.Rectangle(this.x - (this.width / 2), this.y - (this.height / 2), this.width, this.height);
        } //method getBounds ends
    } //class GameObject ends
} //module objects ends