import { matrix } from "./types&class"

// => Function 1 = trabajar con coordenadas

export function getValue (position:number,size:number,matrix:matrix):string {
    let x,y
    
    x = Math.trunc((position-1) / size) 
    y = (size - ((x+1)*size - position))-1

    return matrix.cards[x][y]
}

// => Function 2 = trabajar con coordenadas

export function getCoords (position:number,size:number):number[] {
    let x,y
    
    x = Math.trunc((position-1) / size) 
    y = (size - ((x+1)*size - position))-1

    return [x,y]
}
