import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DriversComponent } from './drivers/drivers.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DriversComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
