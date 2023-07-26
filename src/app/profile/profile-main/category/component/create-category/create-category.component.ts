import { Component } from '@angular/core';
import { FormBuilder ,FormGroup, FormControl, Validators  } from '@angular/forms';
import { CategoryService } from '../../../../../services/category.service';
@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent {

  constructor(public fb:FormBuilder,private categoryService:CategoryService){}
  public subCategoryToggler:boolean = false;
  public createCategoryData?:any;

  
  collapseSubcategory(){
    this.subCategoryToggler = !this.subCategoryToggler
  }

  createCategoryForm = this.fb.group({
    category_name:[''],
    tags:['']
   });



  createCategory(event:Event){
    event.preventDefault();
    console.log(this.createCategoryForm);
    this.createCategoryData = this.createCategoryForm.value;
    console.log(this.createCategoryData);
    this.categoryService.createCategory(this.createCategoryData);

  }
}
