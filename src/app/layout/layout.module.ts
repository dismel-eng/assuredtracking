import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    MainComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class LayoutModule { }
