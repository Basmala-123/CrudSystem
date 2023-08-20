import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskAdminRoutingModule } from './task-admin-routing.module';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AddTaskComponent,
    ListTasksComponent
  ],
  imports: [
    CommonModule,
    TaskAdminRoutingModule,
    HttpClientModule
  ]
})
export class TaskAdminModule { }
