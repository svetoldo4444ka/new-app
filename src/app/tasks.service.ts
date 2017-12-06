import { Injectable, EventEmitter, Output} from '@angular/core';
import { Task } from './task.model';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TasksService {
  changeListTasks = new Subject<Task[]>();
  //changeListTasks = new EventEmitter<Task[]>();
  private tasks: Task[] = [];
  counter: number = this.tasks.length;


  addNewTask(value: string) {
    this.tasks.push(new Task(this.tasks.length, value, false));
  }

  deleteTask(id) {
    let index = this.tasks.map((item) => item.id).indexOf(id);
    this.tasks.splice(index, 1);
  }
  getTasks() {
    return this.tasks;
    //return Observable.of(this.tasks);
  }
  getActiveTask() {
    return this.changeListTasks.next(this.tasks.filter((item) => item.completed !== true));
  }
}

