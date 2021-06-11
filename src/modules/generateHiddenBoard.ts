import { pair,coordinate } from "./types&class"

export default function generateHiddenBoard (hidd_mat:any[],size:pair):void {
    let aux:number = 0
    
    for (let i:number = 0; i < size; i++){
        aux += 1
        hidd_mat.push([])
        for(let j:number = 0; j < size; j++){
            if(hidd_mat[i][0]) aux += 1;
            hidd_mat[i].push(aux)
        }
    }  
}

export function obtainPosition (coord:coordinate,size:number):number { //Size => 4      //[0,1] -> (x(size) + y)+1 => 2
    try {                                                                               //[1,2] -> (x(size) + y)+1 => 7
        if(coord[0] > size || coord[1] > size) throw "La cordenada es mayor al tamaño de la matriz"
        return (coord[0] * (size) + coord[1]) + 1;  
    } 
    catch (error) {return error}
}
