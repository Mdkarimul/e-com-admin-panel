import { Component, OnInit } from '@angular/core';
import { AuthServicesService } from 'src/app/services/auth-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-main',
  templateUrl: './profile-main.component.html',
  styleUrls: ['./profile-main.component.css']
})
export class ProfileMainComponent implements OnInit {
public navControl:boolean = false;
  constructor(private authService:AuthServicesService,private router:Router){
     
  }

  ngOnInit(): void {
    alert("from ngoninit");
      if(this.authService.getToken()){
        this.authService.verify_token().subscribe((data:any)=>{
          if(data.message=="User not authenticated !"){
           localStorage.removeItem("__admin");
            this.router.navigate(['/admin']);
          }else if(data.message=="User authenticated !"){
          localStorage.setItem("__admin",data.token);
          }
          console.log(data);
           },
           (error)=>{
          console.log(error);
           })
      }
  }

  sideMenu(value:boolean){
     if(value){
        this.navControl = true;
     }else{
      this.navControl = false;
     }
  }

}
