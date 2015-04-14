module objects {

    export class Door extends objects.GameObject {
        
        //door is locked when lockedUnlocked is set to true
          private _lockedUnlocked: boolean ;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super("closedDoor");
            this.name = "closedDoor";
            this.x = 100;
            this.y = 100;
            this._lockedUnlocked = false;
            
          
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
      

        


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++

        public collide() {
            
            if (this._lockedUnlocked) {
                //changes the door to a state we can move on to the next level from
                changeState(constants.PLAY_STATE);
                this.name = "openDoor";

            }

      
        }


    }

}    