"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auxBoard = void 0;
function generateHiddenBoard(hidd_mat, size) {
    var aux = 0;
    for (var i = 0; i < size; i++) {
        aux += 1;
        hidd_mat.push([]);
        for (var j = 0; j < size; j++) {
            if (hidd_mat[i][0])
                aux += 1;
            hidd_mat[i].push(aux);
        }
    }
}
exports.default = generateHiddenBoard;
function auxBoard(hidd_mat, size) {
    var aux = 0;
    for (var i = 0; i < size; i++) {
        aux += 1;
        hidd_mat.push([]);
        for (var j = 0; j < size; j++) {
            if (hidd_mat[i][0])
                aux += 1;
            hidd_mat[i].push(aux);
        }
    }
}
exports.auxBoard = auxBoard;
