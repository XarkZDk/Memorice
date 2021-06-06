/*
<========================= | IMPORTS & EXPORTS | =========================>
*/

import scanf from 'scanf'
import initBoard from "./modules/initBoard"
import generateHiddenBoard, { auxBoard } from "./modules/generateHiddenBoard"
import { getValue, getCoords } from "./modules/workInBoard"
import { maxPts, showValue, delay, reemplaceCard, hideCard, valuePosition } from "./modules/functions"
import { board, matrix, pair } from "./modules/types&class"
export const correct:string = "✔"

/*
<========================= | CODE | =========================>
*/

let Play = () => {

    //Pedir tamaño de la matriz, nos encargamos que se cumpla la condición
    console.log("Ingrese el tamaño de la matriz (2,4,6,8)\n")

    let size: number = scanf("%d")

    function esPar(x:any):x is pair {
        return x
    }
    
    if(esPar(size))
    {
        
        let player_points:number = 0 
        let running:boolean = true; 
        
        //Creamos matriz oculta, ( Se mostrará al usuario y utilizaremos para modificar valores ) 
        let hidden_matrix:board = []                                                              
        generateHiddenBoard(hidden_matrix,size)

        //Creamos matriz oculta, ( La utilizaremos para obtener la casilla )
        let aux_matrix:board = []
        auxBoard(aux_matrix,size)

        console.table(hidden_matrix)

        //Matriz original
        let matrix:matrix = { 
            size:size,
            cards:initBoard(size),
            maxpoint:maxPts(size)
        }       
        
         while(running){

            //Ingresar el número de casilla
            
            let position1:number = 0,
                position2:number = 0
                
                position1 = valuePosition(position1,aux_matrix,size,hidden_matrix)
                let card_value1:string = getValue(position1,size,matrix)
                let coord1:number[] = getCoords(position1,size)
                showValue(card_value1,coord1,hidden_matrix,1) // Primera carta     
        
            
            position2 = valuePosition(position1,aux_matrix,size,hidden_matrix)

            if(position1 != position2 ){
                let card_value2:string = getValue(position2,size,matrix)
                let coord2:number[] = getCoords(position2,size)
                showValue(card_value2,getCoords(position2,size),hidden_matrix,2) // Segunda carta

                
                if(card_value1 == card_value2){
                    console.log("Acertaste!")
                    player_points++
                    reemplaceCard(hidden_matrix,coord1,coord2,correct)
                }
                else{
                    console.log("Incorrecto!")
                    delay(2)
                    console.clear()
                    hideCard(hidden_matrix,coord1,position1)
                    hideCard(hidden_matrix,coord2,position2)
                    console.table(hidden_matrix)            
                }

                if(player_points == matrix.maxpoint){
                    console.log("======================================\n¡ GANASTE !\n======================================\n¿Quieres volver a jugar? pulse 1 para continuar")
                    let again:number = scanf("%d")
                    if(again == 1){
                        running = false
                        console.clear()
                        Play()
                    }
                    else{
                        console.log("Fin del juego")
                        running = false
                    } 
                }
            }
            else{
                console.clear()
                console.log("No puedes elegir la misma carta! \n")
                hideCard(hidden_matrix,coord1,position1)
                console.table(hidden_matrix)
            }
        }
                
    }
    else
    {
        console.error("Solo puede colocar un tamaño de 2, 4, 6, 8\n")
        Play()
    }
}
Play()