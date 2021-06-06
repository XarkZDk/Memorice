"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function initBoard(size) {
    if (size == 2) {
        console.log("El tamaño de la matriz será 2!");
        return [['A', 'B'], ['B', 'A']];
    }
    else if (size == 4) {
        console.log("El tamaño de la matriz será 4!");
        return [['A', 'A', 'C', 'D'], ['G', 'C', 'D', 'H'], ['E', 'B', 'F', 'F'], ['E', 'G', 'H', 'B']];
    }
    else if (size == 6) {
        console.log("El tamaño de la matriz será 6!");
        return [['A', 'B', 'C', 'A', 'B', 'C'], ['G', 'I', 'G', 'H', 'H', 'I'], ['F', 'E', 'D', 'F', 'E', 'D'], ['J', 'M', 'N', 'K', 'O', 'L'], ['J', 'M', 'K', 'N', 'Q', 'Ñ'], ['L', 'O', 'P', 'Ñ', 'P', 'Q']];
    }
    else if (size == 8) {
        console.log("El tamaño de la matriz será 8!");
        return [['A', 'Q', 'E', 'E', 'C', 'G', 'K', 'D'], ['B', 'F', 'B', 'F', 'C', 'G', 'I', 'H'], ['I', 'H', 'J', 'N', 'D', 'K', 'L', 'Ñ'], ['M', 'P', 'N', 'J', 'L', 'Ñ', 'W', 'O'], ['M', 'P', 'A', 'Q', 'R', 'X', 'V', 'S'], ['T', 'T', 'U', 'U', 'V', 'S', 'O', 'W'], ['R', 'X', '2', 'Y', 'Z', 'Y', '1', '3'], ['4', '5', '1', '3', '4', '2', '5', 'Z']];
    }
    else
        return [];
}
exports.default = initBoard;
