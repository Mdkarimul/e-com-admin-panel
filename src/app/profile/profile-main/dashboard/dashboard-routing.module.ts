import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { OrderComponent } from './component/order/order.component';

const routes: Routes = [
  { 
    path: '', component: DashboardComponent,
    children : [
      {
        path : "",
        component:OrderComponent 
      }
    
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
