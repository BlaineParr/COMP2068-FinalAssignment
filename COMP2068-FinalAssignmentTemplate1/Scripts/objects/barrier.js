var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*
 * This class creates an invisible barrier the player cannot walk through, used for the outside
 * walls of the rooms.
 */
var objects;
(function (objects) {
    var Barrier = (function (_super) {
        __extends(Barrier, _super);
        //Constructor/////////////////////////////////////////////////////////////////////////////
        /*
         * This constructor creates a barrier at the x and y positions specified with the width
         * and height specified.
         */
        function Barrier(player, x, y, width, height) {
            _super.call(this, x, y, width, height);
            //set the player
            this._player = player;
        } //constructor ends
        //Public Methods//////////////////////////////////////////////////////////////////////////
        /*
         * This method moves the player back to their previous position if they are trying to walk
         * through the barrier.
         */
        Barrier.prototype.update = function () {
            if (this.intersects(this._player.hitBox())) {
                this._player.x = this._player.preX;
                this._player.y = this._player.preY;
            } //if ends
        }; //method collide ends
        return Barrier;
    })(createjs.Rectangle);
    objects.Barrier = Barrier; //class Barrier ends
})(objects || (objects = {})); //module objects ends 
//# sourceMappingURL=barrier.js.map