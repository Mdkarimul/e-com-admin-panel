import { Component,OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit  {
  constructor(private CategoryService:CategoryService){
    
  }


public sideControl:boolean = false;
public allCategory:any;
  controlSidenav(event :boolean):void{
     this.sideControl = event;
  }
  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(){
    this.CategoryService.getCategory().subscribe({
      next : (data:any)=>{
        // console.log(data.notice);
        this.allCategory = data.notice;
      },
      error : (error)=>{
        console.log(error);
      },
      complete : ()=>{

      }
    })
  }

  



}


