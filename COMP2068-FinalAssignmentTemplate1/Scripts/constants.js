var constants;
(function (constants) {
    // Font Constants
    constants.FONT_SIZE = "40px";
    constants.FONT_FAMILY = "Consolas";
    constants.FONT_COLOUR = "#FFFF00";
    // Stage Constants
    constants.SCREEN_WIDTH = 960;
    constants.SCREEN_HEIGHT = 640;
    constants.SCREEN_CENTER_WIDTH = constants.SCREEN_WIDTH * 0.5;
    constants.SCREEN_CENTER_HEIGHT = constants.SCREEN_HEIGHT * 0.5;
    constants.OCEAN_RESET_HEIGHT = 960;
    // Game Constants
    constants.PLAYER_LIVES = 5;
    constants.CLOUD_NUM = 3;
    // States Constants
    constants.MENU_STATE = 0;
    constants.PLAY_STATE = 1;
    constants.GAME_OVER_STATE = 2;
    //Direction Constants
    constants.UP = 0;
    constants.DOWN = 1;
    constants.LEFT = 2;
    constants.RIGHT = 3;
})(constants || (constants = {})); //module constants ends
//# sourceMappingURL=constants.js.map