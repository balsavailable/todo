import { Todo } from './todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  constructor() { }


private todoList:Todo[]=[new Todo(1,"have to eat",new Date(),true)
,new Todo(2,"have to learn",new Date(),false)
];


  ngOnInit() {
  }





}
