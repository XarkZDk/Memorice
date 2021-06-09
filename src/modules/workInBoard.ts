import { coordinate, matrix } from "./types&class"

export function getValue (position:number,size:number,matrix:matrix):string{
    let coords:coordinate = getCoords(position,size)
    let x = coords[0]
    let y = coords[1]

    return matrix.cards[x][y]
}

//============//

export function getCoords (position:number,size:number):coordinate {
    let x,y
    
    x = Math.trunc((position-1) / size) 
    y = (size - ((x+1)*size - position))-1

    return [x,y]
}
