/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="typings/stats/stats.d.ts" />

/// <reference path="constants.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/robin.ts" />
/// <reference path="objects/blindkoala.ts" />
/// <reference path="objects/biklops.ts" />
/// <reference path="objects/background.ts" />
/// <reference path="objects/slug.ts" />
/// <reference path="objects/door.ts" />
/// <reference path="objects/pongball.ts" />
/// <reference path="objects/barrier.ts" />
/// <reference path="objects/steviekong.ts" />
/// <reference path="objects/weight.ts" />

/// <reference path="objects/label.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="objects/scoreboard.ts" />

/// <reference path="states/gameover.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/play2.ts" />
/// <reference path="states/play3.ts" />
/// <reference path="states/play4.ts" />
/// <reference path="states/menu.ts" />

/*
 * Title: The Legend of Robin
 * Authors: Blaine Parr and Cody Hutchinson
 * Last Modified By: Blaine Parr
 * Last Modified Date: April 17, 2015
 * 
 * Description: This game is a top-down dungeon crawler. You play as Robin and have the ability to
 * shoot ping pong balls at your enemies. Your goal is to clear each room and then walk through
 * the door to get to the next room. There are four rooms, in the last one you will find the final
 * boss, Stevie Kong. Defeating Stevie Kong and walking through the final door will end the game.
 * The game will also end if you run out of lives. Enemies will walk in certain paths, chase you
 * and shoot at you depending on the enemy.
 * 
 * Revision History:
 * v0.1:
 * -Initial commit to github, added constants, removed assets, stripped down to bare bones to start new project.
 * 
 * v0.2:
 * -Replaced project to fix a bunch of errors.
 * 
 * v0.3:
 * -Swapped mouse control to keyboard control.
 * 
 * v0.4:
 * -Added constants, created pongBall class, added background image to share.
 * 
 * v0.5:
 * -Set size of screen to 960 x 640, added more constants.
 * 
 * v0.6:
 * -Made background stationary.
 * 
 * v0.7:
 * -Created door object.
 * 
 * v0.8:
 * -Added empty collide method to game objects, and wrote collide method for cloud, door, island and pong ball.
 * 
 * v0.9:
 * -Modified collision to accept to objects instead of plane and one object, silenced collision checking until plane is properly modified.
 * 
 * v0.10:
 * -Wrote shoot method for plane class.
 * 
 * v0.11:
 * -Completed most of shooting method.
 * 
 * v0.12:
 * -Finished firing method.
 * 
 * v0.13:
 * -Changed plane into a gameobject.
 * 
 * v0.14:
 * -Modified collision method.
 * 
 * v0.15:
 * -Modified plane class to work with scoreboard.
 * 
 * v0.16:
 * -Modified collision between pongBall and cloud.
 * 
 * v0.17:
 * -Changed pongBall graphic. 
 * -Added method for pongBall to be destroyed on collision.
 * 
 * v0.18:
 * -Added delay to firing.
 * -Made firing mechanic more smooth.
 * -Fixed error with pongBall colliding.
 * 
 * v0.19:
 * -Created new background and replaced ocean with game background.
 * -Removed unused variables from some classes.
 * -Programmed AI for Biklops.
 * 
 * v0.20:
 * -Added door sprites as assets.
 * 
 * v0.21:
 * -Started writing door method.
 * 
 * v0.21:
 * -Added in door that resets play state when collided with.
 * 
 * v0.22:
 * -Modified door to be closed first, then be open when lockedUnlocked is true.
 * 
 * v0.23:
 * -Added two new enemies, blind koala and slug, added them to the index, the play, and the game, also did id manifests that need to be changed later.
 * 
 * v0.24:
 * -Added sprites for blindKoalas and slugs.
 * 
 * v0.25:
 * -Changed collision detection method and added in barriers.
 * 
 * v0.26:
 * -Added x and y to the constructor of gameObject. Fixed the slug class.
 * 
 * v0.27:
 * -Finished door unlocking mechanic.
 * 
 * v0.28:
 * -Added in a second level.
 * 
 * v0.30:
 * -Added third level to the game.
 * -Reduced invinciblility time after being hit from 3 seconds to 1.5 seconds.
 * 
 * v0.31:
 * -Slowed down slugs' movement.
 * -Increased slugs' health.
 * 
 * v0.32:
 * -Points are now awarded for killing enemies.
 * 
 * v0.33:
 * -Added fourth level with final boss. 
 * -Finished game mechanics.
 * 
 * v0.34:
 * -Changed steviekong asset.
 * 
 * v0.35:
 * -Increased stevieKong's firing change.
 * -Player now turns transparent when invincible.
 * -Increased lives for demo purposes.
 * 
 * v0.36:
 * -Centered game and removed fps counter.
 * 
 * v0.37:
 * -Added in song. 
 * -Increased stevieKong's chance to fire.
 * 
 * v0.38:
 * -Increased stevieKong's size.
 * 
 * v0.39:
 * -Fixed a bug where stevieKong's weights would not disappear whe he died.
 * 
 * v0.40:
 * -Fixed a bug where there was a small chance enemies could spawn inside of and get stuck in a wall.
 * 
 * v0.41:
 * -Completed some internal documentation. 
 * -Fixed several more bugs caused by stevieKong dying.
 * 
 * v0.42:
 * -Cleaned code.
 * -Removed unused assets.
 * -Internally documented everything.
 */

// Game Variables
var stats: Stats = new Stats();
var canvas;
var stage: createjs.Stage;
var assetLoader: createjs.LoadQueue;

// Score Variables
var finalScore: number = 0;
var highScore: number = 0;

// State Variables
var currentState: number;
var currentStateFunction: any;
var stateChanged: boolean = false;

//Gameplay Variables
var playerScore: number = 0;
var playerLives: number = 5;

// Game Objects
var gameOver: states.GameOver;
var play: states.Play;
var play2: states.Play2;
var play3: states.Play3;
var play4: states.Play4;
var menu: states.Menu;


// asset manifest - array of asset objects
var manifest = [
    { id: "biklops", src: "assets/images/biklops.png" },
    { id: "blindKoala", src: "assets/images/blindKoala.png" },
    { id: "slug", src: "assets/images/slug.png" },
    { id: "stevieKong", src: "assets/images/stevieKong.png" },
    { id: "weight", src: "assets/images/weight.png"},
    { id: "pongBall", src: "assets/images/pongBall.png" },
    { id: "background", src: "assets/images/background.png" },
    { id: "robin", src: "assets/images/robin.png" },
    { id: "tryAgainButton", src: "assets/images/tryAgainButton.png" },
    { id: "playButton", src: "assets/images/playButton.png" },
    { id: "closedDoor", src: "assets/images/closedDoor.png" },
    { id: "openDoor", src: "assets/images/openDoor.png" },
    { id: "song", src: "assets/audio/song.ogg" }
];

/*
 * This function loads all of the assets before the game is shown.
 */
function preload() {
    assetLoader = new createjs.LoadQueue(); // instantiated assetLoader
    assetLoader.installPlugin(createjs.Sound);
    assetLoader.on("complete", init, this); // event handler-triggers when loading done
    assetLoader.loadManifest(manifest); // loading my asset manifest
} //function preLoad ends

//this function initializes the game for play
function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // Enable mouse events
    createjs.Ticker.setFPS(60); // 60 frames per second
    createjs.Ticker.addEventListener("tick", gameLoop);

    currentState = constants.MENU_STATE;
    changeState(currentState);
} //function init ends

/*
 * This function updates the game.
 */
function gameLoop() {
    currentStateFunction.update();

    if (stateChanged) {
        changeState(currentState);
    } //if ends

    stage.update(); // Refreshes our stage
} //function gameLoop ends

/*
 * This function changes between the various gameStates.
 */
function changeState(state: number) {

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
        case constants.PLAY_STATE_4:
            // Instantiate Play State
            play4 = new states.Play4();
            currentStateFunction = play4;
            break;
        case constants.GAME_OVER_STATE:
            // Instantiate Game Over State
            gameOver = new states.GameOver();
            currentStateFunction = gameOver;
            break;
    } //switch ends
} //function changeState ends