﻿var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Island Class
    var Island = (function (_super) {
        __extends(Island, _super);
        function Island(game) {
            _super.call(this, "bubble", game);
            this.dy = 5;
            this.game.addChild(this);
            this.reset();
        }
        Island.prototype.reset = function () {
            this.x = stage.canvas.width + this.width;
            this.y = Math.floor(Math.random() * stage.canvas.height);
        };

        Island.prototype.update = function () {
            this.x -= this.dy;
            if (this.x <= (0 - this.width)) {
                this.reset();
            }
        };
        return Island;
    })(objects.GameObject);
    objects.Island = Island;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map
