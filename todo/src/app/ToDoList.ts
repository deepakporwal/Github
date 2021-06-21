import { ToDoItem } from "./ToDoItem";

export class ToDoList
{
    constructor (public user : string , private todoItems : ToDoItem [] = [])
    {
        // no statement required
    }

    get items() : readonly ToDoItem[]
    {
        return this.todoItems;
    }

    addItem(task: string)
    {
        this.todoItems.push(new ToDoItem(task));
    }
}