import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: User[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  add(login: string, password: string): void {
    login = login.trim();
    password = password.trim();
    if (!login || !password) { return; }
    this.todoService.addUser({ login, password } as User)
      .subscribe(user => {
        this.users.push(user);
      });
  }
}
