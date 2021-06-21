import { Component } from '@angular/core';
import { ToDoItem } from './ToDoItem';
import { ToDoList } from './ToDoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  showComplete : boolean =false;

  private list = new ToDoList("Bob",
  [new ToDoItem("Go for run",true),
  new ToDoItem("Go flowers"),
  new ToDoItem("Collect tickets")]
  );

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

  addItem(newItem :string)
  {
    debugger
    if(newItem !="")
    {
      this.list.addItem(newItem);
    }
  }
}
