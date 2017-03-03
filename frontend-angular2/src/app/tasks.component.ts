import {Component, OnInit} from '@angular/core';

import { Task } from './task';
import { TaskService } from './task.service'

@Component({
  moduleId: module.id,
  selector: 'tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit{
  tasks : Task[];
  selectedTask: Task;

  constructor(private taskService: TaskService){}

  ngOnInit(){
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().then(tasks => this.tasks = tasks);
  }

  onSelect(task: Task): void {
    this.selectedTask = task;
  }

  add(text: string){
    text = text.trim()
    if(!text){ return; }
    this.taskService.create(text)
      .then(task => {
        this.tasks.push(task);
        this.selectedTask = null;
      });
  }

  delete(task: Task): void {
    this.taskService
      .delete(task.id)
      .then(() => {
        this.tasks = this.tasks.filter(h => h !== task);
        if (this.selectedTask === task) { this.selectedTask = null; }
      });
  }

}
