import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category.component';
import { CreateCategoryComponent } from './component/create-category/create-category.component';

const routes: Routes = [
  { 
    path: '',
     component: CategoryComponent,
     children : [
      {
        path : "",
        component:CreateCategoryComponent
      }
    ]
    
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
