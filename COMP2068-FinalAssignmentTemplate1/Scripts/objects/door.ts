module objects {
    export class Door extends objects.GameObject {
        //instance variables
        public unlocked: boolean;
        private _state: number;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor(x: number, y: number, state: number) {
            super("closedDoor", x, y);
            this.name = "closedDoor";
            this.unlocked = false;
            this._state = state;
        } //constructor ends

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++=
        public collide() {
            if (this.unlocked) {
                //changes the door to a state we can move on to the next level from
                changeState(this._state);
            } //if ends
        } //method collide ends
    } //class door ends
} //module objects ends