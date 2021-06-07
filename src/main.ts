/*
<========================= | IMPORTS & EXPORTS | =========================>
*/

import scanf from 'scanf'
import initBoard from "./modules/initBoard"
import generateHiddenBoard, { auxBoard } from "./modules/generateHiddenBoard"
import { getValue, getCoords } from "./modules/workInBoard"
import { maxPts, delay, valuePosition } from "./modules/functions"
import { board, MemoriceBoard, Card } from "./modules/types&class"
export const correct:string = "✔"

/*
<========================= | CODE | =========================>
*/

let Play = () => {

    //Pedir tamaño de la matriz, nos encargamos que se cumpla la condición
    console.log("Ingrese el tamaño de la matriz(2,4,6,8)\n")

    let size: number = scanf("%d")

    if(size == 2||size == 4||size == 6||size == 8)
    {
        
        let player_points:number = 0 
        let running:boolean = true; 
        
        //Creamos matriz oculta, ( Se mostrará al usuario y utilizaremos para modificar valores ) 
        let hidden_matrix:board = []                                                              
        generateHiddenBoard(hidden_matrix,size)

        //Creamos matriz oculta, ( La utilizaremos para obtener la casilla )
        let aux_matrix:board = []
        auxBoard(aux_matrix,size)

        //Matriz original
        let matrix = new MemoriceBoard (size,initBoard(size),maxPts(size),hidden_matrix)
        matrix.Render       

        while(running){
            //Ingresar el número de casilla
            let position1 = valuePosition(aux_matrix,size,hidden_matrix)
            let card1 = new Card (position1,getValue(position1,size,matrix),getCoords(position1,size)) 
                // position2:number = 0
            matrix.ShowValue(1,card1.coord,card1.value)
            
            let position2 = valuePosition(aux_matrix,size,hidden_matrix)

            if(position1 != position2){
                let card2 = new Card (position2,getValue(position2,size,matrix),getCoords(position2,size))
                matrix.ShowValue(2,card2.coord,card2.value)
                
                if(card1.value == card2.value){
                    console.log("Acertaste!")
                    player_points++
                    matrix.ReemplaceCard(card1.coord,card2.coord,correct)
                }
                else{
                    console.log("Incorrecto!")
                    delay(2)
                    console.clear()
                    matrix.HideCard(card1.coord,position1)
                    matrix.HideCard(card2.coord,position2)
                    matrix.Render       
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
                matrix.HideCard(card1.coord,position1)
                matrix.Render
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