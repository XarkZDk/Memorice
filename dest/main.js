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
exports.correct = "✔";
/*
<========================= | CODE | =========================>
*/
var Play = function () {
    //Pedir tamaño de la matriz, nos encargamos que se cumpla la condición
    console.log("Ingrese el tamaño de la matriz (2,4,6,8)\n");
    var size = scanf_1.default("%d");
    function esPar(x) {
        return x;
    }
    if (esPar(size)) {
        var player_points = 0;
        var running = true;
        //Creamos matriz oculta, ( Se mostrará al usuario y utilizaremos para modificar valores ) 
        var hidden_matrix = [];
        generateHiddenBoard_1.default(hidden_matrix, size);
        //Creamos matriz oculta, ( La utilizaremos para obtener la casilla )
        var aux_matrix = [];
        generateHiddenBoard_1.auxBoard(aux_matrix, size);
        console.table(hidden_matrix);
        //Matriz original
        var matrix = {
            size: size,
            cards: initBoard_1.default(size),
            maxpoint: functions_1.maxPts(size)
        };
        while (running) {
            //Ingresar el número de casilla
            var position1 = 0, position2 = 0;
            position1 = functions_1.valuePosition(position1, aux_matrix, size, hidden_matrix);
            var card_value1 = workInBoard_1.getValue(position1, size, matrix);
            var coord1 = workInBoard_1.getCoords(position1, size);
            functions_1.showValue(card_value1, coord1, hidden_matrix, 1); // Primera carta     
            position2 = functions_1.valuePosition(position1, aux_matrix, size, hidden_matrix);
            if (position1 != position2) {
                var card_value2 = workInBoard_1.getValue(position2, size, matrix);
                var coord2 = workInBoard_1.getCoords(position2, size);
                functions_1.showValue(card_value2, workInBoard_1.getCoords(position2, size), hidden_matrix, 2); // Segunda carta
                if (card_value1 == card_value2) {
                    console.log("Acertaste!");
                    player_points++;
                    functions_1.reemplaceCard(hidden_matrix, coord1, coord2, exports.correct);
                }
                else {
                    console.log("Incorrecto!");
                    functions_1.delay(2);
                    console.clear();
                    functions_1.hideCard(hidden_matrix, coord1, position1);
                    functions_1.hideCard(hidden_matrix, coord2, position2);
                    console.table(hidden_matrix);
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
                functions_1.hideCard(hidden_matrix, coord1, position1);
                console.table(hidden_matrix);
            }
        }
    }
    else {
        console.error("Solo puede colocar un tamaño de 2, 4, 6, 8\n");
        Play();
    }
};
Play();
