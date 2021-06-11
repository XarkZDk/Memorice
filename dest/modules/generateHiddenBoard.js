"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtainPosition = void 0;
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
function obtainPosition(coord, size) {
    try { //[1,2] -> (x(size) + y)+1 => 7
        if (coord[0] > size || coord[1] > size)
            throw "La cordenada es mayor al tamaño de la matriz";
        return (coord[0] * (size) + coord[1]) + 1;
    }
    catch (error) {
        return error;
    }
}
exports.obtainPosition = obtainPosition;
