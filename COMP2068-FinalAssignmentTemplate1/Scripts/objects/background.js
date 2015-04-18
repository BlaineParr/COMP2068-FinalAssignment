var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*
 * This class acts as a background for the game.
 */
var objects;
(function (objects) {
    var Background = (function (_super) {
        __extends(Background, _super);
        //Constructor/////////////////////////////////////////////////////////////////////////////
        /*
         * This constructor creates a background.
         */
        function Background() {
            _super.call(this, assetLoader.getResult("background"));
            //instance variables ends
            this._dy = 0;
            //set the width and height
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
        } //constructor ends
        return Background;
    })(createjs.Bitmap);
    objects.Background = Background; //class Background ends
})(objects || (objects = {})); //module objects ends
//# sourceMappingURL=background.js.map