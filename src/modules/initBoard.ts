import { board } from "./types&class"

export default function initBoard (size:number):board {
    let arrSymbols:any = [
        "🍎", 
        "🍏",// 2 -> 2
        "🍐",
        "🍊",
        "🍋",
        "🍌",
        "🍉",
        "🍇",// 4 -> 8
        "🍓",
        "🍈",
        "🍒",
        "🍑",
        "🥭",
        "🍍",
        "🥥",
        "🥝",
        "🥑",
        "🍆",//6 -> 18
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
        "🌮"//8 -> 32
        ]
        
        arrSymbols = ObtainFruit(arrSymbols)
        let sizeMatrix = Math.sqrt(arrSymbols.length)
        arrSymbols = putInArr(shuffle(arrSymbols))
        return arrSymbols
        
        function ObtainFruit (array:any){
            let nArray = []
            for(let i = 0; i < (size*size)/2 ; i++){
                nArray.push(array[i])
                nArray.push(array[i])
            }
            return nArray
        }
        
        function shuffle (array:any){
            array = array.sort(()=>Math.random() - 0.5);
            return array
        }
        
        function putInArr (arr:any){
            let newArray:any = []
            let aux = 0
            for(let i = 0; i < sizeMatrix; i ++){
                aux += 1
                newArray.push([])
                for(let j = 0; j < sizeMatrix; j ++){
                    if(newArray[i][0]) aux += 1;
                    newArray[i].push(arr[aux-1])
                }
            }
            return newArray
        }  
    }
    