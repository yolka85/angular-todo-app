import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../todo.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../user';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {
  @Input() user: User;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

  update(): void {
    this.todoService.updateUser(this.user)
      .subscribe(() => this.goBack());
  }

}
