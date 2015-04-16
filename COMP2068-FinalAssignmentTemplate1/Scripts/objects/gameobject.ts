module objects {

    export class GameObject extends createjs.Bitmap {
        // PUBLIC VARIABLES
        public width: number;
        public height: number;
        public isColliding: boolean;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor(assetString:string) {
            super(assetLoader.getResult(assetString));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            //this.regX = this.width * 0.5;
            //this.regY = this.height * 0.5;

            this.isColliding = false;
        }
        //empty collide method that will be modified in the seperate objects 
        public collide() {
        }

        public hitBox(): createjs.Rectangle {
            return new createjs.Rectangle(this.x, this.y, this.width, this.height);
        } //method getBounds ends

    }

}   