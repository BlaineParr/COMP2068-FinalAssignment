module objects {
    /*
     * This class creates text labels.
     */
    export class Label extends createjs.Text {
        //instance variables
        public width: number;
        public height: number;

        //Constructor/////////////////////////////////////////////////////////////////////////////
        /*
         * This class creates a label with the text specified at the position specified.
         */
        constructor(labelString: string, x: number, y: number) {
            super(labelString, constants.FONT_SIZE + " " + constants.FONT_FAMILY, constants.FONT_COLOUR);

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
    } //class Label ends
} //module objects ends