"use strict";
/*
<========================= | IMPORTS & EXPORTS | =========================>
*/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.correct = void 0;
var scanf_1 = __importDefault(require("scanf"));
var initBoard_1 = __importDefault(require("./modules/initBoard"));
var generateHiddenBoard_1 = __importStar(require("./modules/generateHiddenBoard"));
var workInBoard_1 = require("./modules/workInBoard");
var functions_1 = require("./modules/functions");
var types_class_1 = require("./modules/types&class");
exports.correct = "✔";
/*
<========================= | CODE | =========================>
*/
var Play = function () {
    //Pedir tamaño de la matriz, nos encargamos que se cumpla la condición
    console.log("Ingrese el tamaño de la matriz(2,4,6,8)\n");
    var size = scanf_1.default("%d");
    if (size == 2 || size == 4 || size == 6 || size == 8) {
        var player_points = 0;
        var running = true;
        //Creamos matriz oculta, ( Se mostrará al usuario y utilizaremos para modificar valores ) 
        var hidden_matrix = [];
        generateHiddenBoard_1.default(hidden_matrix, size);
        //Creamos matriz oculta, ( La utilizaremos para obtener la casilla )
        var aux_matrix = [];
        generateHiddenBoard_1.auxBoard(aux_matrix, size);
        //Matriz original
        var matrix = new types_class_1.MemoriceBoard(size, initBoard_1.default(size), functions_1.maxPts(size), hidden_matrix);
        matrix.Render;
        while (running) {
            //Ingresar el número de casilla
            var position1 = functions_1.valuePosition(aux_matrix, size, hidden_matrix);
            var card1 = new types_class_1.Card(position1, workInBoard_1.getValue(position1, size, matrix), workInBoard_1.getCoords(position1, size));
            // position2:number = 0
            matrix.ShowValue(1, card1.coord, card1.value);
            var position2 = functions_1.valuePosition(aux_matrix, size, hidden_matrix);
            if (position1 != position2) {
                var card2 = new types_class_1.Card(position2, workInBoard_1.getValue(position2, size, matrix), workInBoard_1.getCoords(position2, size));
                matrix.ShowValue(2, card2.coord, card2.value);
                if (card1.value == card2.value) {
                    console.log("Acertaste!");
                    player_points++;
                    matrix.ReemplaceCard(card1.coord, card2.coord, exports.correct);
                }
                else {
                    console.log("Incorrecto!");
                    functions_1.delay(2);
                    console.clear();
                    matrix.HideCard(card1.coord, position1);
                    matrix.HideCard(card2.coord, position2);
                    matrix.Render;
                }
                if (player_points == matrix.maxpoint) {
                    console.log("======================================\n¡ GANASTE !\n======================================\n¿Quieres volver a jugar? pulse 1 para continuar");
                    var again = scanf_1.default("%d");
                    if (again == 1) {
                        running = false;
                        console.clear();
                        Play();
                    }
                    else {
                        console.log("Fin del juego");
                        running = false;
                    }
                }
            }
            else {
                console.clear();
                console.log("No puedes elegir la misma carta! \n");
                matrix.HideCard(card1.coord, position1);
                matrix.Render;
            }
        }
    }
    else {
        console.error("Solo puede colocar un tamaño de 2, 4, 6, 8\n");
        Play();
    }
};
Play();
