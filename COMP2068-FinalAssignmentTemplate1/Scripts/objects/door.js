var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*
 * This class creates a door which the player can use to go to the next room.
 */
var objects;
(function (objects) {
    var Door = (function (_super) {
        __extends(Door, _super);
        //Constructor/////////////////////////////////////////////////////////////////////////////
        /*
         * This constructor creates a door at the position specified and will take the player to
         * the game state specified.
         */
        function Door(x, y, state) {
            _super.call(this, "closedDoor", x, y);
            //set the door to be locked
            this.unlocked = false;
            //set the state
            this._state = state;
        } //constructor ends
        //Public Methods//////////////////////////////////////////////////////////////////////////
        /*
         * This method takes the player to the next state if the door is unlocked.
         */
        Door.prototype.collide = function () {
            if (this.unlocked) {
                //play the doorOpen sound
                createjs.Sound.play("doorOpen");
                //changes the door to a state we can move on to the next level from
                changeState(this._state);
            } //if ends
        }; //method collide ends
        return Door;
    })(objects.GameObject);
    objects.Door = Door; //class door ends
})(objects || (objects = {})); //module objects ends
//# sourceMappingURL=door.js.map