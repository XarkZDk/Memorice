"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function initBoard(size) {
    var arrSymbols = [
        "🍎",
        "🍏",
        "🍐",
        "🍊",
        "🍋",
        "🍌",
        "🍉",
        "🍇",
        "🍓",
        "🍈",
        "🍒",
        "🍑",
        "🥭",
        "🍍",
        "🥥",
        "🥝",
        "🥑",
        "🍆",
        "🥒",
        "🥦",
        "🌽",
        "☕",
        "🍖",
        "🍪",
        "🧊",
        "🍦",
        "🍬",
        "🥞",
        "🧁",
        "🍔",
        "🍷",
        "🌮" //8 -> 32
    ];
    arrSymbols = ObtainFruit(arrSymbols);
    var sizeMatrix = Math.sqrt(arrSymbols.length);
    arrSymbols = putInArr(shuffle(arrSymbols));
    return arrSymbols;
    function ObtainFruit(array) {
        var nArray = [];
        for (var i = 0; i < (size * size) / 2; i++) {
            nArray.push(array[i]);
            nArray.push(array[i]);
        }
        return nArray;
    }
    function shuffle(array) {
        array = array.sort(function () { return Math.random() - 0.5; });
        return array;
    }
    function putInArr(arr) {
        var newArray = [];
        var aux = 0;
        for (var i = 0; i < sizeMatrix; i++) {
            aux += 1;
            newArray.push([]);
            for (var j = 0; j < sizeMatrix; j++) {
                if (newArray[i][0])
                    aux += 1;
                newArray[i].push(arr[aux - 1]);
            }
        }
        return newArray;
    }
}
exports.default = initBoard;
