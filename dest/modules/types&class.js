"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = exports.MemoriceBoard = void 0;
var MemoriceBoard = /** @class */ (function () {
    function MemoriceBoard(size, cards, maxpoint, hiddenBoard) {
        this.size = 2;
        this.cards = [['A', 'B'], ['B', 'A']];
        this.maxpoint = 0;
        this.hiddenBoard = [];
        this.size = size;
        this.cards = cards;
        this.maxpoint = maxpoint;
        this.hiddenBoard = hiddenBoard;
    }
    Object.defineProperty(MemoriceBoard.prototype, "Render", {
        get: function () {
            return console.table(this.hiddenBoard);
        },
        enumerable: false,
        configurable: true
    });
    MemoriceBoard.prototype.ShowValue = function (turn, coord, value) {
        this.hiddenBoard[coord[0]].splice(coord[1], 1, value);
        console.log("Turno " + turn);
        this.Render;
    };
    MemoriceBoard.prototype.ReemplaceCard = function (coord1, coord2, status) {
        this.hiddenBoard[coord1[0]].splice(coord1[1], 1, status);
        this.hiddenBoard[coord2[0]].splice(coord2[1], 1, status);
        this.Render;
    };
    MemoriceBoard.prototype.HideCard = function (coord, position) {
        this.hiddenBoard[coord[0]].splice(coord[1], 1, position);
    };
    return MemoriceBoard;
}());
exports.MemoriceBoard = MemoriceBoard;
var Card = /** @class */ (function () {
    function Card(position, value, coord) {
        this.position = 0;
        this.value = "EMPTY";
        this.coord = [0, 0];
        this.position = position;
        this.value = value;
        this.coord = coord;
    }
    return Card;
}());
exports.Card = Card;
