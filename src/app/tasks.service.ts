import { Task } from './task.model';
import { Subject } from 'rxjs/Subject';

export class TasksService {
  private tasks: Task[] = [];
  changeListTasks = new Subject<Task[]>();
  changeListLength = new Subject<number>();
  changingTasks= [];
  counter: number = this.tasks.length;
  deleteTask(id) {
    this.changingTasks = this.tasks.filter( (item, index) => index !== id);
    this.tasks = this.changingTasks;
    this.changeListTasks.next(this.tasks);
  }
  addNewTask(value: string) {
    this.tasks.push(new Task(this.tasks.length, value, false));
    this.changeListTasks.next(this.tasks);
    this.changeListLength.next(this.tasks.length);
  }
  getActiveTask()  {
    this.changingTasks = this.tasks.filter((item) => item.completed !== true);
    this.changeListTasks.next(this.changingTasks);
  }
  // getUpdateTasks() {
  //   this.changeListTasks.next(this.tasks);
  // }
  getAllTask() {
    this.changeListTasks.next(this.tasks);
  }
  getCompletedTasks() {
    this.changingTasks = this.tasks.filter((item) => item.completed === true);
    this.changeListTasks.next(this.changingTasks);
  }
  getCompletedTask() {
    this.changingTasks = this.tasks.filter((item) => item.completed === false);
    this.tasks = this.changingTasks;
    this.changeListTasks.next(this.tasks);
  }
  changeTask(value, id) {
   this.tasks.map((item, index) => {
     if (index === id) {
       item.name = value;
     }
   });
    this.changeListTasks.next(this.tasks);
  }
  toggleComplited(value) {
    if (value) {
      for (let task of this.tasks){
        task.completed = true;
      }
    } else {
      for (let task of this.tasks){
        task.completed = false;
      }
    }
  }
  updateCounter(obj) {

    this.changingTasks = this.tasks.filter((item) => console.log(item.completed === false));
    // this.changeListTasks.next(this.changingTasks);
    // console.log(this.changingTasks.length);
    // this.changeListLength.next(this.changingTasks.length);
  }
}

