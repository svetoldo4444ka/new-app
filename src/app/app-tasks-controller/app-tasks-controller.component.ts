import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-controller',
  templateUrl: './app-tasks-controller.component.html',
  styleUrls: ['./app-tasks-controller.component.css']
})
export class AppTasksControllerComponent implements OnInit {
  taskCounter: number = this.tasksService.counter;
  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    console.log(this.taskCounter);
    this.tasksService.changeListLength
      .subscribe(
        (number)  => {
          this.taskCounter = number;
        }
      );
  }

  onGetActiveTask() {
    this.tasksService.getActiveTask();
  }
  onGetAllTask() {
    this.tasksService.getAllTask();
  }
  onGetCompletedTasks() {
    this.tasksService.getCompletedTasks();
  }
  onGetCompletedTask() {
    this.tasksService.getCompletedTask();
  }
}
