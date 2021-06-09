import  scanf  from "scanf"
import { correct } from "../main"

export function maxPts(size:number):number {
    return (size*size)/2
}

export function valuePosition(aux_matrix:any[],size:number,hidden_matrix:any[]):number { //Nos retorna el valor de la carta
    let question:boolean = true;
    let position = 0
    while(question){
        try {
            console.log("Ingrese un número para seleccionar la carta")
            position = scanf("%d")
    
            let x,y
        
            x = Math.trunc((position-1) / size) 
            y = (size - ((x+1)*size - position))-1
            
            //---
            let checkIt:boolean = position <= aux_matrix[aux_matrix.length-1][aux_matrix.length-1] //Que no sea mayor al ultimo numero
            && position > 0 
            && hidden_matrix[x][y] != correct
            //---

            if(checkIt) question = false;
            else throw Error

        } catch (error) {
                 console.error(`¡ERROR!,
     Verifique si la carta seleccionada está dentro de la matriz, o si no está repetida. \n`)
                 console.table(hidden_matrix)
        } 
    }
    return position
}

//============//

export function delay (seconds:number):void {
    var waitTill = new Date(new Date().getTime() + seconds * 1000);
    while(waitTill > new Date()){
    }
}
