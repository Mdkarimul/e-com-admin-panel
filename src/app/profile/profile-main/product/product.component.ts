import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

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

}
