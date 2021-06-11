"use strict";
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
var startGame = true;
while (startGame) {
    //Pedir tamaño de la matriz, nos encargamos que se cumpla la condición
    console.log("Ingrese el tamaño de la matriz (2,4,6,8)\n");
    var size = scanf_1.default("%d");
    if (size == 2 || size == 4 || size == 6 || size == 8) {
        var player_points = 0;
        var attempts = 0;
        var running = true;
        //Creamos matriz oculta, ( Se mostrará al usuario y utilizaremos para modificar valores ) 
        var hidden_matrix = [];
        generateHiddenBoard_1.default(hidden_matrix, size);
        //Creamos matriz oculta de comodín, ( La utilizaremos para obtener las posiciones )
        //Matriz original
        var matrix = new types_class_1.MemoriceBoard(size, initBoard_1.default(size), functions_1.maxPts(size), hidden_matrix);
        matrix.Render;
        while (running) {
            //Ingresar el número de casilla
            var position1 = functions_1.valuePosition(generateHiddenBoard_1.obtainPosition([size - 1, size - 1], size), size, hidden_matrix);
            var card1 = new types_class_1.Card(position1, workInBoard_1.getValue(position1, size, matrix), workInBoard_1.getCoords(position1, size));
            matrix.ShowValue(1, card1.coord, card1.value);
            var position2 = functions_1.valuePosition(generateHiddenBoard_1.obtainPosition([size - 1, size - 1], size), size, hidden_matrix);
            if (position1 != position2) {
                var card2 = new types_class_1.Card(position2, workInBoard_1.getValue(position2, size, matrix), workInBoard_1.getCoords(position2, size));
                matrix.ShowValue(2, card2.coord, card2.value);
                if (card1.value == card2.value) {
                    functions_1.delay(1);
                    player_points++;
                    attempts++;
                    matrix.ReemplaceCard(card1.coord, card2.coord, exports.correct);
                    matrix.Message("Acertaste!");
                }
                else {
                    attempts++;
                    matrix.Message("Incorrecto!");
                    functions_1.delay(2);
                    matrix.Clear;
                    matrix.HideCard(card1.coord, position1);
                    matrix.HideCard(card2.coord, position2);
                    matrix.Render;
                }
                if (player_points == matrix.maxpoint) {
                    functions_1.delay(1);
                    matrix.Clear;
                    matrix.Message("Puntos: " + player_points);
                    matrix.Message("Intentos: " + attempts);
                    matrix.Message("======================================\n¡ GANASTE !\n======================================\n");
                    running = false;
                    startGame = false;
                }
            }
            else {
                matrix.Clear;
                matrix.Message("No puedes elegir la misma carta! \n");
                matrix.HideCard(card1.coord, position1);
                matrix.Render;
            }
        }
    }
    else
        console.error("Solo puede colocar un tamaño de 2, 4, 6, 8\n");
    if (!startGame) {
        console.log("Quieres volver a jugar?, pulse 1 para aceptar");
        var repeat = scanf_1.default("%d");
        if (repeat == 1) {
            console.clear();
            startGame = true;
        }
        else {
            console.log("Fin del juego");
            startGame = false;
        }
    }
}
