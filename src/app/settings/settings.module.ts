import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { SettingsRouterModule } from './settings-router.module';

@NgModule({
  imports: [
    CommonModule,
    SettingsRouterModule
  ],
  declarations: [SettingsComponent]
})
export class SettingsModule { }
