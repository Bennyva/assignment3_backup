﻿/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/Diver.ts" />

module states {

    export function menuState() {
        ocean.update();
        Diver.update();
    }

    export function Menu() {
        var startGame: createjs.Bitmap;

        var instructions: createjs.Bitmap;

        game = new createjs.Container();

        ocean = new objects.Ocean(game);

        Diver = new objects.Diver(game);

        var imgStart = new Image;
        imgStart.src = "/assets/images/buttonStart.png";

        var imgInstructions = new Image;
        imgInstructions.src = "/assets/images/buttonInstructions.png";

        startGame = new createjs.Bitmap(imgStart);
        startGame.x = stage.canvas.width * 0.25;
        startGame.y = stage.canvas.height * 0.10;
        game.addChild(startGame);

        instructions = new createjs.Bitmap(imgInstructions);
        instructions.x = stage.canvas.width * 0.18;
        instructions.y = stage.canvas.height * 0.50;
        game.addChild(instructions);

        startGame.addEventListener("click", function (e) {
            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.PLAY_STATE;
            changeState(currentState);
        });

        instructions.addEventListener("click", function (e) {
            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.INSTRUCTIONS_STATE;
            changeState(currentState);
        });

        stage.addChild(game);
    }

}  