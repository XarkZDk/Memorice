import scanf from 'scanf'
import initBoard from "./modules/initBoard"
import generateHiddenBoard, { obtainPosition } from "./modules/generateHiddenBoard"
import { getValue, getCoords } from "./modules/workInBoard"
import { maxPts, delay, valuePosition } from "./modules/functions"
import { board, MemoriceBoard, Card } from "./modules/types&class"
export const correct:string = "✔"


let Play = () => {

    //Pedir tamaño de la matriz, nos encargamos que se cumpla la condición
    console.log("Ingrese el tamaño de la matriz (2,4,6,8)\n")

    let size:number = scanf("%d")
    

    if(size == 2||size == 4||size == 6||size == 8)
    {
        
        let player_points:number = 0 
        let attempts:number = 0
        let running:boolean = true; 
        
        //Creamos matriz oculta, ( Se mostrará al usuario y utilizaremos para modificar valores ) 
        let hidden_matrix:board = []                                                              
        generateHiddenBoard(hidden_matrix,size)

        //Creamos matriz oculta de comodín, ( La utilizaremos para obtener las posiciones )

        //Matriz original
        let matrix = new MemoriceBoard (size,initBoard(size),maxPts(size),hidden_matrix)
        matrix.Render       

        while(running){
            //Ingresar el número de casilla
            let position1 = valuePosition(obtainPosition([size-1,size-1],size),size,hidden_matrix)
            let card1 = new Card (position1,getValue(position1,size,matrix),getCoords(position1,size)) 
            matrix.ShowValue(1,card1.coord,card1.value)
            
            let position2 = valuePosition(obtainPosition([size-1,size-1],size),size,hidden_matrix)

            if(position1 != position2){

                let card2 = new Card (position2,getValue(position2,size,matrix),getCoords(position2,size))
                matrix.ShowValue(2,card2.coord,card2.value)
                
                if(card1.value == card2.value){
                    delay(1)
                    player_points++
                    attempts++
                    matrix.ReemplaceCard(card1.coord,card2.coord,correct)
                    matrix.Message("Acertaste!")
                }
                else{
                    attempts++
                    matrix.Message("Incorrecto!")
                    delay(2)
                    matrix.Clear
                    matrix.HideCard(card1.coord,position1)
                    matrix.HideCard(card2.coord,position2)
                    matrix.Render   
                }

                if(player_points == matrix.maxpoint){
                    delay(1)
                    matrix.Clear
                    matrix.Message(`Puntos: ${player_points}`)
                    matrix.Message(`Intentos: ${attempts}`)
                    matrix.Message("======================================\n¡ GANASTE !\n======================================\n¿Quieres volver a jugar? pulse 1 para continuar")
                    let again:number = scanf("%d")
                    if(again == 1){
                        running = false
                        matrix.Clear
                        Play()
                    }
                    else{
                        matrix.Message("Fin del juego")
                        running = false
                    } 
                }
            }
            else{
                matrix.Clear
                matrix.Message("No puedes elegir la misma carta! \n")
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