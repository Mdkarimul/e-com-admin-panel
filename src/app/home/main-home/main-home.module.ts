import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainHomeRoutingModule } from './main-home-routing.module';
import { MainHomeComponent } from './main-home.component';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { HeroSliderComponent } from '../hero-slider/hero-slider.component';
import { OfferSectionComponent } from '../offer-section/offer-section.component';
import { FooterSectionComponent } from '../footer-section/footer-section.component';
@NgModule({
  declarations: [
    MainHomeComponent,
    HeaderComponent,
    HeroSliderComponent,
    OfferSectionComponent,
    FooterSectionComponent
  ],
  imports: [
    CommonModule,
    MainHomeRoutingModule,
    NgbModule,
    FormsModule
  ]
})
export class MainHomeModule { }
