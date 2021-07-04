import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../ToDoItem';
import { ToDoList } from '../ToDoList';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  showComplete : boolean =false;

  private list = new ToDoList("Bob",
  [new ToDoItem("Go for run",true),
  new ToDoItem("Go flowers"),
  new ToDoItem("Collect tickets")]
  );
  constructor() { }

  ngOnInit(): void {
  }
  addItem(newItem :string)
  {
    debugger
    if(newItem !="")
    {
      this.list.addItem(newItem);
    }
  }
  get username() : string
  {
    return this.list.user;
  }

  get itemCount() : number 
  {
     return this.items.length;
  }

  get items() : readonly ToDoItem[] 
  {
    return this.list.items.filter(item=> this.showComplete || !item.complete);
  } 
}
