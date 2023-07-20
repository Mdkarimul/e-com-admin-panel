import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileMainRoutingModule } from './profile-main-routing.module';
import { ProfileMainComponent } from './profile-main.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  declarations: [
    ProfileMainComponent,
    SidenavComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    ProfileMainRoutingModule,
 
    
  ]
})
export class ProfileMainModule { }
