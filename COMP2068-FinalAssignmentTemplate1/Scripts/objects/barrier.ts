/*
 * This class creates an invisible barrier the player cannot walk through, used for the outside
 * walls of the rooms.
 */
module objects {
    export class Barrier extends createjs.Rectangle{
        //instance variables
        private _player: objects.Robin;

        //Constructor/////////////////////////////////////////////////////////////////////////////
        /*
         * This constructor creates a barrier at the x and y positions specified with the width
         * and height specified.
         */
        constructor(player: objects.Robin, x: number, y: number, width: number, height: number) {
            super(x, y, width, height);

            //set the player
            this._player = player;
        } //constructor ends

        //Public Methods//////////////////////////////////////////////////////////////////////////
        /*
         * This method moves the player back to their previous position if they are trying to walk
         * through the barrier.
         */
        public update(): void {
            if (this.intersects(this._player.hitBox())) {
                this._player.x = this._player.preX;
                this._player.y = this._player.preY;
            } //if ends
        } //method collide ends
    } //class Barrier ends
} //module objects ends 