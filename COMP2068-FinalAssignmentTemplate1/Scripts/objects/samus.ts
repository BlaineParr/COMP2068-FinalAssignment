module objects {

    export class Samus extends objects.GameObject {
        public width: number;
        public height: number;
        public name: string;
        public laser: objects.Laser;
        public lasers: objects.Laser[] = [];
        public totalLasers;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super("samus");

            this.name = "samus";

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.x = 50;

           // createjs.Sound.play("engine", { loop: -1 });
            
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        
        public update() {
            this.y = stage.mouseY;
        }

        public hit() {
        }
    }

} 