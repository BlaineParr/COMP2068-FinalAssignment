var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var GameObject = (function (_super) {
        __extends(GameObject, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        function GameObject(assetString) {
            _super.call(this, assetLoader.getResult(assetString));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            //this.regX = this.width * 0.5;
            //this.regY = this.height * 0.5;
            this.isColliding = false;
        }
        //empty collide method that will be modified in the seperate objects 
        GameObject.prototype.collide = function () {
        };
        GameObject.prototype.hitBox = function () {
            return new createjs.Rectangle(this.x, this.y, this.width, this.height);
        }; //method getBounds ends
        return GameObject;
    })(createjs.Bitmap);
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map