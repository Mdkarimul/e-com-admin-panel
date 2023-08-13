import { Component,AfterViewInit,OnInit, ViewChild, ElementRef,Renderer2, ContentChildren, QueryList, ViewChildren } from '@angular/core';
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
export class CreateCategoryComponent implements AfterViewInit,OnInit {

  constructor(
    public fb:FormBuilder,
    private categoryService:CategoryService,
    public checkError : ValidatorsService,
    public showMessage : NotificationService,
    public render:Renderer2,
    public element:ElementRef
    ){
  
      }
    
  public subCategoryToggler:boolean = true;
  public createCategoryData?:any;
  public all_category:any;
  public Cindex?:number;
  public modal_btn_Control:string="Submit";
  public httpResponse!:Observable<any>
  public Cid!:number;
 public createCategoryForm!:FormGroup;

@ViewChild('addElement',{read:ElementRef}) addElement!:ElementRef;
@ViewChildren('addElement') contentChildren !: QueryList<ElementRef>



ngOnInit(): void {
  this.createCategoryForm = this.fb.group({
    category_name:['',[Validators.minLength(5),Validators.required]],
    main_category:['',[Validators.minLength(5),Validators.required]]
   });
}




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
       for(let i=0;i<this.all_category.length;i++){
       this.all_category[i].category_tags =  this.all_category[i].category_tags[0].split("\n");
       }
        console.log(this.all_category);
      },
      error : (error)=>{
        this.showMessage.showMessage(error);
      }
    })
  }

 

  
 

   get category_name() { return this.createCategoryForm.get('category_name'); }
   get main_category() { return this.createCategoryForm.get('main_category'); }





  //edit category here
  editCategory(index:number){
    this.modal_btn_Control = "Update";
    const currentData = this.all_category[index];
    this.Cid =  currentData._id;
     const tags =currentData.category_tags;
     let all_tags ="";
     for(let i=0;i<tags.length;i++){
    all_tags +=   tags[i]+"\n";
     }
     console.log(all_tags);
    this.createCategoryForm.patchValue({
       category_name : currentData.category_name,
       main_category :all_tags
    })
  }

  deleteCategory(index:number){
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
   console.log(this.createCategoryForm);
   alert("cccc");
    // if(this.createCategoryForm.invalid){
    //   for (let [key, value] of Object.entries(this.createCategoryForm.controls)) {
    //     if(value.status==="INVALID"){
    //      this.checkError.validate_array.push(key);
    //     }
    //    }
    // }else{
    //   this.createCategoryData = this.createCategoryForm.value;
    //   if(this.modal_btn_Control==="Submit"){
    //     console.log(this.createCategoryData);
    //    this.httpResponse =  this.categoryService.createCategory(this.createCategoryData);
    //   this.modal_btn_Control = "Submit";
    //   }else if(this.modal_btn_Control==="Update"){
    //     this.createCategoryData.category_id=this.Cid;
    //     this.httpResponse =  this.categoryService.updateCategory(this.createCategoryData);
    //     this.modal_btn_Control = "Submit";
    //   }
    //   this.httpResponse.subscribe((data:any)=>{
    //     this.showMessage.showMessage(data);
    //     this.checkError.validate_array = [];
    //     this.getCategory();
    //   },
    //   (error)=>{
    //     this.showMessage.showMessage(error.error);
    //     this.checkError.validate_array = [];
    //   });
    // }
  }
}
