import { Component,OnInit } from '@angular/core';
import { AjaxService } from '../services/ajax.service';
import { ActivationStart } from '@angular/router';
import { HashLocationStrategy,
  Location,
  LocationChangeEvent,
  LOCATION_INITIALIZED,
  LocationChangeListener,
  LocationStrategy, 
  PathLocationStrategy} from '@angular/common';
  import { Router, ActivationEnd } from '@angular/router';
import { FormBuilder ,FormGroup, FormControl, Validators  } from '@angular/forms';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers : [Location,{provide:LocationStrategy,useClass:PathLocationStrategy}]
})
export class AdminComponent implements OnInit {

//declare properties
public active = 1;
formData:any;
public validate_array:string[] = [];
public message?:string;
public type?:string;
constructor(private router:Router,private ajax:AjaxService,private fb:FormBuilder, location:Location){

 
}
ngOnInit(): void {
  
}


//received admin form data
adminData = this.fb.group({
  company_name: ['',[Validators.required,Validators.minLength(5)]],
  admin_username: ['',[Validators.email,Validators.required]],
  password: ['',[Validators.required,Validators.maxLength(12),Validators.minLength(6)]],
  con_password: ['',[Validators.required,Validators.maxLength(12),Validators.minLength(6)]]
});

//check error validation
checkError(value: any): boolean {
  // Perform the necessary logic to check if the value exists in the array
  return this.validate_array.includes(value);
}
//inpur form validation
get company_name (){
  return this.adminData.get("company_name");
}
get admin_username (){
  return this.adminData.get("admin_username");
}
get password (){
  return this.adminData.get("password");
}
get con_password (){
  return this.adminData.get("con_password");
}




showAdmin(){
  this.ajax.getAdmin().subscribe((data:any)=>{
  })
}


//register admin
createAdmin(event:Event){
  event.preventDefault();
  this.formData = new FormData();
  // for(const [key,value] of Object.entries(this.adminData.value))
  // {
  //   this.formData.append(key,value);
  // }
   if(this.adminData.invalid){
  for (let [key, value] of Object.entries(this.adminData.controls)) {
       if(value.status==="INVALID"){
        this.validate_array.push(key);
       }
      }
    }else{
      const data = {
        "company_name":this.adminData.value.company_name,
        "admin_username":this.adminData.value.admin_username,
        "password" : this.adminData.value.password,
        "con_password" : this.adminData.value.con_password
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
  console.log(this.validate_array);

}
}
