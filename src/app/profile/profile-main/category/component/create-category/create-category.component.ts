import { Component,AfterViewInit, ViewChild, ElementRef,Renderer2 } from '@angular/core';
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

@ViewChild('addElement',{read:ElementRef}) addElement!:ElementRef;


createDynamicElement(){
  //first sub category
  // <input type="text" class="form-control category-name" formControlName="category_name" placeholder="Enter category name" id="recipient-name">
  const div_first = this.render.createElement("div");
  const first_button = this.render.createElement("button");
  const first_i = this.render.createElement("i");
  const first_input = this.render.createElement("input");
  this.render.addClass(first_input,"first-category-input");
  this.render.setAttribute(first_input,"type","text");
  this.render.addClass(first_i,'fa');
  this.render.addClass(first_i,'fa-plus-circle');
  this.render.addClass(div_first,'my-2');
  this.render.setAttribute(div_first,'style','border-left:2px solid #ddd');
  this.render.setAttribute(first_i,'style','font-size:22px');
  this.render.setAttribute(first_button,'type','button');
  this.render.addClass(first_button,'my-2');
  this.render.appendChild(first_button,first_i);
  this.render.addClass(first_button,'custom-btn');
  this.render.setAttribute(first_input,'placeholder','Enter 1st sub category');
  this.render.addClass(first_input,'form-control');
  this.render.appendChild(div_first,first_input);
  this.render.appendChild(div_first,first_button);
  this.render.appendChild(this.addElement.nativeElement,div_first);

 this.render.listen(first_button,'click',()=>{
 //second sub category
  const div_second = this.render.createElement("div");
  const second_button = this.render.createElement("button");
  const second_i = this.render.createElement("i");
  const second_input = this.render.createElement("input");

  this.render.addClass(div_second,"second-category");
  this.render.addClass(second_input,"second-category-input");
  this.render.setAttribute(second_input,"type","text");
  this.render.addClass(second_i,'fa');
  this.render.addClass(second_i,'fa-plus-circle');
  this.render.addClass(div_second,'my-2');
  this.render.setAttribute(div_second,'style','border-left:2px solid #ddd');
  this.render.setAttribute(second_i,'style','font-size:22px');
  this.render.setAttribute(second_button,'type','button');
  this.render.addClass(second_button,'my-2');
  this.render.appendChild(second_button,second_i);
  this.render.addClass(second_button,'custom-btn');
  this.render.setAttribute(second_input,'placeholder','Enter 2nd sub category');
  this.render.addClass(second_input,'form-control');


    //ACCORDION CODING 
    const accor = this.render.createElement("div");
    const accor_item = this.render.createElement("div");
    const accor_h2 = this.render.createElement("h2");
    const accor_button = this.render.createElement("button");
    const accor_body_collapse = this.render.createElement('div');
    const accor_body = this.render.createElement("div");
  
    this.render.addClass(accor,"accordion");
    this.render.setAttribute(accor,"id","accordionExample");
    this.render.addClass(accor_item,"accordion-item");
    this.render.addClass(accor_h2,"accordion-header");
    this.render.setAttribute(accor_h2,"id","headingOne");
    this.render.addClass(accor_button,"accordion-button");
    this.render.setAttribute(accor_button,"type","button");
    this.render.setAttribute(accor_button,"data-bs-toggle","collapse")
    this.render.setAttribute(accor_button,"data-bs-target","#collapseOne");
    const accor_button_one_text = this.render.createText("2nd sub category");
    this.render.appendChild(accor_button,accor_button_one_text);
    this.render.setAttribute(accor_button,"aria-expanded","true");
    this.render.setAttribute(accor_button,"aria-controls","collapseOne");
    this.render.setAttribute(accor_body_collapse,'id','collapseOne');
    this.render.addClass(accor_body_collapse,"accordion-collapse");
    this.render.addClass(accor_body_collapse,"collapse");
    this.render.addClass(accor_body_collapse,"show");
    this.render.setAttribute(accor_body_collapse,"aria-labelledby","headingOne");
    this.render.setAttribute(accor_body_collapse,"data-bs-parent","#accordionExample");
   this.render.addClass(accor_body,"accordion-body");
  
  this.render.appendChild(div_second,second_input);
  this.render.appendChild(div_second,second_button);
  this.render.appendChild(accor_body,div_second);


   this.render.appendChild(accor_h2,accor_button);
   this.render.appendChild(accor_body_collapse,accor_body);
  
   this.render.appendChild(accor_item,accor_h2);
   this.render.appendChild(accor_item,accor_body_collapse);
   this.render.appendChild(accor,accor_item);
   this.render.appendChild(div_first,accor);
   //END ACCORDION CODING HERE



//   this.render.listen(second_button,"click",()=>{
//  //third sub category
//  const div_third = this.render.createElement("div");
//  const third_button = this.render.createElement("button");
//  const third_i = this.render.createElement("i");
//  const third_input = this.render.createElement("input");
//  this.render.addClass(div_third,"third-category");
//  this.render.addClass(third_input,"third-category-input");
//  this.render.setAttribute(third_input,"type","text");
//  this.render.addClass(third_i,'fa');
//  this.render.addClass(third_i,'fa-plus-circle');
//  this.render.addClass(div_third,'my-2');
//  this.render.setAttribute(div_third,'style','border-left:2px solid #ddd');
//  this.render.setAttribute(third_i,'style','font-size:22px');
//  this.render.setAttribute(third_button,'type','button');
//  this.render.addClass(third_button,'my-2');
//  this.render.appendChild(third_button,third_i);
//  this.render.addClass(third_button,'custom-btn');
//  this.render.setAttribute(third_input,'placeholder','Enter 3nd sub category');
//  this.render.addClass(third_input,'form-control');

//  this.render.appendChild(div_third,third_input);
//  this.render.appendChild(div_third,third_button);
//  this.render.appendChild(div_second,div_third);

//   })



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
     const tags =currentData.category_tags;
     let all_tags ="";
     for(let i=0;i<tags.length;i++){
    all_tags +=   tags[i]+"\n";
     }
     console.log(all_tags);
    this.createCategoryForm.patchValue({
       category_name : currentData.category_name,
       category_tags :all_tags
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
