import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Task } from './task';
import { TaskService } from './task.service'
@Component({
  moduleId: module.id,
  selector: 'task-detail',
  templateUrl: 'task-detail.component.html'
})
export class TaskDetailComponent implements OnInit{

  @Input()
  task: Task;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.switchMap((params: Params) => this.taskService.getTask(+params['id']))
      .subscribe(task => this.task = task);
  }

  goBack(){
    this.location.back();
  }

  save() {
    this.taskService.update(this.task)
      .then(() => this.goBack())
  }

}
