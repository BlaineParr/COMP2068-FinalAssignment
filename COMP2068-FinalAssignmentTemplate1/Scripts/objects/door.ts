module objects {

    export class Door extends objects.GameObject {
        
        //door is locked when lockedUnlocked is set to true
          private _lockedUnlocked: boolean ;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor(x: number, y: number) {
            super("closedDoor", x, y);
            this.name = "closedDoor";
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