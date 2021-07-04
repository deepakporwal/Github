import { Component, OnInit } from '@angular/core';
import { MySubClass } from '../models/MySubClass';
import { Student } from '../models/student';

@Component({
  selector: 'app-learn-js-ts',
  templateUrl: './learn-js-ts.component.html',
  styleUrls: ['./learn-js-ts.component.css']
})
export class LearnJsTsComponent implements OnInit {

  public myArray = new Array();

  constructor() { }

  ngOnInit(): void {
    let myfunc = function(name : any,weather : any, ...extraargs : any){

      console.log(`hello ${name}` );  
      console.log(`it is ${weather}`) + `weather today !`;  

      for (let index = 0; index < extraargs.length; index++) {
        console.log('Extra Args ' + extraargs[index]);
      }
    }

    myfunc('deepak','windy','one','two','three');

    console.log('arrow function demo  =>')

    let arrowFunc  = (name : string) => console.log('Hello ' + name + '.');
    arrowFunc('deepak porwal');
   
    this.myArray[0] = "deepak";
    this.myArray[1] = 100;
    this.myArray[2] = true;  

    // ... spread operator example 
    console.log('spread operator example');
    let anotherArray = [...this.myArray,"arpit","pratik","rx100"];
    console.log(anotherArray);


    let products = [
      { name: "Hat", price: 24.5, stock: 10 },
      { name: "Kayak", price: 289.99, stock: 1 },
      { name: "Soccer Ball", price: 10, stock: 0 },
      { name: "Running Shoes", price: 116.50, stock: 20 }
      ];
    console.log(products);

    let addnewProduct = [...products];
    addnewProduct.push({
      name  :'Laptop',
      price : 40000,
      stock : 5
    });  

    console.log(addnewProduct);

    let objStud = new Student('deepak','porwal');
    console.log(objStud.name);

    // learn super keyword
    console.log('learn super keyword');
    
    let myData = new MySubClass("Adam", "sunny", "London");
    myData.printMessages();
  }

  
}
