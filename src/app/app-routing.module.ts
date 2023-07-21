import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuardGuard } from './Guards/auth-guard.guard';
import { adminGuard } from './Guards/admin.guard';

const routes: Routes = [
{ 
  path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), 
  title:"Admin",
   canActivate:[adminGuard]
}, 
{
  title:"Profile",
  path: 'profile', loadChildren: () => import('./profile/profile-main/profile-main.module').then(m => m.ProfileMainModule), 
   canActivate:[authGuardGuard],

},
{
  
}

  
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
