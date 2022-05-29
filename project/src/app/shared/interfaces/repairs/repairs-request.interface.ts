export interface RepairsRequestInterface{
    name: string,
    date: Date,
    advancedInfo: string,
    product:string,
    status: string,
    masterId?:string,
    clientId:string
}
