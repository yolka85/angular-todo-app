import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from './task';
import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      { id: 11, description: 'To clean the apartment' },
      { id: 12, description: 'To do homework' },
      { id: 13, description: 'To cook' },
      { id: 14, description: 'To wash the dishes' }
    ];
    const users = [];
    return {tasks, users};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(tasks: Task[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 11;
  };
  genUserId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }
}
