import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainHomeRoutingModule } from './main-home-routing.module';
import { MainHomeComponent } from './main-home.component';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainHomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MainHomeRoutingModule,
    NgbModule,
    FormsModule
  ]
})
export class MainHomeModule { }
