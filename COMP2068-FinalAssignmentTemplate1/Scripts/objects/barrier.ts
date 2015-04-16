module objects {
    export class Barrier extends createjs.Rectangle{
        //instance variables
        private _player: objects.Plane;

        constructor(player: objects.Plane, x: number, y: number, width: number, height: number) {
            super(x, y, width, height);

            //set the player
            this._player = player;
        } //constructor ends

        public update(): void {
            if (this.intersects(this._player.hitBox())) {
                this._player.x = this._player.preX;
                this._player.y = this._player.preY;
            } //if ends
        } //method collide ends
    } //class Barrier ends
} //module objects ends 