import { MyClass } from "./MyClass";

export class MySubClass extends MyClass
{
    private _city: string;
    constructor(name :string, weather:string, city:string) {
        super(name, weather);
        this._city = city;
        }
        printMessages() {
        super.printMessages();
        console.log(`You are in ${this._city}`);
        }
}