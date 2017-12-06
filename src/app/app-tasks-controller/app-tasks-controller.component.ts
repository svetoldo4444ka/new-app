import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-controller',
  templateUrl: './app-tasks-controller.component.html',
  styleUrls: ['./app-tasks-controller.component.css']
})
export class AppTasksControllerComponent implements OnInit {
  taskCounter: number;
  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.taskCounter = this.tasksService.counter;
  }

  onGetActiveTask() {
    this.tasksService.getActiveTask();
  }
}
