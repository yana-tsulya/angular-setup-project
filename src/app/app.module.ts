import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DropdownModule } from './shared/dropdown/dropdown.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DropdownModule
  ],
  declarations: [
    AppComponent,
    TaskItemComponent,
    TasksComponent,
    AddTaskComponent,
    TaskDetailsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
