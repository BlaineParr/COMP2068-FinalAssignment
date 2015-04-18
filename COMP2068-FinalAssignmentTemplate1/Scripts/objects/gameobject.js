var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*
 * This class acts as a template for all gameObjects.
 */
var objects;
(function (objects) {
    var GameObject = (function (_super) {
        __extends(GameObject, _super);
        //Constructor/////////////////////////////////////////////////////////////////////////////
        function GameObject(assetString, x, y) {
            //load the image
            _super.call(this, assetLoader.getResult(assetString));
            //set the width and height
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            //set the regX and regY to the center of the object
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            //set the postion plus the width and height divided by 2 so we can specify by top left
            this.x = x + (this.width / 2);
            this.y = y + (this.height / 2);
        } //constructor ends
        /*
         * This method is for the actions that take place when an object collides. It is specified
         * in each individual object.
         */
        GameObject.prototype.collide = function () {
        }; //method collide ends
        /*
         * This method creates a rectangle at the position of the object, this is used to see if
         * two objects are colliding.
         */
        GameObject.prototype.hitBox = function () {
            //create a rectangle at the x, y width and height of the object
            return new createjs.Rectangle(this.x - (this.width / 2), this.y - (this.height / 2), this.width, this.height);
        }; //method getBounds ends
        return GameObject;
    })(createjs.Bitmap);
    objects.GameObject = GameObject; //class GameObject ends
})(objects || (objects = {})); //module objects ends
//# sourceMappingURL=gameobject.js.map