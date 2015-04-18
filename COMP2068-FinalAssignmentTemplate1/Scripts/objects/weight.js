var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*
 * This class creates a weight that stevieKong will fire at the player.
 */
var objects;
(function (objects) {
    var Weight = (function (_super) {
        __extends(Weight, _super);
        //Constructor/////////////////////////////////////////////////////////////////////////////
        /*
         * This constructor creates a weight at the position specified.
         */
        function Weight(x, y, container, stevieKong) {
            _super.call(this, "weight", x, y);
            //set the variables
            this._container = container;
            this._stevieKong = stevieKong;
            //this.soundString = "laser_sound";
        } //constructor ends
        //Public Methods//////////////////////////////////////////////////////////////////////////
        /*
         * This method updates the weight's position
         */
        Weight.prototype.update = function () {
            //increase y by 10
            this.y += 10;
            //if it is off screen call collide
            if (this.y < 0) {
                this.collide();
            } //if ends
        }; //method update ends
        /*
         * This method removes the weight from the game when it collides.
         */
        Weight.prototype.collide = function () {
            //remove it from the array
            this._stevieKong.weights.splice(this._stevieKong.weights.indexOf(this), 1);
            //decrease the numberOfWeights
            this._stevieKong.numberOfWeights--;
            //remove it from the game
            this._container.removeChild(this);
        }; //method collide ends
        return Weight;
    })(objects.GameObject);
    objects.Weight = Weight; //class PongBall ends
})(objects || (objects = {})); //module objects ends 
//# sourceMappingURL=weight.js.map