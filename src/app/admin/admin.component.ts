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
import { FormBuilder ,FormGroup, FormControl, Validators  } from '@angular/forms';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers : [Location,{provide:LocationStrategy,useClass:PathLocationStrategy}]
})
export class AdminComponent implements OnInit {
public active = 1;
formData:any;
location:Location;
constructor(private ajax:AjaxService,private fb:FormBuilder, location:Location){
 this.location = location;
 console.log(location);
 
}
ngOnInit(): void {
}



adminData = this.fb.group({
  company_name: ['',[Validators.required,Validators.minLength(5)]],
  admin_username: ['',[Validators.email,Validators.required]],
  password: ['',[Validators.required,Validators.maxLength(12),Validators.minLength(6)]],
  con_password: ['',[Validators.required,Validators.maxLength(12),Validators.minLength(6)]]
});







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

check(){
  console.log(this.adminData);
}




showAdmin(){
  this.ajax.getAdmin().subscribe((data:any)=>{
  })
}



createAdmin(event:Event){
  event.preventDefault();
  this.formData = new FormData();
  for(const [key,value] of Object.entries(this.adminData.value))
  {
    this.formData.append(key,value);
  }
  const data = {
    "company_name":this.adminData.value.company_name,
    "admin_username":this.adminData.value.admin_username,
    "password" : this.adminData.value.password,
    "con_password" : this.adminData.value.con_password
  };
  this.ajax.createAdmin(data).subscribe((res:any)=>{
    console.log(res);
  });
}
}
