import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksComponent } from './tasks/tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: TasksComponent },

  {
    path: 'task',
    children: [
      { path: '', redirectTo: '/new', pathMatch: 'full' },
      { path: 'new', component: AddTaskComponent },
      { path: 'edit/:id', component: AddTaskComponent },
      { path: ':id', component: TaskDetailsComponent }
    ]
  },
  {
    path: 'settings',
    loadChildren: './settings/settings.module#SettingsModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
