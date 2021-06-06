export type pair = 2|4|6|8
export type board= string[] | string[][] 
export type coordinate = [ x:number, y:number ]

export interface matrix {
    size:pair,
    cards:board,
    maxpoint:number
}
