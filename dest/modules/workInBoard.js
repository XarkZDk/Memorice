"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCoords = exports.getValue = void 0;
function getValue(position, size, matrix) {
    var coords = getCoords(position, size);
    var x = coords[0];
    var y = coords[1];
    return matrix.cards[x][y];
}
exports.getValue = getValue;
//============//
function getCoords(position, size) {
    var x, y;
    x = Math.trunc((position - 1) / size);
    y = (size - ((x + 1) * size - position)) - 1;
    return [x, y];
}
exports.getCoords = getCoords;
