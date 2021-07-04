export class MyClass
{
    private _name: string;
    private _weather: string;

    constructor(name :string, weather: string)  {
        this._name = name;
        this._weather = weather;
        }
        set weather(value) {
        this._weather = value;
        }
        get weather() {
        return `Today is ${this._weather}`;
        }
        printMessages() {
        console.log("Hello " + this._name + ". ");
        console.log(this.weather);
        }    
}