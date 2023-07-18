import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileMainRoutingModule } from './profile-main-routing.module';
import { ProfileMainComponent } from './profile-main.component';


@NgModule({
  declarations: [
    ProfileMainComponent
  ],
  imports: [
    CommonModule,
    ProfileMainRoutingModule
  ]
})
export class ProfileMainModule { }
