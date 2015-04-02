var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Island = (function (_super) {
        __extends(Island, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        function Island() {
            _super.call(this, "island");
            this.name = "island";
            this._dy = 5;
            this.soundString = "yay";
            this._reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        Island.prototype._reset = function () {
            // set the island to start at a random x value
            this.x = Math.floor(Math.random() * constants.SCREEN_WIDTH);
            this.y = -this.height;
        };
        Island.prototype._checkBounds = function () {
            if (this.y > (constants.SCREEN_HEIGHT + this.height)) {
                this._reset();
            }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Island.prototype.update = function () {
            this.y += this._dy;
            this._checkBounds();
        };
        Island.prototype.collide = function () {
        };
        return Island;
    })(objects.GameObject);
    objects.Island = Island;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map