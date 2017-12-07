import { Task } from './task.model';
import { Subject } from 'rxjs/Subject';


export class TasksService {
  // changeListTasks = new Subject<Task[]>();
  tasks: Task[] = [
    new Task(5, 'completed 1', true),
    new Task(5, 'active 1', false),
    new Task(5, 'completed 2', true),
    new Task(5, 'active 2', false),
  ];
  allTasks = this.tasks;
  counter: number = this.tasks.length;


  addNewTask(value: string) {
    this.tasks.push(new Task(this.tasks.length, value, false));
    this.allTasks = this.tasks;
  }

  deleteTask(id) {
    let index = this.tasks.map((item) => item.id).indexOf(id);
    this.tasks.splice(index, 1);
    this.allTasks = this.tasks;
  }
  getTasks() {
    return this.tasks;
  }
  getActiveTask() {
    this.tasks = this.allTasks;
    this.tasks = this.tasks.filter((item) => item.completed !== true);
  }

  getCompletedTasks() {
    this.tasks = this.allTasks;
    this.tasks = this.tasks.filter((item) => item.completed == true);
  }

  getAllTasks() {
    this.tasks = this.allTasks;
  }
}
