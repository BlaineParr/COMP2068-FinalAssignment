var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*
 * This class creates a button with pre-set hover effects.
 */
var objects;
(function (objects) {
    var Button = (function (_super) {
        __extends(Button, _super);
        //Construcor//////////////////////////////////////////////////////////////////////////////
        /*
         * This constructor creates a button at the x and y position specified.
         */
        function Button(stringPath, x, y) {
            _super.call(this, assetLoader.getResult(stringPath));
            //set the x and y reg points to the center
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            //set x to x and y to y
            this.x = x;
            this.y = y;
            //add the event listeners for mouseover and mouseout
            this.addEventListener("mouseover", this._buttonOver);
            this.addEventListener("mouseout", this._buttonOut);
        } //constructor ends
        //Private Methods/////////////////////////////////////////////////////////////////////////
        /*
         * This method returns the button to 100% opacity when the mouse leaves it.
         */
        Button.prototype._buttonOut = function (event) {
            event.currentTarget.alpha = 1.0;
        }; //method buttonOut ends
        /*
         * This method sets the button to 50% opacity when the mouse is over it.
         */
        Button.prototype._buttonOver = function (event) {
            event.currentTarget.alpha = 0.5;
        }; //method buttonOver ends
        return Button;
    })(createjs.Bitmap);
    objects.Button = Button; //class Button ends
})(objects || (objects = {})); //module objects ends
//# sourceMappingURL=button.js.map