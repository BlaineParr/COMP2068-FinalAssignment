var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    /*
     * This class creates text labels.
     */
    var Label = (function (_super) {
        __extends(Label, _super);
        //Constructor/////////////////////////////////////////////////////////////////////////////
        /*
         * This class creates a label with the text specified at the position specified.
         */
        function Label(labelString, x, y) {
            _super.call(this, labelString, constants.FONT_SIZE + " " + constants.FONT_FAMILY, constants.FONT_COLOUR);
            //set the width and height
            this.width = this.getMeasuredWidth();
            this.height = this.getMeasuredHeight();
            //set the reg points to the centre
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            //set the position
            this.x = x;
            this.y = y;
        } //constructor ends
        return Label;
    })(createjs.Text);
    objects.Label = Label; //class Label ends
})(objects || (objects = {})); //module objects ends
//# sourceMappingURL=label.js.map