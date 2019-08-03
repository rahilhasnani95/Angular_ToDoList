import { Component, OnInit } from '@angular/core';


export class Todo{

  //in angular, creating a parameterised constructor creates member variables, we dont have to write all properties again
  constructor(public id: number, public description: String, public targetDate: Date, public done: boolean)
  {

  }

}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1, 'Learn Angular', new Date(), false),
    new Todo(2, 'Learn React', new Date(), false),
    new Todo(3, 'Learn .NET', new Date(), false)

    // {id: 1, description: 'Learn Angular'},
    // {id: 2, description: 'Learn React'},
    // {id: 3, description: 'Learn .NET'}
  ] 
  
  constructor() { }

  ngOnInit() {
  }

}
