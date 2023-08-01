import { Component,AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder ,FormGroup, FormControl, Validators  } from '@angular/forms';
import { CategoryService } from '../../../../../services/category.service';
import { ValidatorsService } from 'src/app/services/validators.service';
import { NotificationService } from 'src/app/services/notification.service';
import { Observable } from 'rxjs';


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
    public showMessage : NotificationService,
    ){
    }
    
  public subCategoryToggler:boolean = true;
  public createCategoryData?:any;
  public all_category:any;
  public Cindex?:number;
  public modal_btn_Control:string="Submit";
  public httpResponse!:Observable<any>
  public Cid!:number;
//collapse sub category
  collapseSubcategory(index:number){
      this.Cindex = index;
  }

  //ng afterviewinit hook
  ngAfterViewInit(): void {
   this.getCategory();
  }

  getCategory():void{
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





  //edit category here
  editCategory(index:number){
    this.modal_btn_Control = "Update";
    const currentData = this.all_category[index];
    this.Cid =  currentData._id;
     const array1 =currentData.category_tags;
     const iterator = array1.values();
     let tags = '';
    for (const value of iterator) {
      tags+= value;
    }
    this.createCategoryForm.patchValue({
       category_name : currentData.category_name,
       category_tags : tags
    })
  }

  deleteCategory(index:number){
    this.modal_btn_Control = "Delete";
    const currentData = this.all_category[index];
    this.Cid =  currentData._id;
    console.log(this.Cid);
    this.httpResponse =  this.categoryService.deleteCategory(this.Cid);
   this.httpResponse.subscribe((data:any)=>{
    this.showMessage.showMessage(data);
    this.getCategory();
  },
  (error)=>{
    this.showMessage.showMessage(error.error);
  });
  }





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
      if(this.modal_btn_Control==="Submit"){
       this.httpResponse =  this.categoryService.createCategory(this.createCategoryData);
      }else if(this.modal_btn_Control==="Update"){
        this.createCategoryData.category_id=this.Cid;
        this.httpResponse =  this.categoryService.updateCategory(this.createCategoryData);
      }
      this.httpResponse.subscribe((data:any)=>{
        this.showMessage.showMessage(data);
        this.checkError.validate_array = [];
        this.getCategory();
      },
      (error)=>{
        this.showMessage.showMessage(error.error);
        this.checkError.validate_array = [];
      });
    }
  }
}
