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
            this._dy = 0;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Ocean.prototype.update = function () {
        };
        return Ocean;
    })(createjs.Bitmap);
    objects.Ocean = Ocean;
})(objects || (objects = {}));
//# sourceMappingURL=ocean.js.map