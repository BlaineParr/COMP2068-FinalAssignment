module objects {

    export class Door extends objects.GameObject {
        
        //door is locked when lockedUnlocked is set to true
          private _lockedUnlocked: boolean ;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super("door");
            this.name = "door";
            
          
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
      

        


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++

        public collide() {
            
            if (this._lockedUnlocked) {

            }

      
        }


    }

}    