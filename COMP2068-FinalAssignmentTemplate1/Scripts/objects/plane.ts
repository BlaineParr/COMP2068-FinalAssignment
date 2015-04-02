module objects {

    export class Plane extends createjs.Bitmap {
        //instance variables
        private _movingUp: boolean;
        private _movingDown: boolean;
        private _movingLeft: boolean;
        private _movingRight: boolean;
        public width: number;
        public height: number;
        public name: string;

        //Constructor/////////////////////////////////////////////////////////////////////////////
        constructor() {
            super(assetLoader.getResult("plane"));

            this.name = "plane";

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.y = 430;

            createjs.Sound.play("engine", { loop: -1 });
        } //constructor ends

        //Public Methods//////////////////////////////////////////////////////////////////////////
        public update(): void {
            if (this._movingUp) {
                this.y -= 5;
            } //if ends
            if (this._movingDown) {
                this.y += 5;
            } //else if ends
            if (this._movingLeft) {
                this.x -= 5;
            } //else if ends
            if (this._movingRight) {
                this.x += 5;
            } //else if ends
        } //method update ends

        public actionStart(key): void {
            if (key == 87) {
                this._movingUp = true;
            } //if ends
            if (key == 83) {
                this._movingDown = true;
            } //if ends
            if (key == 65) {
                this._movingLeft = true;
            } //if ends
            if (key == 68) {
                this._movingRight = true;
            } //if ends
        }//method actionStart ends

        public actionEnd(key): void {
            if (key == 87) {
                this._movingUp = false;
            } //if ends
            if (key == 83) {
                this._movingDown = false;
            } //if ends
            if (key == 65) {
                this._movingLeft = false;
            } //if ends
            if (key == 68) {
                this._movingRight = false;
            } //if ends
        }//method actionStart ends
    } //class Plane ends
} //module objects ends