import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DriversComponent } from './components/drivers/drivers.component';

const routes: Routes = [{
  path: '',
  component: MainComponent,
  children: [
    {
      path: '',
      component: DashboardComponent,
    },
    {
      path: 'drivers',
      component: DriversComponent,
    },
    { path: '**', redirectTo: '' }
  ],
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
