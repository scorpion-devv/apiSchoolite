export type IGenre =  "M" | "F";

export default class Genre {
    private _value: string; 

    constructor(value: IGenre) {
        this._value = value;
    }

    static create(value: string) {
        if(value !== "M" && value !== "F") throw new Error("Invalid Genre value");
        return new Genre(value as unknown as IGenre);
    }

    
    public get value() : string { 
        return this._value; 
    }
    
}