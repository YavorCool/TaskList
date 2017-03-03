import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {TasksComponent}  from './tasks.component';
import {TaskDetailComponent} from "./task-detail.component";
import {AppComponent} from "./app.component";
import {TaskService} from "./task.service";
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  AppRoutingModule,
                  HttpModule,
                 ],
  declarations: [ AppComponent,
                  TaskDetailComponent,
                  TasksComponent
                  ],
  bootstrap:    [ AppComponent,
                ],
  providers: [TaskService,
              ],
})
export class AppModule { }

