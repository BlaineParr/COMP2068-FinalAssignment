module objects {

    export class Ocean extends createjs.Bitmap {
        // PUBLIC VARIABLES
        public width;
        public height;

        // PRIVATE VARIABLE
        private _dy = 0;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super(assetLoader.getResult("ocean"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

    

        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++

        

       


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++

        public update() {
       

        }


    }

}   