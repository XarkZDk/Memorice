export type pair = 2|4|6|8
export type board= string[] | string[][] 
export type coordinate = [ x:number, y:number ]

export interface matrix {
    size:pair
    cards:board
    maxpoint:number
}

export class MemoriceBoard implements matrix{
    size:pair = 2
    cards:board = [['A','B'],['B','A']]
    maxpoint:number = 0
    hiddenBoard:any = [] 

    constructor(size:pair,cards:board,maxpoint:number,hiddenBoard:board){
        this.size = size
        this.cards = cards
        this.maxpoint = maxpoint
        this.hiddenBoard = hiddenBoard
    }

    get Render(){
        return console.table(this.hiddenBoard)
    }

    ShowValue (turn:number,coord:coordinate,value:string) {   
        this.hiddenBoard[coord[0]].splice(coord[1],1,value)
        console.log(`Turno ${turn}`)
        this.Render
    }

    ReemplaceCard (coord1:number[],coord2:number[],status:string) {
        this.hiddenBoard[coord1[0]].splice(coord1[1],1,status)
        this.hiddenBoard[coord2[0]].splice(coord2[1],1,status)
        this.Render
    }

    HideCard(coord:number[],position:number) {
        this.hiddenBoard[coord[0]].splice(coord[1],1,position)
    }
    
}

export class Card {
    position:number = 0
    value:string = "EMPTY"
    coord:coordinate = [0,0]

    constructor(position:number,value:string,coord:coordinate){
        this.position = position
        this.value = value
        this.coord =coord
    }
}