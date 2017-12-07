import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './app-create-task.component.html',
  styleUrls: ['./app-create-task.component.css']
})
export class AppCreateTaskComponent implements OnInit {
  task: Task;
  isChecked: boolean = false;
  constructor(private tasksService: TasksService) { }

  ngOnInit() {
  }
  onAddItem(form: NgForm) {
    this.tasksService.addNewTask(form.value.name);
    form.reset();
  }
  onToggleComplited() {
    this.isChecked = !this.isChecked;
    this.tasksService.toggleComplited(this.isChecked);
  }
}
