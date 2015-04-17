/*
 * This class creates a door which the player can use to go to the next room.
 */
module objects {
    export class Door extends objects.GameObject {
        //instance variables
        private _state: number;
        public unlocked: boolean;

        //Constructor/////////////////////////////////////////////////////////////////////////////
        /*
         * This constructor creates a door at the position specified and will take the player to
         * the game state specified.
         */
        constructor(x: number, y: number, state: number) {
            super("closedDoor", x, y);

            //set the door to be locked
            this.unlocked = false;

            //set the state
            this._state = state;
        } //constructor ends

        //Public Methods//////////////////////////////////////////////////////////////////////////
        /*
         * This method takes the player to the next state if the door is unlocked.
         */
        public collide(): void {
            if (this.unlocked) {
                //changes the door to a state we can move on to the next level from
                changeState(this._state);
            } //if ends
        } //method collide ends
    } //class door ends
} //module objects ends