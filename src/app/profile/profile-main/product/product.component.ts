import { Component } from '@angular/core';
import { FormGroup,FormBuilder,FormControl } from '@angular/forms';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(public fb:FormBuilder){}

  public selectedTabs:string = "tab1";

  public pricing:boolean = true;
  public restock:boolean = false;
  public shipping:boolean = false;
  public global_delivery:boolean = false;
  public attrubutes:boolean = false;
  public advanced:boolean = false;
  public addfeatured:boolean = false;
  navigate_inventory(nav_type:string){

    switch(nav_type){
      case nav_type : {
        alert(nav_type);
      }
      // case "pricing" : {
      //   this.pricing = true;
      // }
    }
  }

  //get product images here
  getProductImages(event:any){
    const file = event.target.files;
    console.log(file);
  }

  //add product form
  product = this.fb.group({
product_title: [''],
product_desc:[''],
price:this.fb.group({
actual_price:[''],
sell_price:['']
}),


  });

  addProduct(){
console.log(this.product);
  }

}
