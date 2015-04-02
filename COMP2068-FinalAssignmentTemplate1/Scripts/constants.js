var constants;
(function (constants) {
    // Font Constants
    constants.FONT_SIZE = "40px";
    constants.FONT_FAMILY = "Consolas";
    constants.FONT_COLOUR = "#FFFF00";
    // Stage Constants
    constants.SCREEN_WIDTH = 800;
    constants.SCREEN_HEIGHT = 600;
    constants.SCREEN_CENTER_WIDTH = constants.SCREEN_WIDTH * 0.5;
    constants.SCREEN_CENTER_HEIGHT = constants.SCREEN_HEIGHT * 0.5;
    constants.OCEAN_RESET_HEIGHT = 960;
    // Game Constants
    constants.PLAYER_LIVES = 5;
    constants.CLOUD_NUM = 3;

    // States Constants
    constants.MENU_STATE = 0;
    constants.PLAY_STATE = 1;
    constants.LEVEL_1_1 = 2;
    constants.LEVEL_1_2 = 3;
    constants.LEVEL_1_3 = 4;
    constants.LEVEL_1_4 = 5;
    constants.GAME_OVER_STATE = 2;
})(constants || (constants = {}));
//# sourceMappingURL=constants.js.map