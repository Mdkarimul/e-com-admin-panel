import { Component,AfterViewInit } from '@angular/core';
import { FormBuilder ,FormGroup, FormControl, Validators  } from '@angular/forms';
import { CategoryService } from '../../../../../services/category.service';
import { ValidatorsService } from 'src/app/services/validators.service';
import { NotificationService } from 'src/app/services/notification.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements AfterViewInit {

  constructor(
    public fb:FormBuilder,
    private categoryService:CategoryService,
    public checkError : ValidatorsService,
    public showMessage : NotificationService
    ){
    }
  public subCategoryToggler:boolean = true;
  public createCategoryData?:any;
  public all_category:any;
  public Cindex?:number;
  collapseSubcategory(index:number){
      this.Cindex = index;
  }

  ngAfterViewInit(): void {
    this.categoryService.getCategory().subscribe({
      next : (response)=>{
        this.all_category = response.notice;
        console.log(this.all_category);
      },
      error : (error)=>{
        this.showMessage.showMessage(error);
      }
    })
  }

  createCategoryForm = this.fb.group({
    category_name:['',[Validators.minLength(5),Validators.required]],
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
        this.showMessage.showMessage(data);
        this.checkError.validate_array = [];
      },
      (error)=>{
        console.log(error.error);
        this.showMessage.showMessage(error.error);
        this.checkError.validate_array = [];
      });
    }

  }
}
