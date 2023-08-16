import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskAdminRoutingModule } from './task-admin-routing.module';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';


@NgModule({
  declarations: [
    AddTaskComponent,
    ListTasksComponent
  ],
  imports: [
    CommonModule,
    TaskAdminRoutingModule
  ]
})
export class TaskAdminModule { }
