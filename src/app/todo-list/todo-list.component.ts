import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TodoService } from '../todo.service';
// import { stringify } from 'querystring';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  tasks: Task[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.todoService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  add(description: string): void {
    description = description.trim();
    if (!description) { return; }
    this.todoService.addTask({ description } as Task)
      .subscribe(task => {
        this.tasks.push(task);
      });
  }

}
