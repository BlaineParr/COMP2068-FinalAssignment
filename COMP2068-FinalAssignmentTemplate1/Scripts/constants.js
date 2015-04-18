/*
 * This module contains constants to be used in various places in the game
 */
var constants;
(function (constants) {
    // Font Constants
    constants.FONT_SIZE = "40px";
    constants.FONT_FAMILY = "Arial";
    constants.FONT_COLOUR = "#FFFFFF";
    //Stage Constants
    constants.SCREEN_WIDTH = 960;
    constants.SCREEN_HEIGHT = 640;
    constants.SCREEN_CENTER_WIDTH = constants.SCREEN_WIDTH * 0.5;
    constants.SCREEN_CENTER_HEIGHT = constants.SCREEN_HEIGHT * 0.5;
    constants.OCEAN_RESET_HEIGHT = 960;
    //Game Constants
    constants.PLAYER_LIVES = 5;
    //States Constants
    constants.MENU_STATE = 0;
    constants.PLAY_STATE = 1;
    constants.PLAY_STATE_2 = 2;
    constants.PLAY_STATE_3 = 3;
    constants.PLAY_STATE_4 = 4;
    constants.GAME_OVER_STATE = 5;
    //Direction Constants
    constants.UP = 0;
    constants.DOWN = 1;
    constants.LEFT = 2;
    constants.RIGHT = 3;
})(constants || (constants = {})); //module constants ends
//# sourceMappingURL=constants.js.map