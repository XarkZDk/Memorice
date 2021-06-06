"use strict";
// ====== Imports ======
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = exports.hideCard = exports.reemplaceCard = exports.showValue = exports.valuePosition = exports.maxPts = void 0;
var scanf_1 = __importDefault(require("scanf"));
var main_1 = require("../main");
// => Function 1 = retornar Max pts ============================
function maxPts(size) {
    return (size * size) / 2;
}
exports.maxPts = maxPts;
// => Function 2 = Retornar posición ============================
function valuePosition(position, aux_matrix, size, hidden_matrix) {
    var question = true;
    while (question) {
        console.log("Ingrese un número para seleccionar la carta");
        position = scanf_1.default("%d");
        var x = void 0, y = void 0;
        x = Math.trunc((position - 1) / size);
        y = (size - ((x + 1) * size - position)) - 1;
        var checkIt = position <= aux_matrix[aux_matrix.length - 1][aux_matrix.length - 1] //Que no sea mayor al ultimo numero
            && position > 0
            && hidden_matrix[x][y] != main_1.correct;
        if (checkIt) {
            question = false;
        }
        else {
            console.error("\u00A1ERROR!,\nVerifique si la carta seleccionada est\u00E1 dentro de la matriz, o si no est\u00E1 repetida. \n");
            console.table(hidden_matrix);
        }
    }
    return position;
}
exports.valuePosition = valuePosition;
// => Function 3 = colocar valor  ============================
function showValue(get_value, coord, hidden_matrix, turn) {
    hidden_matrix[coord[0]].splice(coord[1], 1, get_value);
    console.log("Turno " + turn);
    console.table(hidden_matrix);
}
exports.showValue = showValue;
// => Function 4 = reemplazar carta (correcto o incorrecto) ============================
function reemplaceCard(hidden_matrix, coord1, coord2, status) {
    hidden_matrix[coord1[0]].splice(coord1[1], 1, status);
    hidden_matrix[coord2[0]].splice(coord2[1], 1, status);
    console.table(hidden_matrix);
}
exports.reemplaceCard = reemplaceCard;
// => Function 5 = ocultar valor de carta ============================
function hideCard(hidden_matrix, coord, position) {
    hidden_matrix[coord[0]].splice(coord[1], 1, position);
}
exports.hideCard = hideCard;
// => Function 6 = Delay ============================
function delay(seconds) {
    var waitTill = new Date(new Date().getTime() + seconds * 1000);
    while (waitTill > new Date()) {
    }
}
exports.delay = delay;
