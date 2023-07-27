import { Component } from '@angular/core';
import { FormBuilder ,FormGroup, FormControl, Validators  } from '@angular/forms';
import { CategoryService } from '../../../../../services/category.service';
import { ValidatorsService } from 'src/app/services/validators.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent {

  constructor(
    public fb:FormBuilder,
    private categoryService:CategoryService,
    public checkError : ValidatorsService
    ){
    }
  public subCategoryToggler:boolean = false;
  public createCategoryData?:any;

  
  collapseSubcategory(){
    this.subCategoryToggler = !this.subCategoryToggler
  }

  createCategoryForm = this.fb.group({
    category_name:['mobile',[Validators.minLength(5),Validators.required]],
    category_tags:['',[Validators.minLength(5),Validators.required]]
   });

   get category_name() { return this.createCategoryForm.get('category_name'); }
   get category_tags() { return this.createCategoryForm.get('category_tags'); }





  createCategory(event:Event){
    event.preventDefault();
    if(this.createCategoryForm.invalid){
      for (let [key, value] of Object.entries(this.createCategoryForm.controls)) {
        if(value.status==="INVALID"){
         this.checkError.validate_array.push(key);
        }
       }
    }else{
      this.createCategoryData = this.createCategoryForm.value;
      this.categoryService.createCategory(this.createCategoryData).subscribe((data:any)=>{
        console.log(data);
      },
      (error)=>{
        console.log(error.error)
      });
    }

  }
}
