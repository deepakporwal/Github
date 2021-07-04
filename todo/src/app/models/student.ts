export class Student {
    private _fname: string;
    private _lname: string;
    
    constructor(fname: string, lname: string) {
        this._fname = fname;
        this._lname = lname;
    }
  
    get name() : string
    {
        return this._fname + ' ' + this._lname;
    }

}