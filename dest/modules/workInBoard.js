"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCoords = exports.getValue = void 0;
// => Function 1 = trabajar con coordenadas
function getValue(position, size, matrix) {
    var x, y;
    x = Math.trunc((position - 1) / size);
    y = (size - ((x + 1) * size - position)) - 1;
    return matrix.cards[x][y];
}
exports.getValue = getValue;
// => Function 2 = trabajar con coordenadas
function getCoords(position, size) {
    var x, y;
    x = Math.trunc((position - 1) / size);
    y = (size - ((x + 1) * size - position)) - 1;
    return [x, y];
}
exports.getCoords = getCoords;
