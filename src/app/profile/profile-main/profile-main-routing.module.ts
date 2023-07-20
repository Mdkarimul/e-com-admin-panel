import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileMainComponent } from './profile-main.component';

const routes: Routes = [
   {
     path: '',
      component: ProfileMainComponent,
     children : [
      { path: 'overview', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
     ]
    },
  
   
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileMainRoutingModule { }