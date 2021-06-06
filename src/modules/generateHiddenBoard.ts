import { pair } from "./types&class"

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
        
export function auxBoard(hidd_mat:any[],size:pair) { //Se utilizará para casos excepcionales, como ocultar las cartas erroneas y mostrar su posición
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