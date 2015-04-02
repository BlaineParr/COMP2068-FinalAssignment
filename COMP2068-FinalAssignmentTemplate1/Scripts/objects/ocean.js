var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Ocean = (function (_super) {
        __extends(Ocean, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        function Ocean() {
            _super.call(this, assetLoader.getResult("ocean"));
            // PRIVATE VARIABLE
            this._dy = 5;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this._reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        Ocean.prototype._reset = function () {
            // set the island to start at a random x value
            this.x = 0;
            this.y = -constants.OCEAN_RESET_HEIGHT;
        };
        Ocean.prototype._checkBounds = function () {
            if (this.y >= 0) {
                this._reset();
            }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Ocean.prototype.update = function () {
            this.y += this._dy;
            this._checkBounds();
        };
        return Ocean;
    })(createjs.Bitmap);
    objects.Ocean = Ocean;
})(objects || (objects = {}));
//# sourceMappingURL=ocean.js.map