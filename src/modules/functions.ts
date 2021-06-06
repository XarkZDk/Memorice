// ====== Imports ======

import  scanf  from "scanf"
import { correct } from "../main"

// => Function 1 = retornar Max pts ============================

export function maxPts(size:number):number {
    return (size*size)/2
}

// => Function 2 = Retornar posición ============================

export function valuePosition(position:number,aux_matrix:any[],size:number,hidden_matrix:any[]):number {
    let question:boolean = true;

    while(question){
        console.log("Ingrese un número para seleccionar la carta")
        position = scanf("%d")

        let x,y
    
        x = Math.trunc((position-1) / size) 
        y = (size - ((x+1)*size - position))-1

        let checkIt:boolean = position <= aux_matrix[aux_matrix.length-1][aux_matrix.length-1] //Que no sea mayor al ultimo numero
        && position > 0 
        && hidden_matrix[x][y] != correct

        if(checkIt){ question = false }
        else{
            console.error(`¡ERROR!,
Verifique si la carta seleccionada está dentro de la matriz, o si no está repetida. \n`)
            console.table(hidden_matrix)
        }
    }
    return position
}


// => Function 3 = colocar valor  ============================

export function showValue (get_value:string,coord:any, hidden_matrix:any[], turn:number) {   
    hidden_matrix[coord[0]].splice(coord[1],1,get_value)
    console.log(`Turno ${turn}`)
    console.table(hidden_matrix)
}

// => Function 4 = reemplazar carta (correcto o incorrecto) ============================

export function reemplaceCard (hidden_matrix:any[],coord1:number[],coord2:number[],status:string) {
    hidden_matrix[coord1[0]].splice(coord1[1],1,status)
    hidden_matrix[coord2[0]].splice(coord2[1],1,status)
    console.table(hidden_matrix)
}

// => Function 5 = ocultar valor de carta ============================

export function hideCard(hidden_matrix:any[],coord:number[],position:number) {
    hidden_matrix[coord[0]].splice(coord[1],1,position)
}

// => Function 6 = Delay ============================

export function delay (seconds:number):void {
    var waitTill = new Date(new Date().getTime() + seconds * 1000);
    while(waitTill > new Date()){
    }
}
