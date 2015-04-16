/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="constants.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/plane.ts" />
/// <reference path="objects/blindkoala.ts" />
/// <reference path="objects/biklops.ts" />
/// <reference path="objects/ocean.ts" />
/// <reference path="objects/slug.ts" />
/// <reference path="objects/door.ts" />
/// <reference path="objects/pongball.ts" />
/// <reference path="objects/barrier.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="states/gameover.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/play2.ts" />
/// <reference path="states/play3.ts" />
/// <reference path="states/menu.ts" />
// Game Variables
var stats = new Stats();
var canvas;
var stage;
var assetLoader;
// Score Variables
var finalScore = 0;
var highScore = 0;
// State Variables
var currentState;
var currentStateFunction;
var stateChanged = false;
//Gameplay Variables
var playerScore;
var playerLives;
// Game Objects
var gameOver;
var play;
var play2;
var play3;
var menu;
// asset manifest - array of asset objects
var manifest = [
    { id: "biklops", src: "assets/images/biklops.png" },
    { id: "blindKoala", src: "assets/images/blindKoala.png" },
    { id: "slug", src: "assets/images/slug.png" },
    { id: "pongBall", src: "assets/images/pongBall.png" },
    { id: "island", src: "assets/images/island.png" },
    { id: "ocean", src: "assets/images/gameTemplate.png" },
    { id: "robin", src: "assets/images/robin.png" },
    { id: "tryAgainButton", src: "assets/images/tryAgainButton.png" },
    { id: "playButton", src: "assets/images/playButton.png" },
    { id: "closedDoor", src: "assets/images/ClosedDoor.png" },
    { id: "openDoor", src: "assets/images/OpenDoor.png" },
    { id: "engine", src: "assets/audio/engine.ogg" },
    { id: "yay", src: "assets/audio/yay.ogg" },
    { id: "thunder", src: "assets/audio/thunder.ogg" }
];
// Game Objects 
function preload() {
    assetLoader = new createjs.LoadQueue(); // instantiated assetLoader
    assetLoader.installPlugin(createjs.Sound);
    assetLoader.on("complete", init, this); // event handler-triggers when loading done
    assetLoader.loadManifest(manifest); // loading my asset manifest
}
function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // Enable mouse events
    createjs.Ticker.setFPS(60); // 60 frames per second
    createjs.Ticker.addEventListener("tick", gameLoop);
    setupStats();
    currentState = constants.MENU_STATE;
    changeState(currentState);
}
// UTILITY METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function setupStats() {
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '650px';
    stats.domElement.style.top = '440px';
    document.body.appendChild(stats.domElement);
}
function gameLoop() {
    stats.begin(); // Begin metering
    currentStateFunction.update();
    if (stateChanged) {
        changeState(currentState);
    }
    stage.update(); // Refreshes our stage
    stats.end(); // End metering
}
// Our Game Kicks off in here
function changeState(state) {
    stateChanged = false;
    switch (state) {
        case constants.MENU_STATE:
            // Instantiate Menu State
            menu = new states.Menu();
            currentStateFunction = menu;
            break;
        case constants.PLAY_STATE:
            // Instantiate Play State
            play = new states.Play();
            currentStateFunction = play;
            break;
        case constants.PLAY_STATE_2:
            // Instantiate Play State
            play2 = new states.Play2();
            currentStateFunction = play2;
            break;
        case constants.PLAY_STATE_3:
            // Instantiate Play State
            play3 = new states.Play3();
            currentStateFunction = play3;
            break;
        case constants.GAME_OVER_STATE:
            // Instantiate Game Over State
            gameOver = new states.GameOver();
            currentStateFunction = gameOver;
            break;
    }
}
//# sourceMappingURL=game.js.map