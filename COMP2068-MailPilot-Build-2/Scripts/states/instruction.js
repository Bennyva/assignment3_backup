﻿/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/Diver.ts" />
var states;
(function (states) {
    function instructionState() {
        ocean.update();
        Diver.update();
    }
    states.instructionState = instructionState;

    function instruction() {
        var startGame;

        var instructions;

        game = new createjs.Container();

        ocean = new objects.Ocean(game);

        Diver = new objects.Diver(game);

        var backBtn = new Image;
        backBtn.src = "/assets/images/backBtn.png";

        var instructionsTitle;

        startGame = new createjs.Bitmap(backBtn);
        startGame.x = stage.canvas.width * 0.05;
        startGame.y = stage.canvas.height * 0.05;
        game.addChild(startGame);

        instructionsTitle = new createjs.Text("INSTRUCTIONS", constants.GAME_FONT, constants.FONT_COLOUR);
        instructionsTitle.x = stage.canvas.width * 0.30;
        instructionsTitle.y = stage.canvas.height * 0.30;
        game.addChild(instructionsTitle);

        instructionsTitle = new createjs.Text("Try to collect as many points as possible. Points are \n\ngained from bubbles. Avoid sharks at all costs. When \n\nyou touch a shark you lose a life. You only have 3 \n\nlives", constants.GAME_INSTRUCTIONS, constants.FONT_COLOUR);
        instructionsTitle.x = stage.canvas.width * 0.05;
        instructionsTitle.y = stage.canvas.height * 0.50;
        game.addChild(instructionsTitle);

        startGame.addEventListener("click", function (e) {
            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.MENU_STATE;
            changeState(currentState);
        });

        stage.addChild(game);
    }
    states.instruction = instruction;
})(states || (states = {}));
//# sourceMappingURL=instruction.js.map
