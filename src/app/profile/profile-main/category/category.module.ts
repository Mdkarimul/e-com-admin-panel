import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { CreateCategoryComponent } from './component/create-category/create-category.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CategoryComponent,
    CreateCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule,
  ],
  providers :[
    
  ]
})
export class CategoryModule { }
