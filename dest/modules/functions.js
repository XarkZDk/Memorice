"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = exports.valuePosition = exports.maxPts = void 0;
var scanf_1 = __importDefault(require("scanf"));
var main_1 = require("../main");
function maxPts(size) {
    return (size * size) / 2;
}
exports.maxPts = maxPts;
function valuePosition(aux_matrix, size, hidden_matrix) {
    var question = true;
    var position = 0;
    while (question) {
        try {
            console.log("Ingrese un número para seleccionar la carta");
            position = scanf_1.default("%d");
            var x = void 0, y = void 0;
            x = Math.trunc((position - 1) / size);
            y = (size - ((x + 1) * size - position)) - 1;
            //---
            var checkIt = position <= aux_matrix[aux_matrix.length - 1][aux_matrix.length - 1] //Que no sea mayor al ultimo numero
                && position > 0
                && hidden_matrix[x][y] != main_1.correct;
            //---
            if (checkIt)
                question = false;
            else
                throw Error;
        }
        catch (error) {
            console.error("\u00A1ERROR!,\n     Verifique si la carta seleccionada est\u00E1 dentro de la matriz, o si no est\u00E1 repetida. \n");
            console.table(hidden_matrix);
        }
    }
    return position;
}
exports.valuePosition = valuePosition;
//============//
function delay(seconds) {
    var waitTill = new Date(new Date().getTime() + seconds * 1000);
    while (waitTill > new Date()) {
    }
}
exports.delay = delay;
