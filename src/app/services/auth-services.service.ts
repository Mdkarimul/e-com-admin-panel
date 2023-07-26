import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  constructor(private http:HttpClient) { }
public browser_token?:any;
  isLogged(){
   return !!localStorage.getItem("__admin");
  }

  getToken(){
    this.browser_token =  localStorage.getItem("__admin");
    console.log(this.browser_token);
    return this.browser_token;

  }

  verify_token():Observable<any>{
    const url = "http://localhost:8080/admin/verify";
   return this.http.post<any>(url,{token:this.browser_token});
  }
}
