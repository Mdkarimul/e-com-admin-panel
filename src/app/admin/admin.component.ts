import { Component,OnInit } from '@angular/core';
import { AjaxService } from '../services/ajax.service';
import { ActivationStart } from '@angular/router';
import { Router, ActivationEnd } from '@angular/router';
import { FormBuilder ,FormGroup, FormControl, Validators  } from '@angular/forms';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {

//declare properties
public active = 1;
public formData:any;
public validate_array:string[] = [];
public message?:string;
public type?:string;
constructor(private router:Router,private ajax:AjaxService,private fb:FormBuilder){

 
}
ngOnInit(): void {
  
}


//received admin form data
adminSignup = this.fb.group({
  company_name: ['',[Validators.required,Validators.minLength(5)]],
  admin_username: ['',[Validators.email,Validators.required]],
  password: ['',[Validators.required,Validators.maxLength(12),Validators.minLength(6)]],
  con_password: ['',[Validators.required,Validators.maxLength(12),Validators.minLength(6)]]
});

//received admin form data
admin_login_data = this.fb.group({
  admin_username_login: ['',[Validators.email,Validators.required]],
 password_login: ['',[Validators.required,Validators.maxLength(12),Validators.minLength(6)]],
});

//check error validation
checkError(value: any): boolean {
  // Perform the necessary logic to check if the value exists in the array
  return this.validate_array.includes(value);
}
//inpur form validation
get company_name (){
  return this.adminSignup.get("company_name");
}
get admin_username (){
  return this.adminSignup.get("admin_username");
}
get password (){
  return this.adminSignup.get("password");
}
get admin_username_login (){
  return this.admin_login_data.get("admin_username_login");
}
get password_login (){
  return this.admin_login_data.get("password_login");
}
get con_password (){
  return this.adminSignup.get("con_password");
}




showAdmin(){
  this.ajax.getAdmin().subscribe((data:any)=>{
  })
}


//register admin
createAdmin(event:Event){
  event.preventDefault();
  this.formData = new FormData();
  // for(const [key,value] of Object.entries(this.adminSignup.value))
  // {
  //   this.formData.append(key,value);
  // }
   if(this.adminSignup.invalid){
  for (let [key, value] of Object.entries(this.adminSignup.controls)) {
       if(value.status==="INVALID"){
        this.validate_array.push(key);
       }
      }
    }else{
      const data = {
        "company_name":this.adminSignup.value.company_name,
        "admin_username":this.adminSignup.value.admin_username,
        "password" : this.adminSignup.value.password,
        "con_password" : this.adminSignup.value.con_password
      };
      this.ajax.createAdmin(data).subscribe((res:any)=>{
        console.log(res);
        this.message = res.notice;
        this.type = res.res_type;
        setTimeout(()=>{
          this.message = "";
           localStorage.setItem("__admin",res.token);
           this.router.navigate(['/profile']);
        },4000);
      });
    }
}

//login admin
adminLogin(event:Event){
  event.preventDefault();
  this.formData = new FormData();
  // for(const [key,value] of Object.entries(this.adminSignup.value))
  // {
  //   this.formData.append(key,value);
  // }
   if(this.admin_login_data.invalid){
  for (let [key, value] of Object.entries(this.admin_login_data.controls)) {
       if(value.status==="INVALID"){
        this.validate_array.push(key);
       }
      }
    }else{
      const data = {
        "admin_username_login":this.admin_login_data.value.admin_username_login,
        "password_login" : this.admin_login_data.value.password_login
      };
      this.ajax.loginAdmin(data).subscribe((res:any)=>{
        this.message = res.notice;
        this.type = res.res_type;
        setTimeout(()=>{
          this.message = "";
           localStorage.setItem("__admin",res.token);
           this.router.navigate(['/profile']);
        },4000);
      },(error)=>{
        this.message = error.error.notice;
        this.type = error.error.res_type;
        setTimeout(()=>{
          this.message = "";
          //  localStorage.setItem("__admin",res.token);
          //  this.router.navigate(['/profile']);
        },4000);
      });
    }
}
}
