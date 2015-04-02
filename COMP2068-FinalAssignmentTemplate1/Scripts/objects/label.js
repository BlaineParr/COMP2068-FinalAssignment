var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // LABEL CLASS
    var Label = (function (_super) {
        __extends(Label, _super);
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Label(labelString, x, y) {
            _super.call(this, labelString, constants.FONT_SIZE + " " + constants.FONT_FAMILY, constants.FONT_COLOUR);
            this.width = this.getMeasuredWidth();
            this.height = this.getMeasuredHeight();
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.x = x;
            this.y = y;
        }
        return Label;
    })(createjs.Text);
    objects.Label = Label;
})(objects || (objects = {}));
//# sourceMappingURL=label.js.map