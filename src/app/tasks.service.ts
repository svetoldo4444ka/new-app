import { Task } from './task.model';
import { Subject } from 'rxjs/Subject';


export class TasksService {
  changeListTasks = new Subject<Task[]>();
  tasks: Task[] = [new Task(5, 'name', false)];
  //counter: number = this.tasks.length;


  addNewTask(value: string) {
    this.tasks.push(new Task(this.tasks.length, value, false));
  }

  deleteTask(id) {
    let index = this.tasks.map((item) => item.id).indexOf(id);
    this.tasks.splice(index, 1);
  }
  getTasks() {
    return this.tasks.slice();
  }
  getActiveTask() {
    this.tasks.filter((item) => item.completed !== true);
    console.log(this.tasks);
    this.changeListTasks.next(this.tasks);
  }
}

